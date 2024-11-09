const productos = [
    {
        nombre: "Laptop HP",
        precio: 2000800,
        cantidad: 10,
        descripcion: "Laptop HP con procesador Intel i5",
        marca: "HP",
        categoria: "Computación",
        imagen: "https://www.hp.com/es-es/shop/Html/Merch/Images/c06593122_1750x1285.jpg"
    },
    {
        nombre: "Laptop Dell",
        precio: 1900750,
        cantidad: 8,
        descripcion: "Laptop Dell con pantalla de 15.6 pulgadas",
        marca: "Dell",
        categoria: "Computación",
        imagen: "https://lasus.com.co/143985-large_default/portatil-dell-latitude-3440-i5-8-512.jpg"
    },
    {
        nombre: "Smartphone Samsung",
        precio: 840600,
        cantidad: 15,
        descripcion: "Smartphone Samsung Galaxy S21",
        marca: "Samsung",
        categoria: "Smartphones",
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/co/2401/gallery/co-galaxy-s24-s928-sm-s928bztultc-thumb-539325481?$264_264_PNG$"
    },
    {
        nombre: "Smartphone Apple",
        precio: 2410000,
        cantidad: 5,
        descripcion: "iPhone 13 Pro Max",
        marca: "Apple",
        categoria: "Smartphones",
        imagen: "https://co.tiendasishop.com/cdn/shop/files/iPhone_15_Pro_Blue_Titanium_PDP_Image_Position-1__en-US.webp?v=1713680209&width=550.jpg"
    },
    {
        nombre: "Tablet Amazon",
        precio: 900150,
        cantidad: 20,
        descripcion: "Tablet Fire HD 10",
        marca: "Amazon",
        categoria: "Tablets",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_866806-MLA47848774490_102021-O.webp"
    },
    {
        nombre: "Tableta Samsung",
        precio: 1500300,
        cantidad: 12,
        descripcion: "Samsung Galaxy Tab S6",
        marca: "Samsung",
        categoria: "Tablets",
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/co/sm-x110nzaal13/gallery/co-galaxy-tab-a9-sm-x110-483052-sm-x110nzaal13-thumb-538938218?$344_344_PNG$"
    },
    {
        nombre: "Auriculares Bose",
        precio: 200250,
        cantidad: 7,
        descripcion: "Auriculares Bose QuietComfort 35",
        marca: "Bose",
        categoria: "Audio",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjmNwKiEPF2K7x-LIxaPHtcS3x-jgN2cvQg&s"
    },
    {
        nombre: "Auriculares Sony",
        precio: 100200,
        cantidad: 9,
        descripcion: "Sony WH-1000XM4",
        marca: "Sony",
        categoria: "Audio",
        imagen: "https://exitocol.vtexassets.com/arquivos/ids/24249866/Auriculares-Estereo-Sony-X1-NA-1588286_b.jpg?v=638603230723270000"
    },
    {
        nombre: "Monitor LG",
        precio: 800300,
        cantidad: 6,
        descripcion: "Monitor LG UltraWide 29 pulgadas",
        marca: "LG",
        categoria: "Monitores",
        imagen: "https://www.ktronix.com/medias/8806087960266-007-750Wx750H?context=bWFzdGVyfGltYWdlc3w3NDIwfGltYWdlL3dlYnB8YURoakwyZzRPQzh4TkRNMk16a3hOams1TWpVME1pODRPREEyTURnM09UWXdNalkyWHpBd04xODNOVEJYZURjMU1FZ3xmZTc2M2NkYjQ2MTQ5MDFkYjYwMTU1NGRkZDdiYWY0NGRjZWQ0YmM1YjM4NjkxNzBkZDQzNGY5M2M2MTkyN2Y3"
    },
    {
        nombre: "Monitor Samsung",
        precio: 1100350,
        cantidad: 4,
        descripcion: "Samsung Odyssey G5",
        marca: "Samsung",
        categoria: "Monitores",
        imagen: "https://technologystore2006.com/wp-content/uploads/2020/11/samsung-24-2.png"
    },
    {
        nombre: "Teclado mecánico Razer",
        precio: 100120,
        cantidad: 11,
        descripcion: "Teclado mecánico Razer BlackWidow",
        marca: "Razer",
        categoria: "Periféricos",
        imagen: "https://www.ktronix.com/medias/8886419347101-002-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w3NDA4MHxpbWFnZS93ZWJwfGFEZ3dMMmhrTVM4eE5ETTJOREUwTXpBMU9EazNOQzg0T0RnMk5ERTVNelEzTVRBeFh6QXdNbDh4TkRBd1YzZ3hOREF3U0F8MDBjZDFmNWI0MDkxMzUxMzdiNWVkMzM2NDgxOGRiODQ1YjYwMjFjNzg5Y2ExZDZkYjk5YTIzNWZiYzU0Y2QwYQ"
    },
    {
        nombre: "Teclado Logitech",
        precio: 80100,
        cantidad: 10,
        descripcion: "Teclado Logitech K120",
        marca: "Logitech",
        categoria: "Periféricos",
        imagen: "https://www.ktronix.com/medias/097855123046-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0MDgxNnxpbWFnZS93ZWJwfGFEZGxMMmd3Tmk4eE5ESTRNVFk0TVRNM01URTJOaTh3T1RjNE5UVXhNak13TkRaZk1EQXhYekUwTURCWGVERTBNREJJfDczMzZlNjlkZTNiYjgxOTc3ZTk1NTdlY2M4NzA2YmRmZTBmYTNkZjM2NDM3OGExMGY4NjNiMTJkZmQzNTZlMTI"
    },
    {
        nombre: "Mouse gamer Razer",
        precio: 40000,
        cantidad: 14,
        descripcion: "Razer DeathAdder",
        marca: "Razer",
        categoria: "Periféricos",
        imagen: "https://compugamercol.com/wp-content/uploads/2024/01/MOUSE-RAZER-1.jpg"
    },
    {
        nombre: "Mouse Logitech",
        precio: 60000,
        cantidad: 16,
        descripcion: "Logitech G502",
        marca: "Logitech",
        categoria: "Periféricos",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3ioMAZT9wrccPHJCiz13j0N5stObw3w-mg&s"
    },
    {
        nombre: "Cámara Canon",
        precio: 700000,
        cantidad: 5,
        descripcion: "Cámara Canon EOS M50",
        marca: "Canon",
        categoria: "Cámaras",
        imagen: "https://www.tradeinn.com/f/13815/138151346_4/canon-camara-eos-m50-mark-ii.webp"
    },
    {
        nombre: "Cámara Nikon",
        precio: 4650000,
        cantidad: 4,
        descripcion: "Nikon Z50",
        marca: "Nikon",
        categoria: "Cámaras",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4VXcOBahX6K3zYZdwZHmfhJpR3Vk-FYExg&s"
    },
    {
        nombre: "Drone DJI",
        precio: 6000000,
        cantidad: 3,
        descripcion: "DJI Mavic Air 2",
        marca: "DJI",
        categoria: "Drones",
        imagen: "https://colombia.bioweb.co/cdn/shop/products/hEiMkqvPVki9L9bCQevxi_medium.jpg?v=1676652435"
    },
    {
        nombre: "Drone Parrot",
        precio: 5400000,
        cantidad: 6,
        descripcion: "Parrot Anafi",
        marca: "Parrot",
        categoria: "Drones",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_821593-MCO29195916065_012019-O.webp"
    },
    {
        nombre: "Smartwatch Apple",
        precio: 4000000,
        cantidad: 8,
        descripcion: "Apple Watch Series 6",
        marca: "Apple",
        categoria: "Wearables",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9OxU7iR5h1oa66L3IaQqedCOYfo5BMcPzw&s"
    },
    {
        nombre: "Smartwatch Samsung",
        precio: 650000,
        cantidad: 10,
        descripcion: "Samsung Galaxy Watch 3",
        marca: "Samsung",
        categoria: "Wearables",
        imagen: "https://images.samsung.com/is/image/samsung/pe/galaxy-note20/feature/341766/pe-feature-galaxy-watch3-bluetooth-45mm-466-275072489?$ORIGIN_JPG$"
    },
    {
        nombre: "Impresora HP",
        precio: 1100000,
        cantidad: 15,
        descripcion: "Impresora HP DeskJet 2720",
        marca: "HP",
        categoria: "Impresoras",
        imagen: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06626729.png"
    },
    {
        nombre: "Impresora Canon",
        precio: 500000,
        cantidad: 12,
        descripcion: "Canon PIXMA TS6320",
        marca: "Canon",
        categoria: "Impresoras",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsRQ3J5kmSwZLSIIgoVXGQERAxIKF5VyQNw&s"
    },
    {
        nombre: "Router TP-Link",
        precio: 150000,
        cantidad: 14,
        descripcion: "Router TP-Link Archer A7",
        marca: "TP-Link",
        categoria: "Redes",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdtHeih7xcCHvV9q6FHYP5dB7jJ7WP9THXg&s"
    },
    {
        nombre: "Router Netgear",
        precio: 320000,
        cantidad: 6,
        descripcion: "Netgear Nighthawk RAX50",
        marca: "Netgear",
        categoria: "Redes",
        imagen: "https://www.netgear.com/support/cloudimage/1/91/84629"
    },
    {
        nombre: "SSD Samsung",
        precio: 1000000,
        cantidad: 18,
        descripcion: "Samsung 970 EVO 500GB",
        marca: "Samsung",
        categoria: "Almacenamiento",
        imagen: "https://qloudea.com/33331-medium_default/samsung-mz-v7s500bw.jpg"
    },
    {
        nombre: "HDD Seagate",
        precio: 300000,
        cantidad: 20,
        descripcion: "Seagate Barracuda 1TB",
        marca: "Seagate",
        categoria: "Almacenamiento",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-mv5KpGvk9muVDSc4qUeoE8CF7XiqmlCxQ&s"
    },
    {
        nombre: "Tarjeta gráfica NVIDIA",
        precio: 1230000,
        cantidad: 3,
        descripcion: "NVIDIA GeForce RTX 3060",
        marca: "NVIDIA",
        categoria: "Hardware",
        imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/45717986/resize/610/610?1708532873"
    },
    {
        nombre: "Tarjeta gráfica AMD",
        precio: 1300000,
        cantidad: 5,
        descripcion: "AMD Radeon RX 6700 XT",
        marca: "AMD",
        categoria: "Hardware",
        imagen: "https://www.asrock.com.tw/Graphics-Card/photo/Radeon%20RX%206700%20XT%20Challenger%20D%2012GB(M1).png"
    },
    {
        nombre: "Cargador Anker",
        precio: 130000,
        cantidad: 25,
        descripcion: "Cargador Anker de 20W",
        marca: "Anker",
        categoria: "Accesorios",
        imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/72930849_1/public"
    },
    {
        nombre: "Cargador Belkin",
        precio: 100000,
        cantidad: 30,
        descripcion: "Cargador Belkin USB-C",
        marca: "Belkin",
        categoria: "Accesorios",
        imagen: "https://mac-center.com/cdn/shop/files/134462620_WCA006dqMWH-B5____MPW260_Shot1_WEB.png?v=1683904305"
    },
    {
        nombre: "Cables HDMI",
        precio: 20000,
        cantidad: 40,
        descripcion: "Cable HDMI de 2 metros",
        marca: "Genérico",
        categoria: "Accesorios",
        imagen: "https://ferreteriaya.com.co/wp-content/uploads/2021/01/47417.png"
    },
    {
        nombre: "Cables USB-C",
        precio: 10000,
        cantidad: 50,
        descripcion: "Cable USB-C de 1 metro",
        marca: "Genérico",
        categoria: "Accesorios",
        imagen: "https://cdnx.jumpseller.com/tekshop/image/22021953/1__97_.jpg?1654809541"
    },
    {
        nombre: "Almohadilla térmica",
        precio: 50000,
        cantidad: 18,
        descripcion: "Almohadilla térmica para laptops",
        marca: "Genérico",
        categoria: "Accesorios",
        imagen: "https://m.media-amazon.com/images/I/61yzJTpdB2L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        nombre: "Base de refrigeración",
        precio: 40000,
        cantidad: 22,
        descripcion: "Base de refrigeración para laptops",
        marca: "Genérico",
        categoria: "Accesorios",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiTaCQ2woQdlLvKCYaLeezD6EaIH-R3T0Qw&s"
    },
    {
        nombre: "Cámara web Logitech",
        precio: 250000,
        cantidad: 11,
        descripcion: "Cámara web Logitech C920",
        marca: "Logitech",
        categoria: "Cámaras",
        imagen: "https://www.alkosto.com/medias/097855145833-001-820Wx820H?context=bWFzdGVyfGltYWdlc3wyMTUyOHxpbWFnZS93ZWJwfGFEWTJMMmcyWXk4eE5ESTRNalF5TXpjMk1qazNOQzh3T1RjNE5UVXhORFU0TXpOZk1EQXhYemd5TUZkNE9ESXdTQXxiNzBlNDgyZWYwYTk1YWE3YWMxOWY1YTVlYjRmODgxMWU1ZDI3NTJmOGMyMWEwMzU5ODE2ODFjNWNmZWY2NWQz"
    },
    {
        nombre: "Cámara web Razer",
        precio: 400000,
        cantidad: 5,
        descripcion: "Cámara web Razer Kiyo",
        marca: "Razer",
        categoria: "Cámaras",
        imagen: "https://www.mrpc.com.co/wp-content/uploads/2024/07/D_NQ_NP_795563-MLU75127705723_032024-O.webp"
    },
    {
        nombre: "Pantalla BenQ",
        precio: 500250,
        cantidad: 7,
        descripcion: "Pantalla BenQ de 24 pulgadas",
        marca: "BenQ",
        categoria: "Pantallas",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_707441-MCO43694755281_102020-O.webp"
    },
    {
        nombre: "Pantalla LG",
        precio: 600000,
        cantidad: 4,
        descripcion: "Pantalla LG UltraGear 27 pulgadas",
        marca: "LG",
        categoria: "Pantallas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWwIPpjemIP7m8s5-Bcz6jRCcyL-V6JqVCQ&s"
    },
    {
        nombre: "Teclado mecánico Corsair",
        precio: 80000,
        cantidad: 9,
        descripcion: "Teclado mecánico Corsair K95",
        marca: "Corsair",
        categoria: "Periféricos",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_612460-MLA47887983873_102021-O.webp"
    },
    {
        nombre: "Ratón Logitech",
        precio: 50000,
        cantidad: 15,
        descripcion: "Ratón Logitech M510",
        marca: "Logitech",
        categoria: "Periféricos",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_997515-MLA45376433917_032021-O.webp"
    },
    {
        nombre: "Tablet Microsoft",
        precio: 700400,
        cantidad: 8,
        descripcion: "Microsoft Surface Pro 7",
        marca: "Microsoft",
        categoria: "Tablets",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_834336-MLU77512240076_072024-O.webp"
    },
    {
        nombre: "Smartphone Xiaomi",
        precio: 2000000,
        cantidad: 12,
        descripcion: "Xiaomi Mi 11",
        marca: "Xiaomi",
        categoria: "Smartphones",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcUcGgUMcOxM7_Rfj5pavPXVR6c-9fZk0nw&s"
    }
];
let indiceActual = 0;
const cantidadPorPagina = 15;
let productosFiltrados = productos;

function mostrarProductos() {
    const seccionProductos = document.querySelector('.products');
    if (!seccionProductos) return;

    const productosAMostrar = productosFiltrados.slice(indiceActual, indiceActual + cantidadPorPagina);
    productosAMostrar.forEach(crearTarjetaProducto);
    
    indiceActual += cantidadPorPagina;
    if (indiceActual >= productosFiltrados.length) mostrarMensajeFin(seccionProductos);
}

// Primero agrega la función formatCurrency al inicio del archivo
function formatCurrency(price) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(price);
}


function crearTarjetaProducto(producto) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-producto');
    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px; height: 100px;">
        <h3>${producto.nombre}</h3>
        <p>Precio: ${formatCurrency(producto.precio)}</p>
        <p>Categoría: ${producto.categoria}</p>
        <button class="ver-detalle">Ver Detalle</button>
    `;
    tarjeta.querySelector('.ver-detalle').addEventListener('click', () => mostrarDetallesProducto(producto));
    document.querySelector('.products').appendChild(tarjeta);
}

function mostrarMensajeFin(seccion) {
    const mensajeFinal = document.createElement('p');
    mensajeFinal.textContent = 'No hay más productos por cargar.';
    seccion.appendChild(mensajeFinal);
    seccion.removeEventListener('scroll', cargarMasProductos);
}


function cargarMasProductos() {
    let timeout;
    const seccionProductos = document.querySelector('.products');

    // Crea un elemento de imagen para el mensaje de carga
    const mensajeCargando = document.createElement('img');
    mensajeCargando.src = '../Imagenes/gif.webp'; 
    mensajeCargando.alt = 'Cargando...';
    mensajeCargando.style.width = '100px';
    mensajeCargando.style.height = '100px';

    // Verifica si el usuario ha llegado al final
    if (seccionProductos.scrollHeight - seccionProductos.scrollTop <= seccionProductos.clientHeight) {
        
        if (timeout) return;

        // Muestra la imagen de cargando al final de la sección
        seccionProductos.appendChild(mensajeCargando);

        timeout = setTimeout(() => {
            mostrarProductos();
            // Oculta el mensaje de cargando
            seccionProductos.removeChild(mensajeCargando);
            timeout = null; 
        }, 4000); 
    }
}


document.querySelector('.products').addEventListener('scroll', cargarMasProductos);



function filtrarProductos() {
    const categoriaFiltro = document.getElementById('categoriaFiltro').value.toLowerCase();
    const marcaFiltro = document.getElementById('marcaFiltro').value.trim().toLowerCase();

    productosFiltrados = productos.filter(p => 
        (!categoriaFiltro || p.categoria.toLowerCase() === categoriaFiltro) &&
        (!marcaFiltro || p.marca.toLowerCase().includes(marcaFiltro))
    );

    indiceActual = 0;
    const seccionProductos = document.querySelector('.products');
    seccionProductos.innerHTML = '';
    mostrarProductos();
}

function limpiarFiltros() {
    document.getElementById('categoriaFiltro').value = '';
    document.getElementById('marcaFiltro').value = '';
    productosFiltrados = productos;
    indiceActual = 0;

    const seccionProductos = document.querySelector('.products');
    seccionProductos.innerHTML = '';
    seccionProductos.removeEventListener('scroll', cargarMasProductos);
    seccionProductos.addEventListener('scroll', cargarMasProductos);
    mostrarProductos();
}

function mostrarDetallesProducto(producto) {
    const detalleElements = {
        imagen: document.getElementById('detalleImagen'),
        nombre: document.getElementById('detalleNombre'),
        precio: document.getElementById('detallePrecio'),
        categoria: document.getElementById('detalleCategoria'),
        descripcion: document.getElementById('detalleDescripcion'),
        stock: document.getElementById('detalleStock'),
        marca: document.getElementById('detalleMarca')
    };

    detalleElements.imagen.src = producto.imagen;
    detalleElements.nombre.innerText = `Nombre: ${producto.nombre}`;
    detalleElements.precio.innerText = `Precio: ${formatCurrency(producto.precio)}`;
    detalleElements.categoria.innerText = `Categoría: ${producto.categoria}`;
    detalleElements.descripcion.innerText = `Descripción: ${producto.descripcion}`;
    detalleElements.stock.innerText = `Disponible: ${producto.cantidad}`;
    detalleElements.marca.innerText = `Marca: ${producto.marca}`;

    const agregarCarritoButton = document.getElementById('agregarCarrito');
    agregarCarritoButton.onclick = () => agregarAlCarrito(producto, parseInt(document.getElementById('cantidadProducto').value));
}

function guardarDatos(clave, datos) {
    const dataString = JSON.stringify(datos);
    localStorage.setItem(clave, dataString);
}

function obtenerDatos(clave) {
    const dataString = localStorage.getItem(clave);
    return dataString ? JSON.parse(dataString) : null;
}

function eliminarDatos(clave) {
    localStorage.removeItem(clave);
}

function agregarAlCarrito(producto, cantidad) {
    if (cantidad > 0 && cantidad <= producto.cantidad) {
        const carritoActual = obtenerDatos('carrito')|| [];
        const carritoActualizado = [...carritoActual, { producto, cantidad }];
        guardarDatos('carrito', carritoActualizado);
        alert('Producto agregado al carrito con éxito!');
    } else {
        alert('Cantidad inválida');
    }
}


function completarCompra() {
    window.location.href = 'vistaCarrito.html';
}

document.getElementById('cancelarCompra').addEventListener('click', () => {
    eliminarDatos('carrito'); 
    alert('Compra cancelada!');
    window.location.href = 'vistaDetalle.html';
});

mostrarProductos();
