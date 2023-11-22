import { products } from "./data/products-data.js";

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
            <button>Añadir al carrito</button>
        `;

        productListDiv.appendChild(productDiv);
    });
}
renderProducts(products);

document.getElementById('filterSelect').addEventListener('change', (event) => {
    const filterValue = event.target.value;

    let sortedProducts = [...products];

    if (filterValue === '1') {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterValue === '2') {
        // Lógica para otro tipo de filtro (por ejemplo, ofertas) si es necesario
        // sortedProducts = ...;
    } else if (filterValue === '3') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filterValue === '4') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    renderProducts(sortedProducts);
});
