function renderProductsOnSale(productArray) {
    const productsOnSaleDiv = document.getElementById('productsOnSale');
    productsOnSaleDiv.innerHTML = '';

    productArray.forEach(product => {
        if (product.sale) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-4', 'mb-3');

            cardDiv.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Precio: $${product.price}</p>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><small class="text-muted">¡En oferta!</small></p>
                        <button class="btn btn-primary btn-add-to-cart" data-product='${JSON.stringify(product)}'>Añadir al carrito</button>
                    </div>
                </div>
            `;

            productsOnSaleDiv.appendChild(cardDiv);

            const addToCartBtn = cardDiv.querySelector('.btn-add-to-cart');
            addToCartBtn.addEventListener('click', () => {
                const productData = JSON.parse(addToCartBtn.getAttribute('data-product'));
                agregarAlCarritoDesdeIndex(productData);
            });
        }
    });
}

async function fetchProductsOnSale() {
    try {
        const response = await fetch('./assets/scripts/data/productos.json');
        const products = await response.json();
        renderProductsOnSale(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProductsOnSale();

function agregarAlCarritoDesdeIndex(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        Swal.fire('El producto ya está en el carrito.', '', 'warning');
    } else {
        carrito.push({ ...producto, cantidad: 1 });
        localStorage.setItem('carrito', JSON.stringify(carrito));
        Swal.fire('Producto agregado al carrito', '', 'success');
    }
}


renderProductsOnSale(products);
