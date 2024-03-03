document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Aquí puedes realizar la validación del usuario y contraseña

    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        // Aquí podrías redirigir al usuario a otra página
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});


/



