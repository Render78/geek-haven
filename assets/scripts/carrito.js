function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const carritoTable = document.createElement('table');
    carritoTable.classList.add('table');

    carritoTable.innerHTML = `
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Oferta</th>
                <th>Total</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = carritoTable.querySelector('tbody');

    carrito.forEach(producto => {
        const totalProducto = producto.price * producto.cantidad;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.title}</td>
            <td>$${producto.price}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.sale ? 'Sí' : 'No'}</td>
            <td class="total">$${totalProducto}</td>
            <td>
                <button class="btn btn-primary btn-increment">+</button>
                <button class="btn btn-primary btn-decrement">-</button>
                <button class="btn btn-danger btn-remove bi bi-trash"></button>
            </td>
        `;

        const updateTotal = () => {
            const totalProducto = producto.price * producto.cantidad;
            row.querySelector('.total').textContent = `$${totalProducto}`;
        };

        const updateQuantity = () => {
            row.querySelector('td:nth-child(3)').textContent = producto.cantidad;
            updateTotal();
        };

        row.querySelector('.btn-increment').addEventListener('click', () => {
            producto.cantidad++;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            updateQuantity();
        });

        row.querySelector('.btn-decrement').addEventListener('click', () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
                localStorage.setItem('carrito', JSON.stringify(carrito));
                updateQuantity();
            }
        });

        row.querySelector('.btn-remove').addEventListener('click', () => {
            const index = carrito.indexOf(producto);
            if (index !== -1) {
                carrito.splice(index, 1);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                mostrarCarrito();
            }
        });

        tbody.appendChild(row);
    });

    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    carritoDiv.appendChild(carritoTable);
}

mostrarCarrito();
