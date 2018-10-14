// 2 - Diseña un algoritmo que lea dos números y realice los siguientes cálculos:

let num1;
let num2;

while(typeof num1 !== 'number' && typeof num2 !== 'number') {
  num1 = +prompt('introduce un numero');
  num2 = +prompt('introduce otro numero');
}

function suma (num1, num2) {
  return 'suma: ' + (num1 + num2);
}

function resta (num1, num2) {
  return 'resta: ' + (num1 - num2);
}

function multiplicacion (num1, num2) {
  return 'multiplicación: ' + (num1 * num2);
}

function division (num1, num2) {
  return 'división: ' + (num1 / num2);
}

suma(num1, num2);
resta(num1, num2);
multiplicacion(num1, num2);
division(num1, num2);

// 3 - Diseña un algoritmo para calcular el porcentaje de numHombres y numMujeres en nuestro curso.

let total;
let numHombres;
let numMujeres;

while(typeof total !== 'number' && typeof numHombres !== 'number' && typeof numMujeres !== 'number') {
  total = +prompt('introduce el numero total de alumnos');
  numHombres = +prompt('introduce el numero de hombres');
  numMujeres = +prompt('introduce el numero de mujeres');
}

function porcentage (genero) {
  let value;
  let resultado;
  if (genero === 'hombres') {
    value = numHombres;
    resultado = Math.round((value * 100) / total);
    return `total de hombres: ${resultado}% y de mujeres: ${100 - resultado}%`;
  } else {
    value = numMujeres;
    resultado = Math.round((value * 100) / total);
    return `total de mujeres: ${resultado}% y de hombres: ${100 - resultado}%`;
  }
}

porcentage('hombres');
porcentage('mujeres');

