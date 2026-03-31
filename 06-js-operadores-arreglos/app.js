tareas.shift(); // elimina primera
tareas.unshift('Configurar mi editor'); // agrega al inicio
lista.innerHTML = tareas.map(t => `<li>${t}</li>`).join('');
tareas.push('Hacer mi primera web'); // agrega al final
const primeras = tareas.slice(0, 2); // no muta
const lista = document.querySelector('#lista');
lista.innerHTML = tareas.map(t => `<li>${t}</li>`).join('');
// Ejemplo de filter y find
const conJS = tareas.filter(t => t.toLowerCase().includes('js'));
const primeraCSS = tareas.find(t => t.toLowerCase().includes('css'));
console.log('Tareas con JS:', conJS);
console.log('Primera que contiene CSS:', primeraCSS);