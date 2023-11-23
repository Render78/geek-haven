const carrito = [];

function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        alert('El producto ya está en el carrito.');
    } else {
        carrito.push({ ...producto, cantidad: 1 });
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const li = document.createElement('li');
        const totalProducto = producto.price * producto.cantidad;
        li.innerHTML = `
            <strong>${producto.title}</strong>
            <p>Precio: $${producto.price}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Total: $${totalProducto}</p>
            <p>Categoría: ${producto.category}</p>
            <button class="btn btn-sm btn-primary btn-increment">
                <i class="bi bi-plus"></i>
            </button>
            <button class="btn btn-sm btn-primary btn-decrement">
                <i class="bi bi-dash-lg"></i>
            </button>
        `;
        listaCarrito.appendChild(li);

        const btnIncrement = li.querySelector('.btn-increment');
        btnIncrement.addEventListener('click', () => {
            producto.cantidad++;
            actualizarCarrito();
        });

        const btnDecrement = li.querySelector('.btn-decrement');
        btnDecrement.addEventListener('click', () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
                actualizarCarrito();
            }
        });
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
