let flota = [
    { slot: 1,  name: "F-35 Lightning II",   status: "Operativo",  id: "f35" },
    { slot: 2,  name: "Su-57 Felon",         status: "Operativo",  id: "su57" },
    { slot: 3,  name: "F-22 Raptor",         status: "Disponible", id: "f22" },
    { slot: 4,  name: "J-20 Mighty Dragon",  status: "Disponible", id: "j20" },
    { slot: 5,  name: "KF-21 Boramae",       status: "Disponible", id: "kf21" },
    { slot: 6,  name: "FC-31 Gyrfalcon",     status: "Disponible", id: "fc31" },
    { slot: 7,  name: "Su-75 Checkmate",     status: "Disponible", id: "su75" },
    { slot: 8,  name: "Eurofighter Typhoon", status: "Disponible", id: "eurofighter" },
    { slot: 9,  name: "Dassault Rafale",     status: "Disponible", id: "rafale" },
    { slot: 10, name: "A-10 Thunderbolt II", status: "Disponible", id: "a10" }
];

const especificacionesAviones = {
    f35:        { nombre: "F-35 Lightning II",          categoria: "5ta Generación - Caza Multirrol Completo",         precio: 109500000, imagen: "fotos/F-35 Lightning II.jpeg" },
    su57:       { nombre: "Sukhoi Su-57 Felon",         categoria: "5ta Generación - Caza Polivalente Pesado",         precio: 34000000,  imagen: "fotos/Su-57 Felon.jpeg" },
    f22:        { nombre: "F-22 Raptor",                categoria: "5ta Generación - Superioridad Aérea Sigilosa",     precio: 150000000, imagen: "fotos/F-22 Raptor.jpeg" },
    j20:        { nombre: "Chengdu J-20 Mighty Dragon", categoria: "5ta Generación - Caza de Superioridad Aérea",     precio: 110000000, imagen: "fotos/J-20 Mighty Dragon.jpeg" },
    kf21:       { nombre: "KAI KF-21 Boramae",          categoria: "4.5+ Generación - Caza Multirrol Avanzado",       precio: 85000000,  imagen: "fotos/KF-21 Boramae.jpeg" },
    fc31:       { nombre: "Shenyang FC-31 Gyrfalcon",   categoria: "5ta Generación - Caza Naval / Exportación",       precio: 70000000,  imagen: "fotos/FC-31 Gyrfalcon.jpeg" },
    su75:       { nombre: "Sukhoi Su-75 Checkmate",     categoria: "5ta Generación - Caza Ligero Monomotor",          precio: 30000000,  imagen: "fotos/Su-75 Checkmate.jpeg" },
    eurofighter:{ nombre: "Eurofighter Typhoon",        categoria: "4.5 Generación - Caza Polivalente Delta",         precio: 124000000, imagen: "fotos/Eurofighter Typhoon.jpeg" },
    rafale:     { nombre: "Dassault Rafale",            categoria: "4.5 Generación - Caza Omniroles Francés",         precio: 115000000, imagen: "fotos/Dassault Rafale.jpeg" },
    a10:        { nombre: "A-10 Thunderbolt II",        categoria: "Ataque a Tierra / Apoyo Aéreo Cercano (CAS)",     precio: 18800000,  imagen: "fotos/A-10 Thunderbolt II.jpeg" }
};

const repuestosPorAvion = {
    f35: [
        { nombre: "Motor F135",                  tipo: "Motor",       precio: 12000000, img: "fotos/F-35 Lightning II.jpeg", desc: "Sistema de propulsión principal." },
        { nombre: "Radar AN/APG-81",             tipo: "Radar",       precio: 4500000,  img: "fotos/F-35 Lightning II.jpeg", desc: "Radar AESA multifunción." },
        { nombre: "Placas de blindaje",          tipo: "Blindaje",    precio: 1800000,  img: "fotos/F-35 Lightning II.jpeg", desc: "Protección estructural." },
        { nombre: "Sistema FLIR",                tipo: "Electrónica", precio: 2400000,  img: "fotos/F-35 Lightning II.jpeg", desc: "Sensor infrarrojo frontal." },
        { nombre: "Computadora de misión",       tipo: "Electrónica", precio: 3100000,  img: "fotos/F-35 Lightning II.jpeg", desc: "Procesamiento táctico." },
        { nombre: "Bahía de armas",              tipo: "Módulo",      precio: 2600000,  img: "fotos/F-35 Lightning II.jpeg", desc: "Compartimento interno." },
        { nombre: "Sistema de guerra electrónica", tipo: "Sistema",   precio: 5200000,  img: "fotos/F-35 Lightning II.jpeg", desc: "Defensa y contramedidas." },
        { nombre: "Tren de aterrizaje",          tipo: "Mecánico",    precio: 1900000,  img: "fotos/F-35 Lightning II.jpeg", desc: "Aterrizaje y soporte." },
        { nombre: "Pintura furtiva",             tipo: "Revestimiento",precio: 1500000, img: "fotos/F-35 Lightning II.jpeg", desc: "Recubrimiento de baja observabilidad." }
    ],
    su57: [
        { nombre: "Motor AL-41F1",       tipo: "Motor",       precio: 9500000, img: "fotos/Su-57 Felon.jpeg", desc: "Propulsión de alto rendimiento." },
        { nombre: "Radar Sh121",         tipo: "Radar",       precio: 3900000, img: "fotos/Su-57 Felon.jpeg", desc: "Sistema AESA avanzado." },
        { nombre: "Control vectorial",   tipo: "Sistema",     precio: 3200000, img: "fotos/Su-57 Felon.jpeg", desc: "Manejo tridimensional." },
        { nombre: "Sensores IR",         tipo: "Electrónica", precio: 2200000, img: "fotos/Su-57 Felon.jpeg", desc: "Detección pasiva." },
        { nombre: "Módulo de navegación",tipo: "Electrónica", precio: 1800000, img: "fotos/Su-57 Felon.jpeg", desc: "Guiado táctico." },
        { nombre: "Bahía interna",       tipo: "Módulo",      precio: 2500000, img: "fotos/Su-57 Felon.jpeg", desc: "Compartimiento interno." },
        { nombre: "Blindaje ligero",     tipo: "Blindaje",    precio: 1400000, img: "fotos/Su-57 Felon.jpeg", desc: "Protección estructural." },
        { nombre: "Tren de aterrizaje",  tipo: "Mecánico",    precio: 1700000, img: "fotos/Su-57 Felon.jpeg", desc: "Soporte y frenado." },
        { nombre: "Sistema ECM",         tipo: "Sistema",     precio: 4300000, img: "fotos/Su-57 Felon.jpeg", desc: "Contramedidas electrónicas." }
    ],
    f22: [
        { nombre: "Motor F119",            tipo: "Motor",       precio: 14000000, img: "fotos/F-22 Raptor.jpeg", desc: "Motor de supercrucero." },
        { nombre: "Radar AN/APG-77",       tipo: "Radar",       precio: 5000000,  img: "fotos/F-22 Raptor.jpeg", desc: "Radar AESA de precisión." },
        { nombre: "Blindaje interno",      tipo: "Blindaje",    precio: 2100000,  img: "fotos/F-22 Raptor.jpeg", desc: "Protección de fuselaje." },
        { nombre: "Sistema de oxígeno",    tipo: "Sistema",     precio: 1600000,  img: "fotos/F-22 Raptor.jpeg", desc: "Soporte vital." },
        { nombre: "Computadora de combate",tipo: "Electrónica", precio: 2800000,  img: "fotos/F-22 Raptor.jpeg", desc: "Procesamiento táctico." },
        { nombre: "Sensor IR",             tipo: "Electrónica", precio: 2400000,  img: "fotos/F-22 Raptor.jpeg", desc: "Detección pasiva." },
        { nombre: "Bahía de armamento",    tipo: "Módulo",      precio: 2300000,  img: "fotos/F-22 Raptor.jpeg", desc: "Carga interna." },
        { nombre: "Tren de aterrizaje",    tipo: "Mecánico",    precio: 1900000,  img: "fotos/F-22 Raptor.jpeg", desc: "Despegue y aterrizaje." },
        { nombre: "Pintura stealth",       tipo: "Revestimiento",precio: 1700000, img: "fotos/F-22 Raptor.jpeg", desc: "Baja observabilidad." }
    ],
    j20: [
        { nombre: "Motor WS-15",           tipo: "Motor",       precio: 10000000, img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Motor de nueva generación." },
        { nombre: "Radar KLJ-5",           tipo: "Radar",       precio: 4200000,  img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Sensor principal AESA." },
        { nombre: "Bahía interna modular", tipo: "Módulo",      precio: 2500000,  img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Compartimiento de armas." },
        { nombre: "Sistema de navegación", tipo: "Electrónica", precio: 1800000,  img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Guiado táctico." },
        { nombre: "Blindaje estructural",  tipo: "Blindaje",    precio: 1600000,  img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Protección del fuselaje." },
        { nombre: "Computadora de misión", tipo: "Electrónica", precio: 3000000,  img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Gestión de combate." },
        { nombre: "Sistema ECM",           tipo: "Sistema",     precio: 4100000,  img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Defensa electrónica." },
        { nombre: "Tren de aterrizaje",    tipo: "Mecánico",    precio: 2000000,  img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Soporte táctico." },
        { nombre: "Recubrimiento stealth", tipo: "Revestimiento",precio: 1900000, img: "fotos/J-20 Mighty Dragon.jpeg", desc: "Reducción de firma radar." }
    ],
    kf21: [
        { nombre: "Motor F414",            tipo: "Motor",       precio: 7800000, img: "fotos/KF-21 Boramae.jpeg", desc: "Motor bimotor de alto rendimiento." },
        { nombre: "Radar AESA",            tipo: "Radar",       precio: 3900000, img: "fotos/KF-21 Boramae.jpeg", desc: "Sistema de detección avanzada." },
        { nombre: "Blindaje ligero",       tipo: "Blindaje",    precio: 1600000, img: "fotos/KF-21 Boramae.jpeg", desc: "Protección estructural." },
        { nombre: "Computadora de misión", tipo: "Electrónica", precio: 2200000, img: "fotos/KF-21 Boramae.jpeg", desc: "Procesamiento de combate." },
        { nombre: "Sistema de navegación", tipo: "Electrónica", precio: 1700000, img: "fotos/KF-21 Boramae.jpeg", desc: "Guiado y ruta." },
        { nombre: "Tren de aterrizaje",    tipo: "Mecánico",    precio: 1500000, img: "fotos/KF-21 Boramae.jpeg", desc: "Aterrizaje seguro." },
        { nombre: "Sistema ECM",           tipo: "Sistema",     precio: 3300000, img: "fotos/KF-21 Boramae.jpeg", desc: "Contramedidas electrónicas." },
        { nombre: "Bahía de armas",        tipo: "Módulo",      precio: 2100000, img: "fotos/KF-21 Boramae.jpeg", desc: "Carga modular." },
        { nombre: "Revestimiento exterior",tipo: "Revestimiento",precio: 1200000,img: "fotos/KF-21 Boramae.jpeg", desc: "Acabado estructural." }
    ],
    fc31: [
        { nombre: "Motor RD-93",           tipo: "Motor",       precio: 7200000, img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Propulsión táctica bimotor." },
        { nombre: "Radar KLJ-7A",          tipo: "Radar",       precio: 4100000, img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Escaneo aéreo AESA." },
        { nombre: "Sistema naval",         tipo: "Módulo",      precio: 2300000, img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Operación en portaaviones." },
        { nombre: "Blindaje ligero",       tipo: "Blindaje",    precio: 1500000, img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Protección estructural." },
        { nombre: "Computadora de misión", tipo: "Electrónica", precio: 2400000, img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Procesamiento táctico." },
        { nombre: "Sistema de navegación", tipo: "Electrónica", precio: 1700000, img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Guiado de vuelo." },
        { nombre: "Tren de aterrizaje",    tipo: "Mecánico",    precio: 1600000, img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Soporte y frenado." },
        { nombre: "ECM",                   tipo: "Sistema",     precio: 3200000, img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Contramedidas electrónicas." },
        { nombre: "Recubrimiento stealth", tipo: "Revestimiento",precio: 1800000,img: "fotos/FC-31 Gyrfalcon.jpeg", desc: "Baja observabilidad." }
    ],
    su75: [
        { nombre: "Motor Izdeliye 30",     tipo: "Motor",       precio: 6800000, img: "fotos/Su-75 Checkmate.jpeg", desc: "Motor monomotor de nueva generación." },
        { nombre: "Radar AESA",            tipo: "Radar",       precio: 3600000, img: "fotos/Su-75 Checkmate.jpeg", desc: "Sistema de detección multirole." },
        { nombre: "Bahía interna",         tipo: "Módulo",      precio: 1900000, img: "fotos/Su-75 Checkmate.jpeg", desc: "Compartimiento para armas." },
        { nombre: "Blindaje estructural",  tipo: "Blindaje",    precio: 1300000, img: "fotos/Su-75 Checkmate.jpeg", desc: "Protección del fuselaje." },
        { nombre: "Computadora de misión", tipo: "Electrónica", precio: 2100000, img: "fotos/Su-75 Checkmate.jpeg", desc: "Control táctico." },
        { nombre: "Sistema de navegación", tipo: "Electrónica", precio: 1600000, img: "fotos/Su-75 Checkmate.jpeg", desc: "Guiado y ruta." },
        { nombre: "Sistema ECM",           tipo: "Sistema",     precio: 3000000, img: "fotos/Su-75 Checkmate.jpeg", desc: "Guerra electrónica." },
        { nombre: "Tren de aterrizaje",    tipo: "Mecánico",    precio: 1400000, img: "fotos/Su-75 Checkmate.jpeg", desc: "Aterrizaje y soporte." },
        { nombre: "Recubrimiento stealth", tipo: "Revestimiento",precio: 1200000,img: "fotos/Su-75 Checkmate.jpeg", desc: "Firma reducida." }
    ],
    eurofighter: [
        { nombre: "Motor EJ200",           tipo: "Motor",       precio: 9300000,  img: "fotos/Eurofighter Typhoon.jpeg", desc: "Alta maniobrabilidad." },
        { nombre: "Radar CAPTOR-E",        tipo: "Radar",       precio: 4800000,  img: "fotos/Eurofighter Typhoon.jpeg", desc: "Barrido electrónico." },
        { nombre: "Blindaje modular",      tipo: "Blindaje",    precio: 2000000,  img: "fotos/Eurofighter Typhoon.jpeg", desc: "Protección estructural." },
        { nombre: "Computadora de misión", tipo: "Electrónica", precio: 2600000,  img: "fotos/Eurofighter Typhoon.jpeg", desc: "Procesamiento de combate." },
        { nombre: "Sistema de navegación", tipo: "Electrónica", precio: 1800000,  img: "fotos/Eurofighter Typhoon.jpeg", desc: "Ruta y guiado." },
        { nombre: "Tren de aterrizaje",    tipo: "Mecánico",    precio: 1700000,  img: "fotos/Eurofighter Typhoon.jpeg", desc: "Despegue y aterrizaje." },
        { nombre: "ECM",                   tipo: "Sistema",     precio: 3600000,  img: "fotos/Eurofighter Typhoon.jpeg", desc: "Contramedidas electrónicas." },
        { nombre: "Bahía de armas",        tipo: "Módulo",      precio: 2100000,  img: "fotos/Eurofighter Typhoon.jpeg", desc: "Carga modular." },
        { nombre: "Recubrimiento exterior",tipo: "Revestimiento",precio: 1400000, img: "fotos/Eurofighter Typhoon.jpeg", desc: "Acabado aerodinámico." }
    ],
    rafale: [
        { nombre: "Motor M88-4E",          tipo: "Motor",       precio: 8500000,  img: "fotos/Dassault Rafale.jpeg", desc: "Sistema bimotor francés." },
        { nombre: "Radar RBE2",            tipo: "Radar",       precio: 4300000,  img: "fotos/Dassault Rafale.jpeg", desc: "Radar multi-modo." },
        { nombre: "Blindaje táctico",      tipo: "Blindaje",    precio: 1750000,  img: "fotos/Dassault Rafale.jpeg", desc: "Protección del fuselaje." },
        { nombre: "Computadora de misión", tipo: "Electrónica", precio: 2400000,  img: "fotos/Dassault Rafale.jpeg", desc: "Procesamiento táctico." },
        { nombre: "Sistema de navegación", tipo: "Electrónica", precio: 1700000,  img: "fotos/Dassault Rafale.jpeg", desc: "Guiado y ruta." },
        { nombre: "Tren de aterrizaje",    tipo: "Mecánico",    precio: 1600000,  img: "fotos/Dassault Rafale.jpeg", desc: "Aterrizaje seguro." },
        { nombre: "ECM",                   tipo: "Sistema",     precio: 3300000,  img: "fotos/Dassault Rafale.jpeg", desc: "Defensa electrónica." },
        { nombre: "Bahía de armamento",    tipo: "Módulo",      precio: 1900000,  img: "fotos/Dassault Rafale.jpeg", desc: "Carga modular." },
        { nombre: "Recubrimiento exterior",tipo: "Revestimiento",precio: 1300000, img: "fotos/Dassault Rafale.jpeg", desc: "Acabado estructural." }
    ],
    a10: [
        { nombre: "GAU-8 Avenger",         tipo: "Arma",        precio: 8000000, img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Cañón rotativo principal." },
        { nombre: "Motor TF34-GE-100A",    tipo: "Motor",       precio: 3900000, img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Sistema de propulsión doble." },
        { nombre: "Blindaje pesado",        tipo: "Blindaje",    precio: 2700000, img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Protección reforzada." },
        { nombre: "Computadora de misión", tipo: "Electrónica", precio: 2100000, img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Control táctico." },
        { nombre: "Sistema de navegación", tipo: "Electrónica", precio: 1500000, img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Guiado de ruta." },
        { nombre: "Tren de aterrizaje",    tipo: "Mecánico",    precio: 1400000, img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Aterrizaje resistente." },
        { nombre: "ECM",                   tipo: "Sistema",     precio: 3000000, img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Contramedidas electrónicas." },
        { nombre: "Bahía de carga",        tipo: "Módulo",      precio: 1900000, img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Carga de munición." },
        { nombre: "Placas de fuselaje",    tipo: "Revestimiento",precio: 1200000,img: "fotos/A-10 Thunderbolt II.jpeg", desc: "Protección estructural." }
    ]
};

// ─── Estado global ──────────────────────────────────────────────────────────
let carrito          = JSON.parse(localStorage.getItem("carritoHangar")) || [];
let cantidades       = {};
let simulacionActiva = true;
let avionesEnVuelo   = 0;

/* FIX #1 – slot seleccionado en el panel de BD.
   Los botones "Activar Ranura Libre" y "Desactivar Sistema" del panel
   actúan sobre la fila que el usuario haya seleccionado con clic. */
let selectedSlot = null;

// ─── Carrito ─────────────────────────────────────────────────────────────────
function guardarCarrito() {
    localStorage.setItem("carritoHangar", JSON.stringify(carrito));
    actualizarCarritoUI();
}

function actualizarCarritoUI() {
    const count = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const badge = document.getElementById("cart-count");
    if (badge) badge.innerText = count;
}

function cambiarCantidad(key, cambio) {
    cantidades[key] = Math.max(1, (cantidades[key] || 1) + cambio);
    const el = document.getElementById(`cant-${key}`);
    if (el) el.innerText = cantidades[key];
}

// ─── FIX #2 – Toast de confirmación ─────────────────────────────────────────
/* Muestra una notificación flotante que aparece y desaparece con animación.
   Ya no se redirige ni se hace scroll al presionar "Comprar". */
function mostrarToast(mensaje) {
    // Si ya hay un toast activo, lo elimina antes de mostrar el nuevo
    const existente = document.getElementById("toast-compra");
    if (existente) existente.remove();

    const toast = document.createElement("div");
    toast.id = "toast-compra";
    toast.className = "toast-compra";
    toast.innerHTML = `<span class="toast-icon">✅</span> ${mensaje}`;
    document.body.appendChild(toast);

    // Doble rAF para que la transición CSS arranque correctamente
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            toast.classList.add("toast-visible");
        });
    });

    // Desaparece tras 2.5 s
    setTimeout(() => {
        toast.classList.remove("toast-visible");
        setTimeout(() => toast.remove(), 450);
    }, 2500);
}

// ─── FIX #2 – agregarAlCarrito sin redirigir ni hacer scroll ─────────────────
function agregarAlCarrito(planeId, index) {
    const repuesto = repuestosPorAvion[planeId]?.[index];
    if (!repuesto) return;

    const key = `${planeId}-${index}`;
    const cantidad = cantidades[key] || 1;

    const existente = carrito.find(item => item.id === key);
    if (existente) {
        existente.cantidad += cantidad;
    } else {
        carrito.push({
            id: key,
            avion:    especificacionesAviones[planeId].nombre,
            nombre:   repuesto.nombre,
            precio:   repuesto.precio,
            cantidad,
            tipo:     repuesto.tipo
        });
    }

    guardarCarrito();
    // Muestra confirmación SIN saltar ni redirigir
    mostrarToast(`<strong>${repuesto.nombre}</strong> agregado al carrito`);
}

// ─── FIX #2 – comprarAvion sin redirigir ni hacer scroll ─────────────────────
function comprarAvion(planeId) {
    const avion = especificacionesAviones[planeId];
    if (!avion) return;

    const id = `avion-${planeId}`;
    const existente = carrito.find(item => item.id === id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({
            id,
            avion:    avion.nombre,
            nombre:   `Avión completo – ${avion.nombre}`,
            precio:   avion.precio,
            cantidad: 1,
            tipo:     "Avión completo"
        });
    }

    guardarCarrito();
    mostrarToast(`<strong>${avion.nombre}</strong> agregado al carrito`);
}

// ─── Renderizar repuestos ────────────────────────────────────────────────────
function renderRepuestos(planeId) {
    const panel = document.getElementById("repuestos-panel");
    if (!panel) return;

    const repuestos = repuestosPorAvion[planeId] || [];
    const avion     = especificacionesAviones[planeId];
    if (!avion) return;

    panel.innerHTML = "";

    // Tarjeta del avión completo
    const avionCard = document.createElement("div");
    avionCard.className = "repuesto-card";
    avionCard.style.gridColumn = "1 / -1";
    avionCard.innerHTML = `
        <img src="${avion.imagen}" alt="${avion.nombre}">
        <h4>${avion.nombre}</h4>
        <p>${avion.categoria}</p>
        <span class="repuesto-precio">$${avion.precio.toLocaleString("en-US")}</span>
        <button class="btn-comprar" type="button" onclick="comprarAvion('${planeId}')">
            Comprar avión completo
        </button>
    `;
    panel.appendChild(avionCard);

    // Tarjetas de repuestos individuales
    repuestos.forEach((rep, index) => {
        const key = `${planeId}-${index}`;
        if (!cantidades[key]) cantidades[key] = 1;

        const div = document.createElement("div");
        div.className = "repuesto-card";
        div.innerHTML = `
            <img src="${rep.img}" alt="${rep.nombre}">
            <h4>${rep.nombre}</h4>
            <p>${rep.desc}</p>
            <span class="repuesto-precio">$${rep.precio.toLocaleString("en-US")}</span>
            <span class="repuesto-stock">Stock disponible</span>
            <div class="btn-cantidad">
                <button type="button" onclick="cambiarCantidad('${key}', -1)">−</button>
                <span id="cant-${key}">${cantidades[key]}</span>
                <button type="button" onclick="cambiarCantidad('${key}', 1)">+</button>
            </div>
            <button class="btn-comprar" type="button"
                    onclick="agregarAlCarrito('${planeId}', ${index})">
                Comprar
            </button>
        `;
        panel.appendChild(div);
    });

    // Marcar botón activo del menú lateral
    document.querySelectorAll(".repuesto-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.repuesto-btn[data-plane="${planeId}"]`)?.classList.add("active");
}

function updateDb() {
    const rows = document.getElementById("db-rows");
    if (!rows) return;

    rows.innerHTML = "";

    flota.forEach(p => {
        const tr = document.createElement("tr");
        tr.style.cursor = "pointer";
        tr.title = "Haz clic para seleccionar esta aeronave";

        // Resaltado de fila seleccionada
        if (selectedSlot === p.slot) {
            tr.classList.add("fila-seleccionada");
        }

        let classStatus = "";
        if (p.status === "Operativo" || p.status === "En vuelo") classStatus = "status-ready";
        else if (p.status === "Reservado")                        classStatus = "status-pending";
        else                                                       classStatus = "status-disabled";

        tr.innerHTML = `
            <td><strong>SLOT-${p.slot.toString().padStart(2, "0")}</strong></td>
            <td>${p.name}</td>
            <td><span class="${classStatus}">${p.status}</span></td>
        `;

        tr.addEventListener("click", () => {
            selectedSlot = p.slot;
            updateDb(); // re-renderiza para actualizar el resaltado
        });

        rows.appendChild(tr);
    });

    // Estadísticas del resumen
    const active  = flota.filter(p => p.status === "Operativo" || p.status === "En vuelo").length;
    const pending = flota.filter(p => p.status === "Reservado").length;
    const total   = flota.length;

    const dbStatus = document.getElementById("db-status");
    if (dbStatus) {
        const selName = selectedSlot
            ? `· Seleccionado: <strong style="color:var(--neon-blue)">${flota.find(p => p.slot === selectedSlot)?.name ?? ""}</strong>`
            : `· <em style="color:var(--text-muted)">Haz clic en una fila para seleccionar</em>`;
        dbStatus.innerHTML =
            `Sistemas en Línea: <strong style="color:var(--neon-green)">${active}</strong>
             | Reservas: <strong style="color:var(--neon-orange)">${pending}</strong>
             | Ranuras: <strong>${total}</strong> ${selName}`;
    }
}

// ─── FIX #1 – addPlane y removePlane sobre slot seleccionado ─────────────────
function addPlane() {
    if (selectedSlot === null) {
        // Parpadea el resumen para indicar que hay que seleccionar una fila
        const box = document.querySelector("#sql-db .summary-box");
        if (box) {
            box.style.borderColor = "#ff4444";
            box.style.transition  = "border-color 0.3s";
            setTimeout(() => { box.style.borderColor = ""; }, 1000);
        }
        mostrarToast("⚠️ Selecciona una aeronave de la tabla primero");
        return;
    }
    assignSlot(selectedSlot);
}

function removePlane() {
    if (selectedSlot === null) {
        mostrarToast("⚠️ Selecciona una aeronave de la tabla primero");
        return;
    }
    desactivarSlot(selectedSlot);
}

function assignSlot(slotNum) {
    const p = flota.find(p => p.slot === slotNum);
    if (!p) return;
    if      (p.status === "Disponible") p.status = "Reservado";
    else if (p.status === "Reservado")  p.status = "Operativo";
    updateDb();
}

function desactivarSlot(slotNum) {
    const p = flota.find(p => p.slot === slotNum);
    if (!p) return;
    if (p.status !== "Disponible") p.status = "Disponible";
    updateDb();
}

// ─── Simulación de vuelo ──────────────────────────────────────────────────────
function actualizarVuelo() {
    if (!simulacionActiva) return;
    const activos = flota.filter(p => p.status === "Operativo" || p.status === "En vuelo");

    if (activos.length > 0) {
        const p = activos[Math.floor(Math.random() * activos.length)];
        if      (p.status === "Operativo" && Math.random() < 0.3) p.status = "En vuelo";
        else if (p.status === "En vuelo")                         p.status = "Operativo";
    }

    avionesEnVuelo = flota.filter(p => p.status === "En vuelo").length;
    const rutaEl = document.getElementById("aviones-ruta-count");
    if (rutaEl) rutaEl.innerText = avionesEnVuelo;

    updateDb();
    setTimeout(actualizarVuelo, 2000);
}

function lanzarMision() {
    if (!simulacionActiva) {
        simulacionActiva = true;
        actualizarVuelo();
    }
    const box = document.querySelector("#sql-db .summary-box");
    if (box) {
        let p = box.querySelector("p.mision-msg");
        if (!p) {
            p = document.createElement("p");
            p.className = "mision-msg";
            box.insertBefore(p, box.firstChild);
        }
        p.innerHTML = `🚨 VECTORES DESPLEGADOS: <strong id="aviones-ruta-count" style="color:var(--neon-orange)">${avionesEnVuelo}</strong> aeronaves interceptando trayectorias.
            <button onclick="detenerMision()" style="margin-left:15px; padding:4px 12px; background:#ff4444; color:#fff; border:none; border-radius:3px; font-weight:bold; cursor:pointer;">Cerrar Operación</button>`;
    }
}

function detenerMision() {
    simulacionActiva = false;
    const msgEl = document.querySelector(".mision-msg");
    if (msgEl) msgEl.remove();
    updateDb();
}

// ─── Vista detalle ────────────────────────────────────────────────────────────
function verDetalle(planeId) {
    const specs = especificacionesAviones[planeId];
    if (!specs) return;

    const datosDetalle = {
        f35:        { velocidad: "Mach 1.60 (1,930 km/h)",     motores: "1× Pratt & Whitney F135-PW-100",         techo: "50,000 pies (15,000 m)",  radar: "AN/APG-81 AESA" },
        su57:       { velocidad: "Mach 2.00 (2,135 km/h)",     motores: "2× Saturn AL-41F1 / Izdeliye 30",        techo: "66,000 pies (20,000 m)",  radar: "Sh121 N036 Byelka AESA" },
        f22:        { velocidad: "Mach 2.25 (2,410 km/h)",     motores: "2× Pratt & Whitney F119-PW-100",         techo: "65,000 pies (20,000 m)",  radar: "AN/APG-77 AESA" },
        j20:        { velocidad: "Mach 2.00 (2,100 km/h)",     motores: "2× WS-10C / WS-15",                     techo: "66,000 pies (20,000 m)",  radar: "KLJ-5 AESA Array" },
        kf21:       { velocidad: "Mach 1.81 (2,200 km/h)",     motores: "2× GE F414-GE-400K",                    techo: "51,000 pies (15,500 m)",  radar: "Hanwha AESA" },
        fc31:       { velocidad: "Mach 1.80 (2,200 km/h)",     motores: "2× RD-93 / WS-13E",                     techo: "52,000 pies (16,000 m)",  radar: "KLJ-7A AESA" },
        su75:       { velocidad: "Mach 1.80 (2,200 km/h)",     motores: "1× Izdeliye 30",                        techo: "54,000 pies (16,500 m)",  radar: "AESA Multimode" },
        eurofighter:{ velocidad: "Mach 2.00 (2,495 km/h)",     motores: "2× Eurojet EJ200",                      techo: "65,000 pies (19,810 m)",  radar: "CAPTOR-E AESA" },
        rafale:     { velocidad: "Mach 1.80 (1,912 km/h)",     motores: "2× Snecma M88-4E",                      techo: "52,000 pies (15,850 m)",  radar: "Thales RBE2" },
        a10:        { velocidad: "706 km/h (Régimen Continuo)", motores: "2× GE TF34-GE-100A",                    techo: "45,000 pies (13,700 m)",  radar: "AN/AAS-35 Táctico" }
    };

    const detalle     = datosDetalle[planeId] || {};
    const enFlota     = flota.find(p => p.id === planeId);
    const estadoActual= enFlota ? enFlota.status : "Disponible";

    let classStatus = "";
    if (estadoActual === "Operativo" || estadoActual === "En vuelo") classStatus = "status-ready";
    else if (estadoActual === "Reservado")                           classStatus = "status-pending";
    else                                                             classStatus = "status-disabled";

    const vistaDetalle = document.getElementById("vista-detalle");
    if (!vistaDetalle) return;

    vistaDetalle.innerHTML = `
        <div class="main-content">
            <div class="header-text">
                <h2>ANÁLISIS E INGENIERÍA: <span class="highlight">${specs.nombre.toUpperCase()}</span></h2>
                <p>Módulos de telemetría estructural y aviónica integrada.</p>
            </div>
            <div class="detalle-layout">
                <div class="detalle-visual">
                    <div class="detalle-img-container">
                        <img src="${specs.imagen}" alt="${specs.nombre}" class="avion-img-src">
                    </div>
                    <button class="btn-regresar" onclick="cerrarDetalle()" style="margin-top:15px;">
                        ← REGRESAR AL PANEL PRINCIPAL
                    </button>
                </div>
                <div class="detalle-info">
                    <span class="tech-tag">${specs.categoria}</span>
                    <h2>${specs.nombre}</h2>
                    <hr style="border-color: var(--glass-border); margin: 20px 0;">
                    <div class="detalle-grid">
                        <div class="detalle-item">
                            <span>Velocidad de Régimen</span>
                            <strong>${detalle.velocidad}</strong>
                        </div>
                        <div class="detalle-item">
                            <span>Plantas de Propulsión</span>
                            <strong>${detalle.motores}</strong>
                        </div>
                        <div class="detalle-item">
                            <span>Techo Operacional</span>
                            <strong>${detalle.techo}</strong>
                        </div>
                        <div class="detalle-item">
                            <span>Radar / Sensores</span>
                            <strong>${detalle.radar}</strong>
                        </div>
                        <div class="detalle-item">
                            <span>Costo Unitario</span>
                            <strong style="color:var(--neon-blue);font-size:1.2rem;">$${specs.precio.toLocaleString("en-US")}</strong>
                        </div>
                        <div class="detalle-item">
                            <span>Estado de Disponibilidad</span><br>
                            <span class="${classStatus}" style="margin-top:8px;display:inline-block;">${estadoActual}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelectorAll(".section").forEach(s => s.style.display = "none");
    document.querySelectorAll(".nav-item").forEach(l => l.classList.remove("active"));
    vistaDetalle.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function cerrarDetalle() {
    document.getElementById("vista-detalle").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    document.querySelector('.nav-item[data-target="inicio"]')?.classList.add("active");
}

// ─── Carrito (vista completa) ─────────────────────────────────────────────────
function renderCartIcon() {
    const nav = document.querySelector(".nav-links");
    if (!nav || document.getElementById("cart-link")) {
        actualizarCarritoUI();
        return;
    }

    const a = document.createElement("a");
    a.href      = "#";
    a.className = "nav-item";
    a.id        = "cart-link";
    a.innerHTML = `🛒 Carrito <span id="cart-count" style="
        background:var(--neon-orange); color:#000; font-size:0.75rem;
        font-weight:800; padding:2px 7px; border-radius:10px; margin-left:4px;">0</span>`;
    nav.appendChild(a);

    a.addEventListener("click", e => { e.preventDefault(); mostrarCarrito(); });
    actualizarCarritoUI();
}

function mostrarCarrito() {
    const vistaDetalle = document.getElementById("vista-detalle");
    ["inicio","sql-db","documentacion"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });
    if (vistaDetalle) vistaDetalle.style.display = "block";

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    vistaDetalle.innerHTML = `
        <div class="main-content">
            <div class="header-text">
                <h2>CARRO DE COMPRAS</h2>
                <p>Resumen de aeronaves y repuestos seleccionados.</p>
            </div>
            <div class="doc-card">
                <h3>Productos en carrito</h3>
                ${carrito.length === 0
                    ? `<p style="color:var(--text-muted); margin-top:20px;">El carrito está vacío.</p>`
                    : `
                    <div class="table-responsive">
                        <table class="tabla-sql">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Tipo</th>
                                    <th>Cantidad</th>
                                    <th>Precio unitario</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${carrito.map(item => `
                                    <tr>
                                        <td>${item.nombre}</td>
                                        <td>${item.tipo}</td>
                                        <td>${item.cantidad}</td>
                                        <td>$${item.precio.toLocaleString("en-US")}</td>
                                        <td>$${(item.precio * item.cantidad).toLocaleString("en-US")}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                    <h3 style="margin-top:20px; color:var(--neon-green);">
                        Total: $${total.toLocaleString("en-US")}
                    </h3>
                    <button class="btn-comprar" type="button" style="margin-top:15px;"
                            onclick="abrirModalPago()">
                        💳 Proceder al Pago
                    </button>`
                }
                <button class="btn-regresar" type="button" style="margin-top:12px;"
                        onclick="cerrarDetalle()">
                    ← Seguir comprando
                </button>
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function finalizarCompra() {
    carrito = [];
    guardarCarrito();
    mostrarToast("🎉 ¡Compra confirmada! Gracias por tu adquisición.");
    // Navega de regreso a Repuestos tras confirmar
    setTimeout(() => {
        const vistaDetalle = document.getElementById("vista-detalle");
        if (vistaDetalle) vistaDetalle.style.display = "none";
        document.querySelectorAll(".section").forEach(s => s.style.display = "none");
        const docSec = document.getElementById("documentacion");
        if (docSec) docSec.style.display = "block";
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        document.querySelector('.nav-item[data-target="documentacion"]')?.classList.add("active");
    }, 800);
}

// ─── Navegación ───────────────────────────────────────────────────────────────
document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", e => {
        if (link.id === "cart-link") return;
        e.preventDefault();

        const vistaDetalle = document.getElementById("vista-detalle");
        if (vistaDetalle) vistaDetalle.style.display = "none";

        const target = link.dataset.target;
        if (!target) return;

        document.querySelectorAll(".nav-item").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        document.querySelectorAll(".section").forEach(s => s.style.display = "none");

        const targetSection = document.getElementById(target);
        if (targetSection) targetSection.style.display = "block";

        if (target === "documentacion") renderRepuestos("f35");
        if (target === "sql-db")        updateDb();
    });
});

document.querySelectorAll(".repuesto-btn").forEach(btn => {
    btn.addEventListener("click", () => renderRepuestos(btn.dataset.plane));
});

// ─── Inicio ───────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    // Pantalla de intro
    setTimeout(() => {
        const overlay = document.querySelector(".intro-overlay");
        if (overlay) {
            overlay.style.opacity = "0";
            setTimeout(() => { overlay.style.display = "none"; }, 500);
        }
    }, 2500);

    renderCartIcon();
    actualizarCarritoUI();
    updateDb();
    actualizarVuelo();
    renderRepuestos("f35");
});

// ══════════════════════════════════════════════════════════════════════════════
//  SISTEMA DE PAGO — Modal con tarjeta de crédito o pago físico
// ══════════════════════════════════════════════════════════════════════════════

function abrirModalPago() {
    if (carrito.length === 0) return;

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    // ── Inyectar estilos del modal (solo una vez) ─────────────────────────────
    if (!document.getElementById("estilos-pago")) {
        const style = document.createElement("style");
        style.id = "estilos-pago";
        style.textContent = `
            #modal-pago {
                position: fixed; inset: 0;
                background: rgba(0,0,0,0.85);
                z-index: 9999;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }
            .pago-box {
                background: #111;
                border: 2px solid #00ffff;
                box-shadow: 0 0 30px rgba(0,255,255,0.3);
                border-radius: 15px;
                padding: 35px;
                width: 100%;
                max-width: 480px;
                position: relative;
                color: white;
                font-family: 'Segoe UI', sans-serif;
            }
            .pago-box h3 {
                color: #00ffff;
                text-align: center;
                margin-bottom: 6px;
                font-weight: 300;
                letter-spacing: 2px;
                font-size: 1.2rem;
            }
            .pago-total {
                text-align: center;
                font-size: 1.2rem;
                margin-bottom: 22px;
                color: #aaa;
            }
            .metodo-selector {
                display: flex;
                gap: 10px;
                margin-bottom: 22px;
            }
            .btn-metodo {
                flex: 1;
                padding: 13px;
                border: 2px solid #333;
                border-radius: 8px;
                background: transparent;
                color: #777;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.2s;
            }
            .btn-metodo.activo {
                border-color: #00ffff;
                color: #00ffff;
                background: rgba(0,255,255,0.07);
            }
            .pago-label {
                display: block;
                color: #888;
                font-size: 12px;
                margin-bottom: 5px;
                margin-top: 12px;
            }
            .pago-input {
                width: 100%;
                padding: 11px 4px;
                background: transparent;
                border: none;
                border-bottom: 1px solid #444;
                color: white;
                font-size: 15px;
                outline: none;
                transition: border-color 0.2s;
            }
            .pago-input:focus { border-bottom-color: #00ffff; }
            .pago-input::placeholder { color: #444; }
            .pago-row { display: flex; gap: 16px; }
            .pago-row > div { flex: 1; }
            .cambio-box {
                background: rgba(0,255,153,0.08);
                border: 1px solid #00ff99;
                border-radius: 8px;
                padding: 13px;
                margin-top: 14px;
                text-align: center;
                color: #00ff99;
                font-size: 1.05rem;
                font-weight: bold;
            }
            .cambio-insuficiente {
                border-color: #ff4444;
                color: #ff4444;
                background: rgba(255,68,68,0.07);
            }
            .btn-pagar {
                width: 100%;
                padding: 14px;
                background: linear-gradient(to right, #00d2ff, #9d50bb);
                color: white;
                border: none;
                border-radius: 30px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                margin-top: 22px;
                transition: transform 0.2s, box-shadow 0.2s;
            }
            .btn-pagar:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0,210,255,0.4);
            }
            .btn-cancelar-pago {
                width: 100%;
                padding: 10px;
                background: transparent;
                color: #666;
                border: 1px solid #333;
                border-radius: 30px;
                font-size: 13px;
                cursor: pointer;
                margin-top: 10px;
                transition: color 0.2s, border-color 0.2s;
            }
            .btn-cancelar-pago:hover { color: #fff; border-color: #666; }
            .pago-error {
                color: #ff5555;
                font-size: 13px;
                text-align: center;
                margin-top: 12px;
                min-height: 18px;
            }
            .btn-cerrar-pago {
                position: absolute;
                top: 14px; right: 18px;
                background: transparent;
                border: none;
                color: #00ffff;
                font-size: 18px;
                cursor: pointer;
                line-height: 1;
            }
            .btn-cerrar-pago:hover { color: #fff; }
        `;
        document.head.appendChild(style);
    }

    // ── Eliminar modal previo si existe ───────────────────────────────────────
    const previo = document.getElementById("modal-pago");
    if (previo) previo.remove();

    // ── Crear el modal ────────────────────────────────────────────────────────
    const modal = document.createElement("div");
    modal.id = "modal-pago";
    modal.innerHTML = `
        <div class="pago-box">
            <button class="btn-cerrar-pago" onclick="cerrarModalPago()">✕</button>

            <h3>💳 MÉTODO DE PAGO</h3>
            <p class="pago-total">
                Total: <strong style="color:#00ffff">$${total.toLocaleString("en-US")}</strong>
            </p>

            <!-- Selector de método -->
            <div class="metodo-selector">
                <button class="btn-metodo activo" id="btn-tarjeta"
                        onclick="seleccionarMetodoPago('tarjeta')">
                    💳 Tarjeta de Crédito
                </button>
                <button class="btn-metodo" id="btn-fisico"
                        onclick="seleccionarMetodoPago('fisico')">
                    💵 Pago Físico
                </button>
            </div>

            <!-- ── FORMULARIO: Tarjeta de crédito ── -->
            <div id="form-tarjeta">
                <label class="pago-label">Nombre en la tarjeta</label>
                <input class="pago-input" id="p-nombre"
                       placeholder="Ej: MARLON HERNANDEZ" type="text" autocomplete="off">

                <label class="pago-label">Número de tarjeta</label>
                <input class="pago-input" id="p-numero"
                       placeholder="0000 0000 0000 0000" maxlength="19" type="text"
                       oninput="formatearNumeroTarjeta(this)" autocomplete="off">

                <div class="pago-row">
                    <div>
                        <label class="pago-label">Vencimiento</label>
                        <input class="pago-input" id="p-expiry"
                               placeholder="MM/AA" maxlength="5" type="text"
                               oninput="formatearExpiry(this)">
                    </div>
                    <div>
                        <label class="pago-label">CVV</label>
                        <input class="pago-input" id="p-cvv"
                               placeholder="•••" maxlength="4" type="password">
                    </div>
                </div>
            </div>

            <!-- ── FORMULARIO: Pago físico ── -->
            <div id="form-fisico" style="display:none">
                <label class="pago-label">Monto entregado por el cliente ($)</label>
                <input class="pago-input" id="p-monto"
                       placeholder="Ingresa el monto en dólares" type="number" min="0" step="0.01"
                       oninput="calcularCambio(${total})">
                <div id="cambio-display"></div>
            </div>

            <div id="error-pago" class="pago-error"></div>

            <button class="btn-pagar" onclick="confirmarPago(${total})">
                ✅ Confirmar Pago
            </button>
            <button class="btn-cancelar-pago" onclick="cerrarModalPago()">
                Cancelar
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Clic fuera del cuadro también cierra
    modal.addEventListener("click", e => {
        if (e.target === modal) cerrarModalPago();
    });
}

// ── Cerrar modal ──────────────────────────────────────────────────────────────
function cerrarModalPago() {
    const modal = document.getElementById("modal-pago");
    if (modal) modal.remove();
}

// ── Cambiar entre tarjeta y físico ────────────────────────────────────────────
function seleccionarMetodoPago(metodo) {
    document.getElementById("form-tarjeta").style.display = metodo === "tarjeta" ? "block" : "none";
    document.getElementById("form-fisico").style.display  = metodo === "fisico"  ? "block" : "none";

    document.getElementById("btn-tarjeta").className =
        "btn-metodo" + (metodo === "tarjeta" ? " activo" : "");
    document.getElementById("btn-fisico").className =
        "btn-metodo" + (metodo === "fisico"  ? " activo" : "");

    document.getElementById("error-pago").innerText = "";
    document.getElementById("cambio-display").innerHTML = "";
}

// ── Formatear número de tarjeta: grupos de 4 dígitos ─────────────────────────
function formatearNumeroTarjeta(input) {
    let v = input.value.replace(/\D/g, "").substring(0, 16);
    input.value = v.replace(/(.{4})/g, "$1 ").trim();
}

// ── Formatear vencimiento: MM/AA ──────────────────────────────────────────────
function formatearExpiry(input) {
    let v = input.value.replace(/\D/g, "").substring(0, 4);
    if (v.length >= 3) v = v.substring(0, 2) + "/" + v.substring(2);
    input.value = v;
}

// ── Calcular cambio en pago físico ────────────────────────────────────────────
function calcularCambio(total) {
    const monto  = parseFloat(document.getElementById("p-monto").value) || 0;
    const cambio = monto - total;
    const box    = document.getElementById("cambio-display");

    if (!monto) { box.innerHTML = ""; return; }

    if (cambio >= 0) {
        box.innerHTML = `
            <div class="cambio-box">
                ✅ Cambio a devolver:
                <strong>$${cambio.toLocaleString("en-US", { minimumFractionDigits: 2 })}</strong>
            </div>`;
    } else {
        box.innerHTML = `
            <div class="cambio-box cambio-insuficiente">
                ❌ Monto insuficiente — faltan
                <strong>$${Math.abs(cambio).toLocaleString("en-US", { minimumFractionDigits: 2 })}</strong>
            </div>`;
    }
}

// ── Validar y confirmar pago ──────────────────────────────────────────────────
function confirmarPago(total) {
    const errorEl   = document.getElementById("error-pago");
    const esTarjeta = document.getElementById("btn-tarjeta").classList.contains("activo");

    errorEl.innerText = "";

    if (esTarjeta) {
        // ── Validación tarjeta ────────────────────────────────────────────────
        const nombre = document.getElementById("p-nombre").value.trim();
        const numero = document.getElementById("p-numero").value.replace(/\s/g, "");
        const expiry = document.getElementById("p-expiry").value.trim();
        const cvv    = document.getElementById("p-cvv").value.trim();

        if (!nombre) {
            errorEl.innerText = "⚠️ Ingresa el nombre del titular."; return;
        }
        if (numero.length < 16) {
            errorEl.innerText = "⚠️ El número de tarjeta debe tener 16 dígitos."; return;
        }
        if (expiry.length < 5) {
            errorEl.innerText = "⚠️ Ingresa la fecha de vencimiento (MM/AA)."; return;
        }
        const [mm, aa] = expiry.split("/");
        if (parseInt(mm) < 1 || parseInt(mm) > 12) {
            errorEl.innerText = "⚠️ Mes de vencimiento inválido."; return;
        }
        if (cvv.length < 3) {
            errorEl.innerText = "⚠️ El CVV debe tener al menos 3 dígitos."; return;
        }
    } else {
        // ── Validación pago físico ────────────────────────────────────────────
        const monto = parseFloat(document.getElementById("p-monto").value) || 0;
        if (!monto) {
            errorEl.innerText = "⚠️ Ingresa el monto entregado por el cliente."; return;
        }
        if (monto < total) {
            errorEl.innerText = `⚠️ Monto insuficiente. Faltan $${(total - monto).toLocaleString("en-US")}.`; return;
        }
    }

    // ── Pago aprobado ─────────────────────────────────────────────────────────
    cerrarModalPago();

    // Guarda una copia del carrito ANTES de vaciarlo
    const carritoParaGuardar = [...carrito];
    const metodoPago         = esTarjeta ? "tarjeta" : "fisico";

    // Envía la compra al servidor para registrarla en MySQL
    fetch("/guardar-compra", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ carrito: carritoParaGuardar, metodoPago, total })
    })
    .then(r => r.json())
    .then(data => {
        if (!data.success) console.warn("Compra no registrada:", data.mensaje);
    })
    .catch(err => console.log("Error al guardar compra:", err));

    carrito = [];
    guardarCarrito();

    const metodoTexto = esTarjeta ? "tarjeta de crédito" : "pago físico";
    mostrarToast(`🎉 ¡Pago aprobado con ${metodoTexto}! Gracias por su adquisición.`);

    setTimeout(() => {
        const vistaDetalle = document.getElementById("vista-detalle");
        if (vistaDetalle) vistaDetalle.style.display = "none";
        document.querySelectorAll(".section").forEach(s => s.style.display = "none");
        const docSec = document.getElementById("documentacion");
        if (docSec) docSec.style.display = "block";
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        document.querySelector('.nav-item[data-target="documentacion"]')?.classList.add("active");
    }, 900);
}
