const carrito = [];

function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        alert('El producto ya está en el carrito.');
    } else {
        carrito.push(producto);
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${producto.title}</strong>
            <p>Precio: $${producto.price}</p>
            <p>Categoría: ${producto.category}</p>
        `;
        listaCarrito.appendChild(li);
    });

    const btnEliminarCarrito = document.createElement('button');
    btnEliminarCarrito.textContent = 'Vaciar carrito';

    if (carrito.length > 0) {
        btnEliminarCarrito.addEventListener('click', () => {
            carrito.length = 0;
            actualizarCarrito();
        });
    } else {
        btnEliminarCarrito.style.display = 'none';
    }

    listaCarrito.appendChild(btnEliminarCarrito);
}

export { agregarAlCarrito, actualizarCarrito };