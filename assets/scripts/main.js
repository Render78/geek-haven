import { products } from "./data/products-data.js";

function renderProductsOnSale(productArray) {
    const productsOnSaleDiv = document.getElementById('productsOnSale');
    productsOnSaleDiv.innerHTML = '';

    const productsOnSale = productArray.filter(product => product.sale);

    productsOnSale.forEach(product => {
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
                    <button class="btn btn-primary">Añadir al carrito</button>
                </div>
            </div>
        `;

        productsOnSaleDiv.appendChild(cardDiv);
    });
}

renderProductsOnSale(products);
