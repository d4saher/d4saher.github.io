document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme');

    const langButton = document.getElementById('lang-btn');
    const langItems = document.querySelectorAll('.lang-item');
    // Establece el idioma inicial al cargar la página
    let currentLang = localStorage.getItem('lang') || 'en'; // 'en' es el idioma predeterminado
    updateLanguage(currentLang);
    
    // Check if there is a cookie with the theme
    const cookieTheme = getCookie('theme');
    if (cookieTheme) {
        currentTheme = cookieTheme;
    }
    
    // Check if there is a cookie with the language
    const cookieLang = getCookie('lang');
    if (cookieLang) {
        currentLang = cookieLang;
    }

    function updateButtonText(theme) {
        console.log(theme);
        if (theme == 'dark') {
            themeToggle.innerText = '🌕';
        }
        else {
            themeToggle.innerText = '🌑';
        }
    }

    function updateLanguage(lang) {
        // Establece el idioma actual en el almacenamiento local y como cookie
        localStorage.setItem('lang', lang);
        setCookie('lang', lang, 30);

        // Actualiza el texto del botón del menú desplegable
        langButton.textContent = lang.toUpperCase();

        // Aquí puedes añadir cualquier otra lógica que necesites para cambiar el contenido de la página según el idioma
        console.log(`Idioma cambiado a: ${lang}`);
    }

    // Añade el manejador de eventos a cada elemento del idioma
    langItems.forEach(item => {
        item.addEventListener('click', function() {
            updateLanguage(this.textContent.toLowerCase());
        });
    });

    if (currentTheme == 'light') {
        document.body.classList.remove('dark-mode');
        themeToggle.innerText = '🌑';
    }
    else {
        document.body.classList.add('dark-mode');
        themeToggle.innerText = '🌕';
    }

    if (currentLang == 'es') {
        console.log('Language is set to Spanish');
        // Do something for Spanish language
    }
    else {
        console.log('Language is set to English');
        // Do something for English language
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
        setCookie('theme', theme, 30);
        updateButtonText(theme);
    });

    

});

// Function to get a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
