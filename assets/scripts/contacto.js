document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();


    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const tel = document.getElementById('input-tel').value;
    const message = document.getElementById('textarea').value;

    
    if (name.length < 5) {
        document.getElementById('nameError').textContent = 'El nombre debe tener al menos 5 caracteres';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    
    if (tel.length > 0 && tel.length < 5) {
        document.getElementById('telError').textContent = 'El número telefónico debe tener al menos 5 caracteres';
    } else {
        document.getElementById('telError').textContent = '';
    }

    
    if (message.length < 10) {
        document.getElementById('textareaError').textContent = 'El mensaje debe tener al menos 10 caracteres';
    } else {
        document.getElementById('textareaError').textContent = '';
    }

    
    if (name.length >= 5 && emailRegex.test(email) && (tel.length === 0 || tel.length >= 5) && message.length >= 10) {
        Swal.fire({
            title: "Proceso exitoso!",
            text: "Los datos se han enviado correctamente",
            icon: "success"
          });
    }
});
