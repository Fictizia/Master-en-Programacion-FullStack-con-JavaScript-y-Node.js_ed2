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
	console.warn("%cOptimus", 'padding: 50px; border: 1px solid black; border-radius: 10px; text-align: center; font-size: 20px; background-color: #ffff8d; color: black;');
console.timeEnd("Medición");
```

## **4 -** Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.

```javascript
console.time("timeLog");
	console.group("groupLog");
		console.log("%cOptimus", 'padding: 50px; border: 1px solid black; border-radius: 10px; text-align: center; font-size: 20px; background-color: white; color: black;');
	console.groupEnd('groupLog');
console.timeEnd("timeLog");

console.time("timeInfo");
	console.group("groupInfo");
		console.info("%cOptimus", 'padding: 50px; border: 1px solid black; border-radius: 10px; text-align: center; font-size: 20px; background-color: #82b1ff; color: white;');
	console.groupEnd("groupInfo");
console.timeEnd("timeInfo");

console.time("timeWarn");
	console.group("groupWarn");
		console.warn("%cOptimus", 'padding: 50px; border: 1px solid black; border-radius: 10px; text-align: center; font-size: 20px; background-color: #ffff8d; color: black;');
	console.groupEnd("groupWarn");
console.timeEnd("timeWarn");
```

## **5 -** Crea una tabla usando la consola para mostrar el nombre de tus compañeros y el puesto que ocupa en la clase.

```javascript
var comp = ["Optimus-73", "alberto", "maribel", "mauricio", "miguelGarcia", "ulisesGascon"];

console.table(comp);
```