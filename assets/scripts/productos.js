import { products } from "./data/products-data.js";
import { agregarAlCarrito, actualizarCarrito } from "./carrito.js";

const productListDiv = document.getElementById('productList');

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

    addToCartBtn.addEventListener('click', () => {
        agregarAlCarrito(product);
    });
}
renderProducts(products);

document.getElementById('filterSelect').addEventListener('change', (event) => {
    const filterValue = event.target.value;

    let filteredProducts = [...products];

    if (filterValue === '1') {
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterValue === '2') {
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (filterValue === '3') {
        filteredProducts = products.filter(product => product.sale);
    } else if (filterValue === '4') {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    renderProducts(filteredProducts);
});

document.getElementById('productSelect').addEventListener('change', (event) => {
    const productFilterValue = event.target.value;

    let filteredByProductType = [...products];

    if (productFilterValue === '1') {
        filteredByProductType = products.filter(product => product.category === 'hardware');
    } else if (productFilterValue === '2') {
        filteredByProductType = products.filter(product => product.category === 'accesorios');
    }

    renderProducts(filteredByProductType);
});
