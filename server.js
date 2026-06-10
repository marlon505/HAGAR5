const express    = require("express");
const mysql      = require("mysql2");
const bodyParser = require("body-parser");
const path       = require("path");
const bcrypt     = require("bcryptjs");    // ← NUEVO: encriptación de contraseñas
const session    = require("express-session"); // ← NUEVO: sesiones de usuario

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// ── Sesiones ──────────────────────────────────────────────────────────────────
// Guarda quién está logueado para asociar las compras al usuario correcto
app.use(session({
    secret: "hangarm-caz5gen-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // sesión válida 24 horas
}));

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "loging.html"));
});

// ── Conexión a MySQL ──────────────────────────────────────────────────────────
// Lee desde variables de entorno — funciona en local Y en Render/producción
const conexion = mysql.createConnection({
    host:     process.env.DB_HOST || "localhost",
    port:     process.env.DB_PORT || 3306,
    user:     process.env.DB_USER || "root",
    password: process.env.DB_PASS || "04Ms-02-08$&",
    database: process.env.DB_NAME || "HangarM_Caz5geN",
    ssl:      process.env.DB_SSL === "true"
                  ? { rejectUnauthorized: false }
                  : undefined
});

conexion.connect((error) => {
    if (error) {
        console.log("\u274C Error de conexión:", error.message);
    } else {
        console.log("\u2705 Conectado a MySQL");
    }
});

// ── LOGIN ─────────────────────────────────────────────────────────────────────
// Busca el usuario y compara la contraseña con el hash almacenado en bcrypt
app.post("/login", (req, res) => {
    const usuario    = req.body.usuario;
    const contraseña = req.body.contraseña;

    // Primero busca solo por usuario (para poder comparar el hash)
    const sql = "SELECT * FROM usuarios WHERE usuario = ?";

    conexion.query(sql, [usuario], async (error, resultados) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, mensaje: "Error en el servidor" });
        }
        if (resultados.length === 0) {
            return res.json({ success: false, mensaje: "Usuario o contraseña incorrectos" });
        }

        // Compara la contraseña ingresada con el hash guardado
        const valido = await bcrypt.compare(contraseña, resultados[0].contraseña);

        if (valido) {
            // Guarda el usuario en la sesión para usarlo en las compras
            req.session.usuarioId = resultados[0].id;
            req.session.usuario   = resultados[0].usuario;
            res.json({ success: true, redirect: "/mi_pagina_b2.html" });
        } else {
            res.json({ success: false, mensaje: "Usuario o contraseña incorrectos" });
        }
    });
});

// ── REGISTRO ──────────────────────────────────────────────────────────────────
// Hashea la contraseña con bcrypt antes de insertarla en la BD
app.post("/register", async (req, res) => {
    const { usuario, correo, contrasena } = req.body;

    const checkSql = "SELECT * FROM usuarios WHERE usuario = ? OR correo = ?";
    conexion.query(checkSql, [usuario, correo], async (error, resultados) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, mensaje: "Error en el servidor" });
        }
        if (resultados.length > 0) {
            return res.json({ success: false, mensaje: "El usuario o correo ya está registrado" });
        }

        // Genera el hash (10 = sal, más alto = más seguro pero más lento)
        const hash = await bcrypt.hash(contrasena, 10);

        const insertSql = "INSERT INTO usuarios (usuario, correo, contraseña) VALUES (?, ?, ?)";
        conexion.query(insertSql, [usuario, correo, hash], (error) => {
            if (error) {
                console.log(error);
                return res.json({ success: false, mensaje: "Error al registrar usuario" });
            }
            res.json({ success: true, mensaje: "¡Usuario registrado exitosamente!" });
        });
    });
});

// ── OLVIDÉ CONTRASEÑA ─────────────────────────────────────────────────────────
// Hashea la nueva contraseña antes de actualizarla
app.post("/forgot-password", async (req, res) => {
    const { usuario, contrasena } = req.body;

    const checkSql = "SELECT * FROM usuarios WHERE usuario = ?";
    conexion.query(checkSql, [usuario], async (error, resultados) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, mensaje: "Error en el servidor" });
        }
        if (resultados.length === 0) {
            return res.json({ success: false, mensaje: "Usuario no encontrado" });
        }

        const hash = await bcrypt.hash(contrasena, 10);

        const updateSql = "UPDATE usuarios SET contraseña = ? WHERE usuario = ?";
        conexion.query(updateSql, [hash, usuario], (error) => {
            if (error) {
                console.log(error);
                return res.json({ success: false, mensaje: "Error al actualizar contraseña" });
            }
            res.json({ success: true, mensaje: "¡Contraseña actualizada exitosamente!" });
        });
    });
});

// ── GUARDAR COMPRA ────────────────────────────────────────────────────────────
// Registra la compra y su detalle en la BD al confirmar el pago
app.post("/guardar-compra", (req, res) => {
    // Verifica que el usuario tenga sesión activa
    if (!req.session.usuarioId) {
        return res.json({ success: false, mensaje: "Sesión no iniciada" });
    }

    const { carrito, metodoPago, total } = req.body;
    const usuarioId = req.session.usuarioId;

    // 1. Inserta la cabecera de la compra
    const sqlCompra = "INSERT INTO compras (usuario_id, metodo_pago, total) VALUES (?, ?, ?)";
    conexion.query(sqlCompra, [usuarioId, metodoPago, total], (error, resultado) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, mensaje: "Error al guardar la compra" });
        }

        const compraId = resultado.insertId;

        // 2. Construye el arreglo de detalles para insertarlos en bulk
        const detalles = carrito.map(item => [
            compraId,
            item.nombre,
            item.tipo   || "N/A",
            item.avion  || "N/A",
            item.cantidad,
            item.precio,
            item.precio * item.cantidad
        ]);

        const sqlDetalle = `
            INSERT INTO detalle_compras
                (compra_id, nombre_producto, tipo, avion, cantidad, precio_unitario, subtotal)
            VALUES ?
        `;
        conexion.query(sqlDetalle, [detalles], (error) => {
            if (error) {
                console.log(error);
                return res.json({ success: false, mensaje: "Error al guardar el detalle" });
            }
            res.json({ success: true, mensaje: "Compra registrada exitosamente" });
        });
    });
});

app.listen(3000, () => {
    console.log("🚀 Servidor funcionando en http://localhost:3000");
}); 