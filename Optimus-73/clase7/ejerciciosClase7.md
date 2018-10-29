# Ejercicios clase 7

## 1- Diseña un algoritmo para identificar a los clientes autorizados a entrar en nuestro sistema.

- Usando for:

```javascript
for(let i = 1; i <= 3; i++){
	if(window.prompt() === "Fictizia mola mucho"){
		alert("Acceso concedido!");
		break;
	} else {
		if(i < 3){
			alert(`Acceso denegado. Te quedan ${3 - i}`);	
		} else {
			alert(`Has sobrepasado el número de intentos. Pongasé en contacto con un administrador.`);
		}
	}
}
```

- Usando while y break:

```javascript
let i = 1;
while(i <= 3){
	if(window.prompt() === "Fictizia mola mucho"){
		alert("Acceso concedido!");
		break;
	} else {
		if(i < 3){
			alert(`Acceso denegado. Te quedan ${3 - i}`);	
		} else {
			alert(`Has sobrepasado el número de intentos. Pongasé en contacto con un administrador.`);
		}
	}

	i++;
}
```

- Usando Do...While:

```javascript
let i = 1;
do{
	if(window.prompt() === "Fictizia mola mucho"){
		alert("Acceso concedido!");
		break;
	} else {
		if(i < 3){
			alert(`Acceso denegado. Te quedan ${3 - i}`);	
		} else {
			alert(`Has sobrepasado el número de intentos. Pongasé en contacto con un administrador.`);
		}
	}

	i++;
} while (i <= 3);
```

## 2- Diseña un algoritmo que imprima los numeros del 1 al 100.

- Usando for:

```javascript
console.group("Contador");

for(let i = 1; i <= 100; i++){
	console.log(i);
}

console.groupEnd("Contador");
```

- Usando while:

```javascript
	let i = 1;

	console.group("Contador");

	while(i <= 100){
		console.log(i);

		i++;
	}

	console.groupEnd("Contador");
```

- Usando Do...While:

```javascript
	let i = 0;

	console.group("Contador");

	do{
		i++;

		console.log(i);
	} while(i <= 99);

	console.groupEnd("Contador");
```

## 3- Diseña un algoritmo que imprima los numeros del 100 al 0.

- Usando for:

```javascript
	console.group("Contador");

	for(let i = 100; i >= 0; i--){
		console.log(i);
	}

	console.groupEnd("Contador");
```

- Usando while:

```javascript
	let i = 100;

	console.group("Contador");

	while(i >= 0){
		console.log(i);

		i--;
	}

	console.groupEnd("Contador");
```

- Usando Do...While:

```javascript
	let i = 101;

	console.group("Contador");

	do{
		i--;

		console.log(i);
	} while(i >= 1);

	console.groupEnd("Contador");
```

## 4- Diseña un algoritmo que imprima los números oares entre 0 y 100.

- Usando for:

```javascript
	console.group("Contador");

	for(let i = 0; i <= 100; i+=2){
		console.log(i);
	}

	console.groupEnd("Contador");
```

- Usando while:

```javascript
	let i = 0;

	console.group("Contador");

	while(i <= 100){
		console.log(i);

		i+=2
	}

	console.groupEnd("Contador");
```

- Usando Do...While:

```javascript
	let i = -2;

	console.group("Contador");

	do {
		i+=2;

		console.log(i);
	} while(i <= 98);

	console.groupEnd("Contador");
```

## 5- Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50.

- Usando for:

```javascript
	
	let initialNumber = window.prompt();

	(initialNumber % 2 === 0) ? initialNumber++ : finalNumber++;


	console.group("Contador");

	for(i = initialNumber; i <= (initialNumber + finalNumber); i+=2){
		console.log(i);
	}

	console.groupEnd("Contador");