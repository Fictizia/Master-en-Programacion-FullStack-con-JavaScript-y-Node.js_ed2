// 1 - Utiliza .assert para controlar cuando se muestra tu nombre por consola.
let name = 'a';
console.assert((name === 'maurcio'), 'mi nombre es Mauricio');

// 2 - Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.

console.time('run');
console.log('Mauricio Correa');
console.info('Mauricio Correa');
console.warn('Mauricio Correa');
console.timeEnd('run');

// 3 - Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.

console.time('run');
console.log('%c mauricio', 'color: yellow; text-transform: uppercase; background-color: green');
console.info('%c mauricio', 'color: blue; text-transform: uppercase; background-color: grey');
console.warn('%c mauricio', 'color: orange; text-transform: uppercase; background-color: black');
console.timeEnd('run');

// 4 - Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.
console.groupCollapsed('group1');
console.time('group1-time')
console.log('%c mauricio', 'color: yellow; text-transform: uppercase; background-color: green');
console.timeEnd('group1-time');
console.groupEnd();

console.groupCollapsed('group2');
console.time('group2-time')
console.info('%c mauricio', 'color: blue; text-transform: uppercase; background-color: grey');
console.timeEnd('group2-time');
console.groupEnd();

console.groupCollapsed('group3');
console.time('group3-time')
console.warn('%c mauricio', 'color: orange; text-transform: uppercase; background-color: black');
console.timeEnd('group3-time');
console.groupEnd();

// 5 - Crea una tabla usando la consola para mostrar el nombre de tus compañeros y el puesto que ocupa en la clase.
let compis = [
  {a: 'compi 1', b: 'compi 2', c: 'no hay compi', d: 'compi 4'},
  {a: 'compi 5', b: 'compi 6', c: 'compi 7', d: 'compi 8'},
];

console.table(compis);