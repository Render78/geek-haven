import { products } from "./data/products-data.js";

const productListDiv = document.getElementById('productList');

products.forEach(product => {

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

let ordenAscendente = true;

document.getElementById('btnOrdenar').addEventListener('click', () => {
    ordenAscendente = !ordenAscendente;

    products.sort((a, b) => {
        if (ordenAscendente) {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });

    const productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';

    products.forEach(product => {
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
});