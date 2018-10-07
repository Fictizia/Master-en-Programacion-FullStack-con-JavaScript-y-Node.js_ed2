### Ejercicios: Pseudocódigo


**1 -** Diseña un programa que imprima los numeros del 1 al 100.
```
	@contador = 0
	repetir 100
		@contador = @contador + 1
		mostrar @contador
```

**2 -** Diseña un programa que muestre los numeros del 100 al 0.
```
	@contador = 100
	repetir si @contador>0
		mostrar @contador
		@contador = @contador - 1
```

**3 -** Diseña un programa que muestre los numeros pares entre 0 y 100.
```
	@contador = 0
	repetir 100
		@contador = @contador + 1
		Si @contador % 2 == 0
			mostrar @contador
```


**4 -** Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
```
	procedimiento #moneda
		definir @random = #aleatorio 0 y 99
		si @random % 2 == 0
			devolver "cara"
		si no 
			devolver "cruz"
```

**5 -** Diseña un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
```
	procedimiento #contarDados
		@sumatorioDiez = 0
		@contador = 0
		repetir 100
			definir @dado1 = #aleatorio 1 y 6
			definir @dado2 = #aleatorio 1 y 6
			si @dado1 + @dado2 == 10
				@sumatorioDiez = @sumatorioDiez + 1
			devolver @sumatorioDiez
```


**6 -** Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
	- Calcular porcentajes (segmento*100)/total
```
	procedimiento #porcentajes @hombres, @mujeres, @total
		definir @porcentajeHombres = (@hombres*100)/@total
		definir @porcentajeMujeres = (@mujeres*100)/@total
		definir @porcentajes 
			@hombres = @porcentajeHombres
			@mujeres = @porcentajeMujeres
		devolver @porcentajes
```


**7 -** Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.
```
	// Tu solución
```

**8 -**  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
	// Tu solución
```

**9 -** Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://4.bp.blogspot.com/-oR3XcstycfY/WclGA457UuI/AAAAAAAAD5c/thke5x9K534r28OBOR0eoQMXhXKrlQ4LwCLcBGAs/s1600/U1-Romanos2.jpg)

```
	// Tu solución
```
