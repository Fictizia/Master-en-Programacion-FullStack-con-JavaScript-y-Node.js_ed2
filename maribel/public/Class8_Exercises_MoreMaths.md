## More maths

1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
```javascript
function flipCoin() {
    var min = 0;
    var max = 10;
    var randomNumber = Math.floor(Math.random() * ((max + 1) - min)) + min;
    
    if (randomNumber % 2 === 0) {
    	console.log("Heads");
    } else {
    	console.log("Tails");
    }
}
```

2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
```javascript
function throwDices(times) {
    var min = 1;
    var max = 6;
    var sumToObtain = 10;
    
    var count = 0;
    for (var i = 0; i < times; i++) {
        var firstDiceValue = Math.floor(Math.random() * (max + 1) - min) + min;
        var secondDiceValue = Math.floor(Math.random() * (max + 1) - min) + min;
        if (firstDiceValue + secondDiceValue === sumToObtain) {
        	count++;
        }
  }
  
  console.log("Number of times the dices made" + sumToObtain + ": " + count);
}
```