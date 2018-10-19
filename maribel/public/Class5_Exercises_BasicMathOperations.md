## Operaciones matemáticas básicas
2. Diseña un algoritmo que lea dos números y realice los siguientes cálculos:
- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto

```javascript
function operateWithNumbers(firstNumber, secondNumber) {
    var sum = firstNumber + secondNumber;
    var subtraction = firstNumber - secondNumber;
    var division = firstNumber / secondNumber;
    var multiplication = firstNumber * secondNumber;
    
    console.log(firstNumber + " + " + secondNumber + " = " + sum);
    console.log(firstNumber + " - " + secondNumber + " = " + subtraction);
    console.log(firstNumber + " / " + secondNumber + " = " + division);
    console.log(firstNumber + " * " + secondNumber + " = " + multiplication);
}
```

3. Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.

- Trucos:
    - Calcular porcentajes (segmento*100)/total

```javascript
function calculateGenderPercentage(numberOfWomen, numberOfMen) {
    var percentageOfWomen = numberOfWomen * 100 / (numberOfMen + numberOfWomen);
    var percentageOfMen = numberOfMen * 100 / (numberOfMen + numberOfWomen);
    
    console.log("Percentage of women: " + percentageOfWomen + "%");
    console.log("Percentage of men: " + percentageOfMen + "%");
}
```