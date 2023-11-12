// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    function updateButtonText(theme) {
        console.log(theme);
        if (theme == 'dark') {
            themeToggle.innerText = '🌕';
        }
        else {
            themeToggle.innerText = '🌑';
        }
    }

    if (currentTheme == 'light') {
        document.body.classList.remove('dark-mode');
        themeToggle.innerText = '🌑';
    }
    else {
        document.body.classList.add('dark-mode');
        themeToggle.innerText = '🌕';
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        themeToggle.setAttribute
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        else {
            theme = 'light';
        }

        localStorage.setItem('theme', theme);
        updateButtonText(theme);
    });

});