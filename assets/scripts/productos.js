import { products } from "./data/products-data.js";

// Obtén el contenedor donde deseas insertar las tarjetas
const productListDiv = document.getElementById('productList');

// Recorre los productos y crea una tarjeta para cada uno
products.forEach(product => {
    // Crea un div para cada producto
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-card');

    // Inserta la información del producto en el div
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Precio: $${product.price}</p>
        <p>${product.description}</p>
        <button>Añadir al carrito</button>
    `;

    // Agrega el div del producto al contenedor de lista de productos
    productListDiv.appendChild(productDiv);
});