document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Aquí puedes realizar la validación de los datos del formulario
    // Por ejemplo, podrías enviar los datos a un servidor para procesar el registro
    
    // Este es solo un ejemplo básico
    console.log('Nombre: ' + nombre);
    console.log('Correo Electrónico: ' + email);
    console.log('Contraseña: ' + password);
});
