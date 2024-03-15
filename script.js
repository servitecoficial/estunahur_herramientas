// Datos de usuario para el inicio de sesión
const users = [
    { username: '1', password: '1' },
    { username: 'Florencia', password: '1995' },
    { username: 'Ayelen', password: '1234' },
    // Agrega más usuarios según sea necesario
    //2025 profe beto a saber
];

// Función para manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar credenciales
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Mostrar el contenido del "teléfono Android" después del inicio de sesión
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('androidScreen').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

// Función para abrir una URL en el iframe
function openUrl(url) {
    document.getElementById('app-iframe').src = url;
    document.getElementById('app-container').style.display = 'block';
}

// Función para cerrar la aplicación
function closeApp() {
    document.getElementById('app-iframe').src = '';
    document.getElementById('app-container').style.display = 'none';
}

// Función para alternar la visibilidad de las carpetas de aplicaciones
function toggleFolder(folderId) {
    var folder = document.getElementById(folderId);
    if (folder.style.display === 'block') {
        folder.style.display = 'none';
    } else {
        folder.style.display = 'block';
    }
}
