document.addEventListener('DOMContentLoaded', function() {
    // Función para formatear el precio en peso colombiano
    function formatCurrency(price) {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(price);
    }

    const presupuestoInput = document.getElementById('presupuestoMaximo');

    // Evento para formatear el presupuesto al perder el foco
    presupuestoInput.addEventListener('blur', function() {
        if (this.value) {
            let numericValue = this.value.replace(/[^\d]/g, '');
            this.value = formatCurrency(numericValue);
        }
    });

    document.getElementById('formularioRequerimientos').addEventListener('submit', function(event) {
        event.preventDefault();

        let nombreComprador = document.getElementById('nombreComprador').value;
        let presupuestoMaximo = document.getElementById('presupuestoMaximo').value;
        let cantidadArticulosMaxima = document.getElementById('cantidadArticulosMaxima').value;
        let direccionComprador = document.getElementById('direccionComprador').value;
        let tipoEntrega = document.querySelector('input[name="tipoEntrega"]:checked');

        if (!nombreComprador) {
            alert("Por favor, ingrese el nombre del comprador.");
        } else if (!presupuestoMaximo) {
            alert("Por favor, ingrese el presupuesto máximo.");
        } else if (!cantidadArticulosMaxima) {
            alert("Por favor, ingrese la cantidad máxima de artículos.");
        } else if (!direccionComprador) {
            alert("Por favor, ingrese la dirección.");
        } else if (!tipoEntrega) {
            alert("Por favor, seleccione el tipo de entrega.");
        } else {
            localStorage.setItem('nombreComprador', nombreComprador);
            localStorage.setItem('presupuestoMaximo', presupuestoMaximo);
            localStorage.setItem('cantidadArticulosMaxima', cantidadArticulosMaxima);
            localStorage.setItem('direccionComprador', direccionComprador);
            localStorage.setItem('tipoEntrega', tipoEntrega.value);

            window.location.href = "vistaProductos.html";
        }
    });

    document.querySelectorAll('input[name="tipoEntrega"]').forEach(radio => {
        radio.addEventListener('change', function() {
            localStorage.setItem('tipoEntrega', this.value);
        });
    });
});
