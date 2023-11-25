const carrito = [];

function agregarAlCarrito(producto) {
    // Obtener el carrito desde el almacenamiento local o inicializar un carrito vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        alert('El producto ya está en el carrito.');
    } else {
        carrito.push({ ...producto, cantidad: 1 });
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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
            <button class="btn btn-sm btn-danger btn-remove">
                <i class="bi bi-trash"></i>
            </button>
        `;
        listaCarrito.appendChild(li);

        const btnIncrement = li.querySelector('.btn-increment');
        btnIncrement.addEventListener('click', () => {
            producto.cantidad++;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
        });

        const btnDecrement = li.querySelector('.btn-decrement');
        btnDecrement.addEventListener('click', () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                actualizarCarrito();
            }
        });

        const btnRemove = li.querySelector('.btn-remove');
        btnRemove.addEventListener('click', () => {
            const index = carrito.indexOf(producto);
            if (index !== -1) {
                carrito.splice(index, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                actualizarCarrito();
            }
        });
    });

    const btnEliminarCarrito = document.createElement('button');
    btnEliminarCarrito.textContent = 'Vaciar carrito';
    btnEliminarCarrito.classList.add('btn', 'btn-danger', 'mt-2');

    if (carrito.length > 0) {
        btnEliminarCarrito.addEventListener('click', () => {
            localStorage.removeItem('carrito');
            actualizarCarrito();
        });
    } else {
        btnEliminarCarrito.style.display = 'none';
    }

    listaCarrito.appendChild(btnEliminarCarrito);

    const finalizarCompraBtn = document.createElement('button');
    finalizarCompraBtn.textContent = 'Finalizar Compra';
    finalizarCompraBtn.classList.add('btn', 'btn-success', 'mt-2');
    finalizarCompraBtn.addEventListener('click', () => {
        alert('¡Gracias por su compra!');
        localStorage.removeItem('carrito');
        actualizarCarrito();
    });

    listaCarrito.appendChild(finalizarCompraBtn);
}

function mostrarProductosCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.forEach(producto => {
        const li = document.createElement('li');
        const totalProducto = producto.price * producto.cantidad;
        li.innerHTML = `
            <strong>${producto.title}</strong>
            <p>Precio: $${producto.price}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Total: $${totalProducto}</p>
            <p>Categoría: ${producto.category}</p>
        `;
        listaCarrito.appendChild(li);
    });
}

function mostrarProductosEnOferta() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';

    let productosEnOferta = JSON.parse(localStorage.getItem('productosEnOferta')) || [];

    productosEnOferta.forEach(producto => {
        const li = document.createElement('li');
        const totalProducto = producto.price * producto.cantidad;
        li.innerHTML = `
            <strong>${producto.title}</strong>
            <p>Precio: $${producto.price}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Total: $${totalProducto}</p>
            <p>Categoría: ${producto.category}</p>
        `;
        listaCarrito.appendChild(li);
    });
}

mostrarProductosCarrito();
actualizarCarrito();
mostrarProductosEnOferta();

export { agregarAlCarrito, actualizarCarrito };