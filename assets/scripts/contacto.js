document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const tel = document.getElementById('input-tel').value;
    const message = document.getElementById('textarea').value;

    // Validación del nombre
    if (name.length < 5) {
        document.getElementById('nameError').textContent = 'El nombre debe tener al menos 5 caracteres';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length < 5 || !emailRegex.test(email) || (tel.length > 0 && tel.length < 5) || message.length < 10) {
        // Muestra una alerta de error indicando que se deben completar los datos
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete correctamente todos los campos.'
        });
    } else {
        // Muestra una alerta de éxito indicando que los datos son válidos
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Los datos son válidos. ¡Formulario enviado correctamente!'
        });
    }
});
