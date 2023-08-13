const div = document.getElementsByTagName('div');
div.addEventListener('click', () => {
    alert('Hola! Soy el div');
    div.stopPropagation();
});

