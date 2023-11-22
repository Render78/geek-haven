// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const nombre = document.getElementById('formGroupExampleInput').value;
    const correo = document.getElementById('formGroupExampleInput2').value;
    const telefono = document.getElementById('formGroupExampleInput3').value;
    const mensaje = document.getElementById('exampleFormControlTextarea1').value;

    // Validación de cada campo
    const validacionNombre = validarCampo(nombre, 5);
    const validacionCorreo = validarCorreo(correo);
    const validacionTelefono = validarCampo(telefono, 5);
    const validacionMensaje = validarCampo(mensaje, 5);

    // Mostrar mensajes de error si la validación falla
    if (!validacionNombre) {
        alert('Nombre debe tener al menos 5 caracteres');
    }

    if (!validacionCorreo) {
        alert('Correo electrónico no válido');
    }

    if (!validacionTelefono) {
        alert('Teléfono debe tener al menos 5 caracteres');
    }

    if (!validacionMensaje) {
        alert('Mensaje debe tener al menos 5 caracteres');
    }

    // Si todas las validaciones son exitosas, puedes enviar el formulario
    if (validacionNombre && validacionCorreo && validacionTelefono && validacionMensaje) {
        alert('Formulario enviado correctamente');
        // Aquí puedes enviar el formulario usando fetch o realizar otras acciones
    }
}

// Función para validar un campo con una longitud mínima
function validarCampo(valor, longitudMinima) {
    return valor.trim().length >= longitudMinima;
}

// Función para validar el formato de correo electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

// Agregar evento submit al formulario
const formulario = document.getElementById('contactForm');
formulario.addEventListener('submit', validarFormulario);
