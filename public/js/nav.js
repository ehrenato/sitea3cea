var el = document.getElementById('header'); // elemento alvo
var numPx = '10'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
        el.classList.add('mudaCor');
    } else {
        el.classList.remove('mudaCor');
    }
});