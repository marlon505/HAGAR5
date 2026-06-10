// ══════════════════════════════════════════════════════════════
//  LOGIN — usa fetch para mostrar el mensaje antes de redirigir
// ══════════════════════════════════════════════════════════════
document.getElementById("btnEntrar").addEventListener("click", async (e) => {
    e.preventDefault();
 
    const user    = document.getElementById("user").value;
    const pass    = document.getElementById("pass").value;
    const mensaje = document.getElementById("mensaje");
 
    try {
        const res  = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `usuario=${encodeURIComponent(user)}&contraseña=${encodeURIComponent(pass)}`
        });
        const data = await res.json();
 
        if (data.success) {
            mensaje.innerHTML   = "✅ Acceso Concedido";
            mensaje.style.color = "#00ffff";
            setTimeout(() => window.location.href = data.redirect, 900);
        } else {
            mensaje.innerHTML   = "❌ " + data.mensaje;
            mensaje.style.color = "red";
        }
    } catch (err) {
        mensaje.innerHTML   = "❌ Error de conexión con el servidor";
        mensaje.style.color = "red";
    }
});
 
// ══════════════════════════════════════════════════════════════
//  MODALES — abrir / cerrar
// ══════════════════════════════════════════════════════════════
const modalRegistro = document.getElementById("modalRegistro");
const modalOlvide   = document.getElementById("modalOlvide");
 
function cerrarModales() {
    modalRegistro.style.display = "none";
    modalOlvide.style.display   = "none";
    document.getElementById("mensajeReg").innerHTML   = "";
    document.getElementById("mensajeReset").innerHTML = "";
}
 
document.getElementById("linkRegistro").addEventListener("click", (e) => {
    e.preventDefault();
    modalRegistro.style.display = "flex";
});
 
document.getElementById("linkOlvide").addEventListener("click", (e) => {
    e.preventDefault();
    modalOlvide.style.display = "flex";
});
 
document.querySelectorAll(".modal-close").forEach(btn => {
    btn.addEventListener("click", cerrarModales);
});
 
window.addEventListener("click", (e) => {
    if (e.target === modalRegistro || e.target === modalOlvide) cerrarModales();
});
 
// ══════════════════════════════════════════════════════════════
//  REGISTRO — guarda nuevo usuario en MySQL ✅ 
// ══════════════════════════════════════════════════════════════
document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const usuario    = document.getElementById("regUsuario").value.trim();
    const correo     = document.getElementById("regCorreo").value.trim();   
    const contrasena = document.getElementById("regPass").value;
    const mensaje    = document.getElementById("mensajeReg");
 
    if (!usuario || !correo || !contrasena) {                               
        mensaje.innerHTML   = "❌ Completa todos los campos";
        mensaje.style.color = "red";
        return;
    }
 
    try {
        const res  = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, correo, contrasena })           
        });
        const data = await res.json();
 
        mensaje.innerHTML   = (data.success ? "✅ " : "❌ ") + data.mensaje;
        mensaje.style.color = data.success ? "#00ffff" : "red";
 
        if (data.success) {
            setTimeout(() => {
                cerrarModales();
                document.getElementById("regUsuario").value = "";
                document.getElementById("regCorreo").value  = "";          
                document.getElementById("regPass").value    = "";
            }, 1800);
        }
    } catch (err) {
        mensaje.innerHTML   = "❌ Error de conexión con el servidor";
        mensaje.style.color = "red";
    }
});
 
// ══════════════════════════════════════════════════════════════
//  OLVIDÉ CONTRASEÑA — actualiza contraseña en MySQL
// ══════════════════════════════════════════════════════════════
document.getElementById("btnResetPass").addEventListener("click", async () => {
    const usuario    = document.getElementById("resetUsuario").value.trim();
    const contrasena = document.getElementById("resetPass").value;
    const mensaje    = document.getElementById("mensajeReset");
 
    if (!usuario || !contrasena) {
        mensaje.innerHTML   = "❌ Completa todos los campos";
        mensaje.style.color = "red";
        return;
    }
 
    try {
        const res  = await fetch("/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, contrasena })
        });
        const data = await res.json();
 
        mensaje.innerHTML   = (data.success ? "✅ " : "❌ ") + data.mensaje;
        mensaje.style.color = data.success ? "#00ffff" : "red";
 
        if (data.success) {
            setTimeout(() => {
                cerrarModales();
                document.getElementById("resetUsuario").value = "";
                document.getElementById("resetPass").value    = "";
            }, 1800);
        }
    } catch (err) {
        mensaje.innerHTML   = "❌ Error de conexión con el servidor";
        mensaje.style.color = "red";
    }
});
