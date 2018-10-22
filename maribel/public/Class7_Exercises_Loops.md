## Bucles
1. Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
    - La palabra clave es "Fictizia mola mucho"
    - Solo existen tres intentos
    - Si se pasan los tres intentos. Se despliega un mensaje informativo.

- Usando for
```javascript
function authorizeUser() {
  var failedAttempts = 0;
  var maxAllowedFailedAttempts = 3;
  var correctKeyword = "Fictizia mola mucho";
  var keywordIsCorrect = false;
  
  for (; failedAttempts < maxAllowedFailedAttempts && !keywordIsCorrect;)
  {
    var inputKeyword = prompt("Please, enter the keyword");
    if (inputKeyword === correctKeyword)
    {
        keywordIsCorrect = true;
        console.log("User authorized");
    }
    else
    {
        failedAttempts++;
        console.log("User NO authorized (failed attempts: " + failedAttempts + ")");
    }
  }
  
  if (failedAttempts >= maxAllowedFailedAttempts)
  {
    console.log("Max number of attempts reached");
  }
}
```

- Usando while y break
```javascript
function authorizeUser() {
  var failedAttempts = 0;
  var maxAllowedFailedAttempts = 3;
  var correctKeyword = "Fictizia mola mucho";
  var keywordIsCorrect = false;
  
  while (failedAttempts < maxAllowedFailedAttempts && !keywordIsCorrect)
  {
    var inputKeyword = prompt("Please, enter the keyword");
    if (inputKeyword === correctKeyword)
    {
        keywordIsCorrect = true;
        console.log("User authorized");
        break;
    }
    else
    {
        failedAttempts++;
        console.log("User NO authorized (failed attempts: " + failedAttempts + ")");
    }
  }

  if (failedAttempts >= maxAllowedFailedAttempts)
  {
      console.log("Max number of attempts reached");
  }
}
```

- Usando Do...While

```javascript
function authorizeUser() {
  var failedAttempts = 0;
  var maxAllowedFailedAttempts = 3;
  var correctKeyword = "Fictizia mola mucho";
  var keywordIsCorrect = false;
  
  do
  {
    var inputKeyword = prompt("Please, enter the keyword");
    if (inputKeyword === correctKeyword) {
      keywordIsCorrect = true;
      console.log("User authorized");
    }
    else {
        failedAttempts++;
        console.log("User NO authorized (failed attempts: " + failedAttempts + ")");
    }
  } while (failedAttempts < maxAllowedFailedAttempts && !keywordIsCorrect);

  if (failedAttempts >= maxAllowedFailedAttempts)
  {
    console.log("Max number of attempts reached");
  }
}
```

2. Diseña un algoritmo que imprima los numeros del 1 al 100.
- Usando for
```javascript
function countForwards(begin, end) {
    for (var i = begin; i <= end; i++) {
        console.log(i);
    }
}
```
- Usando while
```javascript
function countForwards(begin, end) {
    var i = begin;
    while (i <= end) {
        console.log(i);
        i++;
    }
}
```
- Usando Do...While
```javascript
function countForwards(begin, end) {
    var i = begin;
    do {
        console.log(i);
        i++;
    } while (i <= end);
}
```

3. Diseña un algoritmo que imprima los numeros del 100 al 0.
- Usando for
```javascript
function countBackwards(begin, end) {
    for (var i = begin; i >= end; i--) {
        console.log(i);
    }
}
```
- Usando while
```javascript
function countBackwards(begin, end) {
    var i = begin;
    while (i >= end) {
        console.log(i);
        i--;
    }
}
```
- Usando Do...While
```javascript
function countBackwards(begin, end) {
    var i = begin;
    do {
        console.log(i);
        i--;
    } while (i >= end);
}
```

4. Diseña un algoritmo que imprima los numeros pares entre 0 y 100.
- Usando for
```javascript
function countEven() {
    for (var i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}
```
- Usando while
```javascript
function countEven() {
    var i = 0;
    while (i <= 100) {
        console.log(i);
        i += 2;
    }
}
```
- Usando Do...While
```javascript
function countEven() {
    var i = 0;
    do {
        console.log(i);
        i += 2;
    } while (i <= 100);
}
```

5. Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.
- Usando for (desestructurado)
```javascript
function countEvenNextFifty(num) {
    var nextAmountOfNumbers = 50;
    
    for (var i = num; i <= num + nextAmountOfNumbers; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
```
- Usando while
```javascript
function countEvenNextFifty(num) {
    var nextAmountOfNumbers = 50;
    
    var i = num;
    while (i <= num + nextAmountOfNumbers) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
```
- Usando Do...While
```javascript
function countEvenNextFifty(num) {
    var nextAmountOfNumbers = 50;
    
    var i = num;
    do {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    } while (i <= num + nextAmountOfNumbers);
}
```

6. Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
- Usando for
```javascript
function sumBasedOnParityNextFifty(num) {
    var nextAmountOfNumbers = 50;
    var evensSum = 0;
    var oddsSum = 0;
    
    for (var i = num; i <= num + nextAmountOfNumbers; i++) {
        if (i % 2 === 0) {
            evensSum += i;
        } else {
            oddsSum += i;
        }
    }
    
    console.log("Evens sum: " + evensSum);
    console.log("Odds sum: " + oddsSum);
}
```
- Usando while
```javascript
function sumBasedOnParityNextFifty(num) {
    var nextAmountOfNumbers = 50;
    var evensSum = 0;
    var oddsSum = 0;
    
    var i = num;
    while (i <= num + nextAmountOfNumbers) {
        if (i % 2 === 0) {
            evensSum += i;
        } else {
            oddsSum += i;
        }
        i++;
    }
    
    console.log("Evens sum: " + evensSum);
    console.log("Odds sum: " + oddsSum);
}
```
- Usando Do...While
```javascript
function sumBasedOnParityNextFifty(num) {
    var nextAmountOfNumbers = 50;
    var evensSum = 0;
    var oddsSum = 0;
    
    var i = num;
    do {
        if (i % 2 === 0) {
            evensSum += i;
        } else {
            oddsSum += i;
        }
        i++;
    } while (i <= num + nextAmountOfNumbers);
    
    console.log("Evens sum: " + evensSum);
    console.log("Odds sum: " + oddsSum);
}
```

7. Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50
```javascript
function convertDecimalToRoman(decimalNum) {
    if (!(decimalNum >= 1 && decimalNum <= 50)) {
        console.log("Please, enter a valid number between 1 and 50");
    } else {
      var tens = Math.trunc(decimalNum / 10);
      var units = decimalNum % 10;
      
      var nUnits = ["", "I", "II", "III", "IV", "V", "VII", "VIII", "IX"];
      var nTens = ["", "X", "XX", "XXX", "XL", "L"];
      
      var romanNum = nTens[tens] + nUnits[units];
      console.log(decimalNum + " -> " + romanNum);
    }
}
```