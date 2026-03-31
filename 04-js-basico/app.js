const btn = document.querySelector('#btn');
const msg = document.querySelector('#msg');
btn.addEventListener('click', () => {
alert('¡Hola desde JavaScript!');
msg.textContent = 'Has hecho clic en el botón.';
});
const azul = document.querySelector('#azul');
azul.addEventListener('click', () => { msg.style.color = 'blue'; });