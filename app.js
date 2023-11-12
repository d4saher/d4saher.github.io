// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    let navToggler = document.querySelectorAll('.nav-toggler');
    navToggler.addEventListener('click', function() {
        let navLink = document.querySelector('.navbar-nav');
    });

    // Seleccionar todos los elementos de la clase 'dropdown-item' dentro del 'language-switcher'
    document.querySelectorAll('.language-switcher .dropdown-item').forEach(item => {
        // Añadir un evento de clic a cada elemento
        item.addEventListener('click', function() {
            // Seleccionar el botón del menú desplegable
            const dropdownButton = document.querySelector('.language-switcher .btn');

            // Actualizar el texto del botón con el texto del elemento seleccionado
            dropdownButton.textContent = this.textContent;
        });
    });

    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'light') {
        document.body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');

        let theme = 'dark';
        if (document.body.classList.contains('light-mode')) {
            theme = 'light';
        }

        localStorage.setItem('theme', theme);
    });

});