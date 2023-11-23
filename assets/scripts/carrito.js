const carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto.title;
        listaCarrito.appendChild(li);
    });
}

export { agregarAlCarrito, actualizarCarrito };