const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
 
const app = express();
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // permite recibir JSON desde el frontend
 
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "loging.html"));
});
 
// ── CONEXIÓN A MYSQL  ──────────────────────────────────────────
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "04Ms-02-08$&",
    database: "HangarM_Caz5geN"
});
 
conexion.connect((error) => {
    if (error) {
        console.log("Error de conexión");
    } else {
        console.log("Conectado a MySQL");
    }
});
 
// ── LOGIN ────────────────────────────────────────────────────────────────────
app.post("/login", (req, res) => {
    const usuario    = req.body.usuario;
    const contraseña = req.body.contraseña;
 
    const sql = "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?";
 
    conexion.query(sql, [usuario, contraseña], (error, resultados) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, mensaje: "Error en el servidor" });
        }
 
        if (resultados.length > 0) {
            res.json({ success: true, redirect: "/mi_pagina_b2.html" });
        } else {
            res.json({ success: false, mensaje: "Usuario o contraseña incorrectos" });
        }
    });
});
 
// ── REGISTRO ─────────────────────────────────────────────────────────────────
app.post("/register", (req, res) => {
    const { usuario, correo, contrasena } = req.body;
 
    // Verifica que el usuario o correo no existan ya
    const checkSql = "SELECT * FROM usuarios WHERE usuario = ? OR correo = ?";
    conexion.query(checkSql, [usuario, correo], (error, resultados) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, mensaje: "Error en el servidor" });
        }
        if (resultados.length > 0) {
            return res.json({ success: false, mensaje: "El usuario o correo ya está registrado" });
        }
 
        // Si no existe, lo inserta
        const insertSql = "INSERT INTO usuarios (usuario, correo, contraseña) VALUES (?, ?, ?)";
        conexion.query(insertSql, [usuario, correo, contrasena], (error) => {
            if (error) {
                console.log(error);
                return res.json({ success: false, mensaje: "Error al registrar usuario" });
            }
            res.json({ success: true, mensaje: "¡Usuario registrado exitosamente!" });
        });
    });
});
 
// ── OLVIDÉ CONTRASEÑA ────────────────────────────────────────────────────────
app.post("/forgot-password", (req, res) => {
    const { usuario, contrasena } = req.body;
 
    // Verifica que el usuario exista
    const checkSql = "SELECT * FROM usuarios WHERE usuario = ?";
    conexion.query(checkSql, [usuario], (error, resultados) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, mensaje: "Error en el servidor" });
        }
        if (resultados.length === 0) {
            return res.json({ success: false, mensaje: "Usuario no encontrado" });
        }
 
        // Si existe, actualiza la contraseña
        const updateSql = "UPDATE usuarios SET contraseña = ? WHERE usuario = ?";
        conexion.query(updateSql, [contrasena, usuario], (error) => {
            if (error) {
                console.log(error);
                return res.json({ success: false, mensaje: "Error al actualizar contraseña" });
            }
            res.json({ success: true, mensaje: "¡Contraseña actualizada exitosamente!" });
        });
    });
});
 
app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
});  