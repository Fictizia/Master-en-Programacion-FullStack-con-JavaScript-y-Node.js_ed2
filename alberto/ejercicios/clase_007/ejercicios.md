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