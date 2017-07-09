var form = document.getElementsByTagName('form')[0];
var apellidosInput = document.getElementById('apellidos');
var inputNombre = document.getElementById('nombre');
var emailInput = document.getElementById('email');
var ejercitoInput = document.getElementById('ejercito');
var fechaInput = document.getElementById('fecha');
var submitButton = document.getElementById('enviar');

var loadingIcon = document.createElement('i');
loadingIcon.classList.add('fa', 'fa-spinner', 'fa-spin');

var misionInput = {
    mision1: document.getElementById('tipo_mision_1'),
    mision2: document.getElementById('tipo_mision_2'),
    mision3: document.getElementById('tipo_mision_3')
};

form.addEventListener('submit', function(event) {
    if (inputNombre.checkValidity() === false) {
        alert('Escribe tu nombre');
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if (apellidosInput.checkValidity() === false) {
        alert('Escribes tu apellidos');
        apellidosInput.focus();
        event.preventDefault();
        return false;
    }
    
    if (emailInput.checkValidity() === false) {
        alert('Introduce un email correcto');
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if (misionInput.mision1.checkValidity() === false) {
        alert('Introduce el tipo de misión');
        event.preventDefault();
        return false;
    }

    if (ejercitoInput.checkValidity() === false) {
        alert('Introduce el tamaño del ejército');
        ejercitoInput.focus();
        event.preventDefault();
        return false;
    }

    if (fechaInput.checkValidity() === false) {
        alert('Introduce una fecha');
        fechaInput.focus();
        event.preventDefault();
        return false;
    }

    submitButton.setAttribute('disabled', '');
    submitButton.appendChild(loadingIcon);
    event.preventDefault();

    setTimeout(function () {
        form.reset();
        submitButton.removeAttribute("disabled");
        submitButton.removeChild(loadingIcon);
        sendNotification("Formulario recibido", "Body de ejemplo");
    }, 1000);

})