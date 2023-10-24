// 1) PRIMER CASO:
// - Pregunte al usuario su nombre a través de un prompt.

// - Con el valor de su nombre, envíe un mensaje a través de un alert que le de la bienvenida. Ej: "Bienvenido a nuestro ecommerce Javier."

// - Pregúntele al usuario, con un nuevo prompt, qué categoría de producto le interesaría comprar, ej: "¿Qué desea comprar? Elija la opción 1 si son remeras, opción 2 si son pantalones". La frase y la forma de introducir los datos queda a criterio de ustedes. Lo necesario es que a partir del valor ingresado, se valide qué mostrar luego.

// - Valide el valor ingresado. En el caso de que sea, por ejemplo, 1, muestre por confirm el artículo remera, con un mensaje de este estilo: "Usted eligió remera. Su precio es de $x. Desea comprar este artículo?"

// - En el caso de cancelar, terminar el algoritmo con un nuevo alert: "Muchas gracias por su visita"

// - Si el usuario decide aceptar la compra, se deberá mediante un bucle, reproducir tres mensajes distintos: El primero será: "Ingrese su dirección para poder realizar el envío del pedido", el segundo: "Su artículo será enviado a: - dirección-" y el tercero: "Muchas gracias por su compra".

// FIN DEL EJERCICIO
// RECUERDEN ENCAPSULAR LA LÓGICA DENTRO DE FUNCIONES
// PUEDEN HACER UNA FUNCIÓN QUE CONTENGA UN ALERT Y QUE EL TEXTO DEL ALERT SEA PASADO COMO PARÁMETRO, COSA DE NO REPETIR LOS ALERTS Y APRENDER A HACER LÓGICA REUTILIZABLE.

let usuario = prompt("Bienvenido! Por favor, ingrese su nombre de usuario a continuación");

while (usuario == "" || usuario == null) {
    usuario = prompt("El usuario no puede quedar vacio. Por favor, ingrese un nombre");
}

alert("Bienvenido a nuestra tienda, " + usuario + "!");

let producto = parseInt(prompt("Querido " + usuario + ", ¿Qué tipo de producto le gustaría comprar? \n 1) Tarjeta gráfica GTX 1050 \n 2) CPU i5 12400 \n 3) PS5 \n 4) Peluche spider-man \n ELEGIR CON NÚMERO DEL 1 AL 4"));

function validarProducto(flag) {

    switch (flag) {
        case true:
            let direccion = prompt("Usted ha confirmado la compra. Por favor, ingrese a continuación su dirección para poder enviar el pedido:");
            if (direccion == null) {
                alert("Se ha cancelado el pedido.");
                break;
            }
            let envio = confirm("Su artículo será enviado a: " + direccion);
            if (envio == false) {
                alert("Se ha cancelado el pedido.");
                break;
            }
            alert("Se ha confirmado el envío de su artículo. Muchas gracias por su compra!");
            break;

        default:
            alert("Muchas gracias por su visita.")
            break;
    }
}


function confirmarProducto(producto) {

    while (producto < 1 || producto > 4) {
        alert("Número de producto mal ingresado. Por favor, ingréselo nuevamente.");
        producto = parseInt(prompt("Querido " + usuario + ", ¿Qué tipo de producto le gustaría comprar? \n 1) Tarjeta gráfica GTX 1050 \n 2) CPU i5 12400 \n 3) PS5 \n 4) Peluche spider-man \n ELEGIR CON NÚMERO DEL 1 AL 4"));
    }

    switch (producto) {
        case 1:
            let flag = confirm("Usted eligió para comprar una tarjeta gráfica GTX 1050, su precio es de $120.000. Quiere confirmar?");
            validarProducto(flag);
            break;

        case 2:
            let flag2 = confirm("Usted eligió para comprar un CPU i5 12400, su precio es de $150.000. Quiere confirmar?");
            validarProducto(flag2);
            break;

        case 3:
            let flag3 = confirm("Usted eligió para comprar una PS5, su precio es de $600.000. Quiere confirmar?");
            validarProducto(flag3);
            break;

        case 4:
            let flag4 = confirm("Usted eligió para comprar un peluche de spider-man, su precio es de $5000. Quiere confirmar?");
            validarProducto(flag4);
            break;

        default:
            alert("Muchas gracias por su visita.");
            break;
    }
}

confirmarProducto(producto);