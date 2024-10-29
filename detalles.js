
document.getElementById('formularioRequerimientos').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario directamente para hacer validaciones

    // Obtener valores de los campos
    let nombreComprador = document.getElementById('nombreComprador').value;
    let presupuestoMaximo = document.getElementById('presupuestoMaximo').value;
    let cantidadArticulosMaxima = document.getElementById('cantidadArticulosMaxima').value;
    let direccionComprador = document.getElementById('direccionComprador').value;
    let tipoEntrega = document.querySelector('input[name="tipoEntrega"]:checked'); // Verifica el tipo de entrega seleccionado

    // Validar campos vacíos
    if (!nombreComprador) {
        alert("Por favor, ingrese el nombre del comprador.");
    } else if (!presupuestoMaximo) {
        alert("Por favor, ingrese el presupuesto máximo.");
    } else if (!cantidadArticulosMaxima) {
        alert("Por favor, ingrese la cantidad máxima de artículos.");
    } else if (!direccionComprador) {
        alert("Por favor, ingrese la dirección.");
    } else if (!tipoEntrega) {  // Si ningún radio está seleccionado, tipoEntrega será null
        alert("Por favor, seleccione el tipo de entrega.");
    } else {
        
        // Guardar datos en localStorage o continuar con el flujo deseado
        localStorage.setItem('nombreComprador', nombreComprador);
        localStorage.setItem('presupuestoMaximo', presupuestoMaximo);
        localStorage.setItem('cantidadArticulosMaxima', cantidadArticulosMaxima);
        localStorage.setItem('direccionComprador', direccionComprador);
        localStorage.setItem('tipoEntrega', tipoEntrega.value);

        // Redirigir al carrito de compras (vista de productos)
        window.location.href = "vistaProductos.html";
    }
});


