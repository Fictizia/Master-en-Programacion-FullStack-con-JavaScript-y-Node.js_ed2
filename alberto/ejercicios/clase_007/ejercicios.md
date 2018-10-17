### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de bucles (Do...While, For, While )

**1 -** `Nivel Medio` :spades: Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.

- Usando *for*
```javascript
	var keywords = ['palabra clave 01', 'palabra clave 02', 'Fictizia mola mucho', 'palabra clave 03', 'palabra clave 04', 'palabra clave 05', 'palabra clave 06', 'palabra clave 07', 'palabra clave 08', 'palabra clave 09', 'palabra clave 10', ]

    var errors = 0;
    
    for( var i = 0; i < keywords.length; i++ ){
        var keyword = keywords[i];
        if(keyword !== 'Fictizia mola mucho') {
            errors++;
        }
        
        if(errors === 3){
            console.log('Has llegado al total de intentos posibles!');
            break;
        }
    }
```

- Usando *while* y *break*
```javascript
	var keywords = ['palabra clave 01', 'palabra clave 02', 'Fictizia mola mucho', 'palabra clave 03', 'palabra clave 04', 'palabra clave 05', 'palabra clave 06', 'palabra clave 07', 'palabra clave 08', 'palabra clave 09', 'palabra clave 10', ]

    var errors = 0;
    var i = 0;
    while(i < keywords.length){
        var keyword = keywords[i];
        if(keyword !== 'Fictizia mola mucho') {
            errors++;
        }
        
        if(errors === 3){
            console.log('Has llegado al total de intentos posibles!');
            break;
        }
        
        i++;
    }
```

- Usando *Do...While*
```javascript
	
	var keywords = ['palabra clave 01', 'palabra clave 02', 'Fictizia mola mucho', 'palabra clave 03', 'palabra clave 04', 'palabra clave 05', 'palabra clave 06', 'palabra clave 07', 'palabra clave 08', 'palabra clave 09', 'palabra clave 10', ]

    var errors = 0;
    var i = 0;
    
    do{
        var keyword = keywords[i];
        if(keyword !== 'Fictizia mola mucho') {
            errors++;
        }
        
        if(errors === 3){
            console.log('Has llegado al total de intentos posibles!');
            break;
        }
        
        i++;
    } while (i < keywords.length)
```

**2 -** Diseña un algoritmo que imprima los numeros del 1 al 100.

- Usando *for*
```javascript
	for( var i = 1; i <= 100; i++) {
	    console.log(i);
	}
```

- Usando *while*
```javascript

    var i = 1;
	while(  i <= 100) {
	    console.log(i);
	    i++;
	}
```

- Usando *Do...While*
```javascript
	var i = 1;
	do  {
	    console.log(i);
	    i++;
	} while(  i < 100)
```


**3 -** Diseña un algoritmo que imprima los numeros del 100 al 0.

- Usando *for*
```javascript
	for( var i = 100; i <= 0; i--) {
	    console.log(i);
	}
```

- Usando *while*
```javascript

    var i = 100;
	while(  i >= 0) {
	    console.log(i);
	    i--;
	}
```

- Usando *Do...While*
```javascript
	var i = 100;
	do  {
	    console.log(i);
	    i--;
	} while(  i >= 0)
```

**4 -** Diseña un algoritmo que imprima los numeros pares entre 0 y 100.

- Usando *for*
```javascript
	for( var i = 0; i <= 100; i++) {
        if( i%2 == 0){
	        console.log(i);
        }
	}
```

- Usando *while*
```javascript

    var i = 0;
	while(  i <= 100) {
	    if( i%2 == 0){
	        console.log(i);
        }
	    i++;
	}
```

- Usando *Do...While*
```javascript
	var i = 0;
	do  {
	    if( i%2 == 0){
	        console.log(i);
        }
	    i++;
	} while(  i <= 100)
```

**5 -** Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

- Usando *for*
```javascript
	function printNumber(numberUser){
        var limit = numberUser + 50;
        for( var i = numberUser; i <= limit; i++) {
            if( i%2 != 0){
                console.log(i);
            }
        }
    }

    printNumber(23);
```

- Usando *while*
```javascript
	function printNumber(numberUser){
        var limit = numberUser + 50;
        while(  numberUser <= limit; ) {
            if( numberUser%2 != 0){
                console.log(i);
            }
            numberUser++;
        }
    }

    printNumber(23);
```

- Usando *Do...While*
```javascript
	function printNumber(numberUser){
        var limit = numberUser + 50;
        do{
            if( numberUser%2 != 0){
                console.log(i);
            }
            numberUser++;
        }while(  numberUser <= limit; )
    }

    printNumber(23);
```

**6 -** Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
- Usando *for*
```javascript
	// Tu solución
```

- Usando *while*
```javascript
	// Tu solución
```

- Usando *Do...While*
```javascript
	// Tu solución
```

**7 -** `Nivel Avanzado` :diamonds: Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

- Usando *for*
```javascript
	// Tu solución
```

- Usando *while*
```javascript
	// Tu solución
```

- Usando *Do...While*
```javascript
	// Tu solución
```
