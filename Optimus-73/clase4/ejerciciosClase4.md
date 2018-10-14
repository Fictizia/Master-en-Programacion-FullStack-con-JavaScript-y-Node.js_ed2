# Ejercicios clase 4

## **1 -** Utiliza .assert para controlar cuando se muestra tu nombre por la consola.

## **2 -** Crea un script que nos permita calcular el tiempo que se necesita para realizar las siguientes acciones.

```javascript
console.time("Medición");
	console.log("Optimus");
	console.info("Optimus");
	console.warn("Optimus");
console.timeEnd("Medición");
```

## **3 -** Partiendo del ejercicio anterior mejora los estilos de cada mensaje utilizando estilos.

```javascript
console.time("Medición");
	console.log("%cOptimus", 'padding: 50px; border: 1px solid black; border-radius: 10px; text-align: center; font-size: 20px; background-color: white; color: black;');
	console.info("%cOptimus", 'padding: 50px; border: 1px solid black; border-radius: 10px; text-align: center; font-size: 20px; background-color: #82b1ff; color: white;');
	console.warn("%cOptimus", 'padding: 50px; border: 1px solid black; border-radius: 10px; text-align: center; font-size: 20px; background-color: #ff8a80; color: white;');
console.timeEnd("Medición");
```