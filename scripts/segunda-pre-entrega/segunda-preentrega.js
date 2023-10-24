// ESTOS PUNTOS DE TAREA COMPRENDEN TODO LO VISTO DURANTE LAS CLASE 1, 2, 3, 4, 5, 6 ,7, 8
// EL SEGUNDO DESAFÍO COMPRENDE: VARIABLES, CONDICIONALES, BUCLES, FUNCIONES, OBJETOS, ARRAYS Y FUNCIONES DE ORDEN SUPERIOR
// ESO SIGNIFICA QUE TODO EJERCICIO QUE CONTENGA MÉTODOS O DATOS QUE NO FUERON VISTOS EN CLASES, NO SERÁN EVALUADOS
// ESO SIGNIFICA QUE DEBEN INCLUIR TODO LO VISTO HASTA LA CLASE 8

// CASO ECOMMERCE
// DENTRO DE LA CARPETA DATA, HAY UN ARCHIVO products.js QUE PODEMOS UTILIZAR PARA EL DESARROLLO DE NUESTRA PREENTREGA
// 1) Tomar dos categorías de productos que deseen incorporar en su tienda y filtrar de entre todos los productos aquellos que cumplan con la categoría.
// 2) Mediante un alert, saludar al usuario y darles la bienvenida a su ecommerce.
// 3) Mediante un alert, visualizar las categorías de productos disponibles.
// 4) Mediante un prompt, mostrar la lista de productos disponibles ordenados de manera A-Z y preguntar qué producto quiere comprar.
// 5) Con el valor obtenido del punto 4, se deberá buscar el producto deseado y mediante un confirm, mostrar el nombre, descripción y precio del producto. Se deberá preguntar al usuario si se desea completar la compra. En caso de que no se encuentre el producto, se deberá dar la chance de ingresarlo nuevamente.
// 6) Con el valor obtenido del punto 5), se deberá visualizar un alert que agradezca la compra con una supuesta fecha de entrega -usando date-, en el caso de que la acepte, si la cancela, se agradecerá la interacción.

import {products} from './data/products.js';

const CAT1 = "men's clothing";
const CAT2 = "electronics"

function filtrarCategorias(array, cat1, cat2) {
    return array.filter(producto => producto.category === cat1 || producto.category === cat2);
}

let productos = filtrarCategorias(products, CAT1, CAT2);
const NOMBRES_PRODUCTOS = productos.map(producto => producto.title);

function refactorizarProductos(array) {

    let lista_productos = "";
    array.sort();

    for (let i = 0; i < array.length; i++) {
        lista_productos += (i + 1) + ") " + array[i];
        
        if (i < array.length - 1) {
            lista_productos += "\n";
        }
    }

    return lista_productos;
}

let listaProductos = refactorizarProductos(NOMBRES_PRODUCTOS);


alert("Muy buenas! Sea usted bienvenido a nuestro E-Commerce!");
alert("Actualmente contamos con las siguientes categorías de productos: \n 1) Ropa de hombres \n 2) Electrónica");
let eleccionCompra = parseInt(prompt("¿Qué producto desea comprar? Tenemos los siguientes: \n ELEGIR EL PRODUCTO CON NÚMERO \n" + listaProductos));
if (isNaN(eleccionCompra)) {
    alert("Muchas gracias por su visita!");
} else {
    while (eleccionCompra < 1 || eleccionCompra > 10) {
        eleccionCompra = parseInt(prompt("Producto no encontrado. Por favor, ingrese el número de producto nuevamente: \n" + listaProductos))
    }

    let productoSeleccionado;

    do {
    // Obtener el nombre del producto seleccionado por el usuario
    const nombreElegido = NOMBRES_PRODUCTOS[eleccionCompra - 1];
    
    // Buscar el producto correspondiente según su nombre
    productoSeleccionado = productos.find(producto => producto.title === nombreElegido);
    
    if (productoSeleccionado) {
        // Mostrar la información del producto
        const mensaje = `Nombre: ${productoSeleccionado.title} \n\n Descripción: ${productoSeleccionado.description} \n\n Precio: $${productoSeleccionado.price}`;
        const confirmarCompra = confirm(`Información del producto:\n\n${mensaje}\n\n¿Desea completar la compra?`);

        if (confirmarCompra) {
            const FECHA_ACTUAL = new Date();
            const FECHA_ENTREGA = new Date(FECHA_ACTUAL);
            FECHA_ENTREGA.setDate(FECHA_ENTREGA.getDate() + 7);
            alert("¡Gracias por su compra! La fecha estimada de entrega es: " + FECHA_ENTREGA);
        } else {
            alert("Gracias por la visita!");
        }
        } else {
            eleccionCompra = parseInt(prompt("El producto seleccionado no se encuentra. Por favor, ingrese el número del producto nuevamente:\n" + listaProductos));
        }
    } while (!productoSeleccionado);
}