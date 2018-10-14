# Ejercicios clase 5

## **1 -** Diseña un algoritmo que lea dos números y realice los siguientes cálculos:
- Valor de su suma.
- Valor de su resta.
- Valor de su división.
- Valor de su producto.

```javascript
let num1 = 4;
let num2 = 2;

let sum = num1 + num2;
let res = num1 - num2;
let div = num1 / num2;
let pro = num1 * num2;

console.group("operGroup");
	console.log(`Suma: ${num1} + ${num2} = ${sum}`);
	console.log(`Resta: ${num1} - ${num2} = ${res}`);
	console.log(`División: ${num1} / ${num2} = ${div}`);
	console.log(`Producto: ${num1} * ${num2} = ${pro}`);
console.groupEnd("operGroup");
```

## **2 -** Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.

```javascript
let numH = 5;
let numM = 2;

let porH = (numH * 100) / (numH + numM);
let porM = (numM * 100) / (numH + numM);

console.group("operGroup");
	console.log(`El porcentaje de hombres es de: ${porH}%`);
	console.log(`El porcentaje de mujeres es de: ${porM}%`);
console.groupEnd("operGroup");
```
