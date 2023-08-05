const div = document.querySelector('div');
console.log(div)

div.style.padding = '5px';
div.style.backgroundColor = 'Green';

div.addEventListener('click', () => {
    alert('Hola! Soy el div');
});