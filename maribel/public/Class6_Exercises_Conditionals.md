## Condicionales
1. Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.
- Usando if...else
```javascript
function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        console.log(firstNumber + " is smaller than " + secondNumber);
    } else if (firstNumber > secondNumber) {
        console.log(firstNumber + " is greater than " + secondNumber);
    } else if (firstNumber === secondNumber) {
        console.log(firstNumber + " is equal to " + secondNumber);
    } else {
        console.log("Invalid input");
    }
}
```

- Usando Operador Ternario (?:)
```javascript
function compareNumbers(firstNumber, secondNumber) {
    var message = (firstNumber < secondNumber) ? (firstNumber + " is smaller than " + secondNumber)
            : (firstNumber > secondNumber) ? (firstNumber + " is greater than " + secondNumber)
            : (firstNumber === secondNumber) ? (firstNumber + " is equal to " + secondNumber)
            : ("Invalid input");
    
    console.log(message);
}
```

- Usando Switch
```javascript
function compareNumbers(firstNumber, secondNumber) {
    switch(true) {
        case (firstNumber < secondNumber):
            console.log(firstNumber + " is smaller than " + secondNumber);
            break;
        case (firstNumber > secondNumber):
            console.log(firstNumber + " is greater than " + secondNumber);
            break;
        case (firstNumber === secondNumber):
            console.log(firstNumber + " is equal to " + secondNumber);
            break;
        default:
            console.log("Invalid input");
            break;
    }
}
```

2. Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.
- Usando if...else
```javascript
function compareNumbers(firstNumber, secondNumber, thirdNumber) {
    var greatestNumber = 0;
    
    if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        greatestNumber = secondNumber;
    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        greatestNumber = thirdNumber;
    } else {
        greatestNumber = firstNumber;
    }

    console.log("The greatest number is: " + greatestNumber);
}
```
- Usando Operador Ternario (?:)
```javascript
function compareNumbers(firstNumber, secondNumber, thirdNumber) {
    var greatestNumber = (secondNumber > firstNumber && secondNumber > thirdNumber) ? greatestNumber = secondNumber
                    : (thirdNumber > firstNumber && thirdNumber > secondNumber) ? greatestNumber = thirdNumber
                    : greatestNumber = firstNumber;
    
    console.log("The greatest number is: " + greatestNumber);
}
```
- Usando Switch
```javascript
function compareNumbers(firstNumber, secondNumber, thirdNumber) {
    var greatestNumber = 0;
    switch(true) {
        case (secondNumber > firstNumber && secondNumber > thirdNumber):
            greatestNumber = secondNumber;
            break;
        case (thirdNumber > firstNumber && thirdNumber > secondNumber):
            greatestNumber = thirdNumber;
            break;
        default:
            greatestNumber = firstNumber;
            break;
    }
    
    console.log("The greatest number is: " + greatestNumber);
}
```

3. Diseña un script que siga el siguiente proceso:
- Si el primero es negativo, debe sumar los otros dos
- Sino multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.

- Usando if...else
```javascript
function compareNumbers(firstNumber, secondNumber, thirdNumber) {
    var result = 0;
    if (firstNumber < 0) {
        result = secondNumber + thirdNumber;
        console.log(secondNumber + " + " + thirdNumber + " = " + result);
    }
    else {
        result = firstNumber * secondNumber * thirdNumber;
        console.log(firstNumber + " * " + secondNumber + " * " + thirdNumber + " = " + result);
    }
}
```
- Usando Operador Ternario (?:)
```javascript
function compareNumbers(firstNumber, secondNumber, thirdNumber) {
    var result = 0;
    (firstNumber < 0) ? (
    	result = secondNumber + thirdNumber,
        console.log(secondNumber + " + " + thirdNumber + " = " + result)
    ) : (
        result = firstNumber * secondNumber * thirdNumber,
        console.log(firstNumber + " * " + secondNumber + " * " + thirdNumber + " = " + result)
    );
}
```
- Usando Switch
```javascript
function compareNumbers(firstNumber, secondNumber, thirdNumber) {
    var result = 0;
    switch(true) {
        case (firstNumber < 0):
            result = secondNumber + thirdNumber;
            console.log(secondNumber + " + " + thirdNumber + " = " + result);
            break;
        default:
            result = firstNumber * secondNumber * thirdNumber;
            console.log(firstNumber + " * " + secondNumber + " * " + thirdNumber + " = " + result);
            break;
    }
}
```

4. Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
    - Estamos en los meses de invierno
    - Y no es viernes o fin de semana.

- Usando if...else
```javascript
function applyDiscount(originalPrice, isWinter, isFriday, isWeekend) {
    var finalPrice = originalPrice;
    
    var discountToApply = 0;
    if (isWinter && !(isFriday || isWeekend)) {
    	discountToApply = (originalPrice * 25)  / 100;
    }
    
    finalPrice = originalPrice - discountToApply;
    console.log("Final price: " + finalPrice);
}
```
- Usando Operador Ternario (?:)
```javascript
function applyDiscount(originalPrice, isWinter, isFriday, isWeekend) {
    var discountToApply = (isWinter && !(isFriday || isWeekend)) ? (originalPrice * 25)  / 100 : 0;
    
    var finalPrice = originalPrice - discountToApply;
    console.log("Final price: " + finalPrice);
}
```
- Usando Switch
```javascript
function applyDiscount(originalPrice, isWinter, isFriday, isWeekend) {
    var discountToApply = 0;
    switch(true) {
      case (isWinter && !(isFriday || isWeekend)):
        discountToApply = (originalPrice * 25)  / 100;
        break;
      default:
        discountToApply = 0;
        break;
    }
    
    var finalPrice = originalPrice - discountToApply;
    console.log("Final price: " + finalPrice);
}
```

5. Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.

- Usando if...else
```javascript
function calculateSign(num) {
    if (num < 0) {
    	console.log(num + " is negative");
    }
    else {
    	console.log(num + " is positive");
    }
}
```
- Usando Operador Ternario (?:)
```javascript
function calculateSign(num) {
    (num < 0) ? console.log(num + " is negative") : console.log(num + " is postive");
}
```
- Usando Switch
```javascript
function calculateSign(num) {
    switch(true) {
        case (num < 0):
        	console.log(num + " is negative");
        	break;
        default:
        	console.log(num + " is positive");
        	break;
    }
}
```

6. Diseña un algoritmo que al introducir un número nos diga si es par o impar.
- Usando if...else
```javascript
function calculateParity(num) {
    if (num % 2 === 0) {
    	console.log(num + " is even");
    }
    else {
        console.log(num + " is odd");
    }
}
```
- Usando Operador Ternario (?:)
```javascript
function calculateParity(num) {
    (num % 2 === 0) ? console.log(num + " is even") : console.log(num + " is odd");
}
```
- Usando Switch
```javascript
function calculateParity(num) {
    switch(true) {
        case (num % 2 === 0):
        	console.log(num + " is even");
        	break;
        default:
        	console.log(num + " is odd");
        	break;
    }
}
```