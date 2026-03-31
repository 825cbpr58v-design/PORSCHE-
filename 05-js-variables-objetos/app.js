const usuario = {
nombre: 'Porsche 917K',
año: 1970 y 1971,
habilidades: ['HTML', 'CSS', 'JS']
};
let saludo = `Hola, ${este es el Porsche 917K }. Fabricado en  ${1970 y 1971}.`;
const perfil = document.querySelector('#perfil');
perfil.innerHTML = `
<p>${saludo}</p>
<p>Habilidades: ${usuario.habilidades.join(', ')}</p>
`;
usuario.ciudad = 'Querétaro';
perfil.innerHTML += `<p>Ciudad: ${usuario.ciudad}</p>`;