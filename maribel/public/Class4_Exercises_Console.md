## Consola
1. Utiliza .assert para controlar cuando se muestra tu nombre por consola.
```javascript
var nameShouldBeHidden = true;
var myName = "Maribel";

console.assert(nameShouldBeHidden, myName);
```

2. Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.
    - Especificaciones:
        - Imprimir tu nombre usando console.log, console.info, console.warn
```javascript
console.time("console.log time");
console.log("Maribel");
console.timeEnd("console.log time");

console.time("console.info time");
console.info("Maribel");
console.timeEnd("console.info time");

console.time("console.warn time");
console.warn("Maribel");
console.timeEnd("console.warn time");
```

3. Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.
``` javascript
console.time("console.log time with CSS");
console.log("%c Maribel", "background: orange; float: right");
console.timeEnd("console.log time with CSS");

console.time("console.info time with CSS");
console.info("%c Maribel", "background: blue; font-size: 50px");
console.timeEnd("console.info time with CSS");

console.time("console.warn time with CSS");
console.warn("%c Maribel", "background: yellow; font-size: 50px; font-weight: bold");
console.timeEnd("console.warn time with CSS");
```
4. Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.
```javascript
console.groupCollapsed("console.log");
console.time("console.log time with CSS");
console.log("%c Maribel", "background: orange; float: right");
console.timeEnd("console.log time with CSS");
console.groupEnd();

console.groupCollapsed("console.info");
console.time("console.info time with CSS");
console.info("%c Maribel", "background: blue; font-size: 50px");
console.timeEnd("console.info time with CSS");
console.groupEnd();

console.groupCollapsed("console.warn");
console.time("console.warn time with CSS");
console.warn("%c Maribel", "background: yellow; font-size: 50px; font-weight: bold");
console.timeEnd("console.warn time with CSS");
console.groupEnd();
```

5. Crea una tabla usando la consola para mostrar el nombre de tus compañeros y el puesto que ocupa en la clase.
```javascript
var classMates = [
  { name: "Carmen", position:"2" },
  { name: "Mauricio", position:"4"},
  { name: "Jesús", position:"5"},
  { name: "Miguel", position:"6"},
  { name: "Alberto", position:"7"},
  { name: "Fran", position:"8"}
];

console.table(classMates);
```