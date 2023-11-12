// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
    else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('light-mode')) {
            theme = 'light';
        }
        else {
            theme = 'dark';
        }

        localStorage.setItem('theme', theme);
    });

});