const div = document.querySelector('div');
const btn = document.querySelector('button');

div.style.padding = '5px';
div.style.backgroundColor = 'Green';

div.addEventListener('click', () => {
    alert('Hola! Soy el div');
});

btn.addEventListener('click', (evento) => {
    alert('Hola!');
    evento.stopPropagation();
});