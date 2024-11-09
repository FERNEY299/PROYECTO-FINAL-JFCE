let carritoC = obtenerDatos('carrito')|| [];
const { maxProductos, maxPresupuesto } = obtenerLimites();
const costoDomicilio = 15000;

function obtenerLimites() {
    const maxProductos = +localStorage.getItem('cantidadArticulosMaxima');
    const maxPresupuesto = +localStorage.getItem('presupuestoMaximo');
    return { maxProductos, maxPresupuesto };
}

function formatCurrency(price) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(price);
}

function calcularTotales() {
    let totalProductos = 0, 
        totalCompra = 0;
    const tipoEntrega = localStorage.getItem('tipoEntrega');

    for (let i = 0; i < carritoC.length; i++) {
        const cantidad = carritoC[i].cantidad;
        const precio = carritoC[i].producto.precio;

        totalProductos += cantidad;
        totalCompra += cantidad * precio;
    }

    const costoFinalDomicilio = tipoEntrega === 'domicilio'? costoDomicilio : 0;
    const totalConDomicilio = totalCompra + costoFinalDomicilio;

    return { totalProductos, totalCompra, costoFinalDomicilio, totalConDomicilio };
}

function actualizarCarrito() {
    const tablaCarrito = document.getElementById('tablaCarrito').querySelector('tbody');
    tablaCarrito.innerHTML = '';

    const { totalProductos, totalCompra, costoFinalDomicilio, totalConDomicilio } = calcularTotales();

    document.getElementById('totalProductos').innerText = totalProductos;
    document.getElementById('totalCompra').innerText = formatCurrency(totalCompra);
    document.getElementById('cargoDomicilio').innerText = formatCurrency(costoFinalDomicilio);
    document.getElementById('totalConDomicilio').innerText = formatCurrency(totalConDomicilio);

    carritoC.forEach(item => {
        const productoActual = item.producto;
        const cantidadActual = item.cantidad;

        const filaHTML = `
            <tr>
                <td><img src="${productoActual.imagen}" alt="${productoActual.nombre}" style="width: 50px; height: 50px;"></td>
                <td>${productoActual.nombre}</td>
                <td>${formatCurrency(productoActual.precio)}</td>
                <td>${productoActual.categoria}</td>
                <td>${productoActual.descripcion}</td>
                <td>${productoActual.marca}</td>
                <td>${cantidadActual}</td>

                <td><button class="eliminar" data-nombre="${productoActual.nombre}">Eliminar</button></td>
            </tr>
        `;
        tablaCarrito.insertAdjacentHTML('beforeend', filaHTML);
    });

    document.querySelectorAll('.eliminar').forEach(boton =>
        boton.onclick = () => eliminarDelCarrito(boton.dataset.nombre)
    );
}

const eliminarDelCarrito = (nombreProducto) => {
    carritoC = carritoC.filter(item => item.producto.nombre!== nombreProducto);
    localStorage.setItem('carrito', JSON.stringify(carritoC));
    actualizarCarrito();
};

const limpiarCarrito = () => {
    carritoC = [];
    localStorage.setItem('carrito', JSON.stringify(carritoC));
    actualizarCarrito();
};

const validarCompra = () => new Promise((resolve, reject) => {
    const { totalProductos, totalConDomicilio } = calcularTotales();
    if (carritoC.length === 0) 
        return reject("El carrito está vacío. Agrega productos antes de comprar.");
    if (carritoC.length > 20) 
        return reject("No se puede agregar más de 20 productos al carrito.");

    if (totalProductos > maxProductos) 
        return reject(`No puedes comprar más de ${maxProductos} productos.`);
    if (totalConDomicilio > maxPresupuesto) 
        return reject(`El costo total excede el presupuesto de ${maxPresupuesto} pesos.`);
    
    resolve('Pago realizado con éxito.');
});

const validarFormulario = () => {
    const { numeroTarjeta, expiracionTarjeta, codigoSeguridad, nombreTitular } = document.getElementById('formTarjeta').elements;

    const expresiones = {
        numeroTarjeta: /^\d{16}$/,
        expiracionTarjeta: /^(0[1-9]|1[0-2])\/\d{2}$/,
        codigoSeguridad: /^\d{3}$/
    };

    if (!expresiones.numeroTarjeta.test(numeroTarjeta.value.replace(/\D/g, ''))) 
        return alert("Número de tarjeta inválido.");
    if (!expresiones.expiracionTarjeta.test(expiracionTarjeta.value)) 
        return alert("Fecha de expiración inválida.");
    if (!expresiones.codigoSeguridad.test(codigoSeguridad.value)) 
        return alert("Código de seguridad inválido.");
    if (!nombreTitular.value.trim()) 
        return alert("Ingrese el nombre del titular.");
    
    return true;
};

function inicializarEventos() {
    const botonComprar = document.getElementById('botonComprar');
    const botonContinuarComprando = document.getElementById('continuarComprando');
    const botonCancelarCompra = document.getElementById('cancelarCompra');

    botonComprar.onclick = (e) => {
        e.preventDefault();
        if (!validarFormulario()) return;

        // Mostrar mensaje y deshabilitar botones
        alert("Hay una compra en proceso...");
        botonComprar.disabled = true;
        botonContinuarComprando.disabled = true;
        botonCancelarCompra.disabled = true;

        setTimeout(() => {
            validarCompra()
            .then((message) => {
                    alert(message);
                    limpiarCarrito();
                    window.location.href = 'vistaProductos.html';
                    // Habilitar botones
                    botonComprar.disabled = false;
                    botonContinuarComprando.disabled = false;
                    botonCancelarCompra.disabled = false;
                })
            .catch((error) => {
                    alert(error);
                    // Habilitar botones
                    botonComprar.disabled = false;
                    botonContinuarComprando.disabled = false;
                    botonCancelarCompra.disabled = false;
                });
        }, Math.floor(Math.random() * 1001) + 2000);
    };

    botonContinuarComprando.onclick = () => window.location.href = 'vistaProductos.html';
    botonCancelarCompra.onclick = () => {
        limpiarCarrito();
        alert('Compra cancelada con éxito!');
        window.location.href = 'vistaDetalle.html';
    };
    document.getElementById('limpiarCampos').onclick = () => document.getElementById('formTarjeta').reset();
    document.getElementById('mostrarCodigo').onchange = () => {
        document.getElementById('codigoSeguridad').type = document.getElementById('mostrarCodigo').checked? 'text' : 'password';
    };
}

// Inicialización del carrito y los eventos
document.addEventListener('DOMContentLoaded', function() {
    actualizarCarrito();
    inicializarEventos();
});

function obtenerDatos(clave) {
    const datos = localStorage.getItem(clave);
    return datos? JSON.parse(datos) : null;
}

function guardarDatos(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
}