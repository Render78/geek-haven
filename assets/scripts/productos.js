const productListDiv = document.getElementById('productList');

async function fetchProducts() {
    try {
        const response = await fetch('../assets/scripts/data/productos.json');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error(error);
    }
}

fetchProducts().then(products => { console.log(products); }); //Prueba de fetch de productos

function renderProducts(productArray) {
    productListDiv.innerHTML = '';

    productArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Precio: $${product.price}</p>
            <p>${product.description}</p>
            ${product.sale ? '<p>¡En oferta!</p>' : ''}
            <button class="add-to-cart-btn">Añadir al carrito</button>
        `;

        productListDiv.appendChild(productDiv);

        const addToCartBtn = productDiv.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => {
            agregarAlCarrito(product);
        });
    });
}

async function initializeProducts() {
    const products = await fetchProducts();
    renderProducts(products);

    document.getElementById('filterSelect').addEventListener('change', (event) => {
        const filterValue = event.target.value;
        let filteredProducts = [...products];

        switch (filterValue) {
            case '1':
                filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case '2':
                filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case '3':
                filteredProducts = products.filter(product => product.sale);
                break;
            case '4':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            default:
                break;
        }

        renderProducts(filteredProducts);
    });

    document.getElementById('productSelect').addEventListener('change', (event) => {
        const productFilterValue = event.target.value;
        let filteredByProductType = [...products];

        switch (productFilterValue) {
            case '1':
                filteredByProductType = products.filter(product => product.category === 'hardware');
                break;
            case '2':
                filteredByProductType = products.filter(product => product.category === 'perifericos');
                break;
            case '3':
                filteredByProductType = products.filter(product => product.category === 'accesorios')
            default:
                break;
        }

        renderProducts(filteredByProductType);
    });
}

initializeProducts();

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        alert('El producto ya está en el carrito.');
    } else {
        carrito.push({ ...producto, cantidad: 1 });
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto agregado al carrito');
    }
}