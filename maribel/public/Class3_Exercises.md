## Ejercicios Clase 3

**1 -** Diseña un programa que imprima los numeros del 1 al 100.

```
Algoritmo Ejercicio1
        Para i<-0 Hasta 100 Con Paso 1 Hacer
                Escribir i
        Fin Para
FinAlgoritmo
```

**2 -** Diseña un programa que muestre los numeros del 100 al 0.

```
Algoritmo Ejercicio2
        Para i<-100 Hasta 0 Con Paso -1 Hacer
                Escribir i
        Fin Para
FinAlgoritmo
```

**3 -** Diseña un programa que muestre los numeros pares entre 0 y 100.
```
Algoritmo Ejercicio3
        Para i<-0 Hasta 100 Con Paso 1 Hacer
                Si (i % 2 == 0) Entonces
                        Escribir i
                Fin Si
        Fin Para
FinAlgoritmo
```

**4 -** Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
```
Algoritmo Ejercicio4
        numeroAleatorio <- ALEATORIO(0, 100)
        Si (numeroAleatorio % 2 == 0) Entonces
                Escribir "Cara"
        Sino
                Escribir "Cruz"
        Fin Si
FinAlgoritmo
```

**5 -** Diseña un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
```
Algoritmo Ejercicio5
        contador <- 0
        Para i <- 0 hasta 100 Con Paso 1 hacer
                valorPrimerDado <- ALEATORIO(1, 6)
                valorSegundoDado <- ALEATORIO(1, 6)
                Si (valorPrimerDado + valorSegundoDado == 10) Entonces
                        contador <- contador + 1
                Fin Si
        Fin Para
        Escribir "Veces que los dos dados han sumado 10: " + ConvertirATexto(contador)
FinAlgoritmo
```

**6 -** Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
  - Calcular porcentajes (segmento*100)/total
```
Algoritmo Ejercicio6
        Escribir "Introduzca el número de hombres:"
        Leer numeroHombres
        Escribir "Introduzca el número de mujeres:"
        Leer numeroMujeres

        porcentajeHombres <- numeroHombres * 100 / (numeroHombres + numeroMujeres)
        porcentajeMujeres <- numeroMujeres * 100 / (numeroHombres + numeroMujeres)

        Escribir "Porcentaje de hombres: " + ConvertirATexto(porcentajeHombres)
        Escribir "Porcentaje de mujeres: " + ConvertirATexto(porcentajeMujeres)
FinAlgoritmo
```

**7 -** Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.
```
Algoritmo Ejercicio7
        Escribir "Introduzca el precio original (número):"
        Leer precioOriginal
        Escribir "¿Es invierno? (1|0):"
        Leer esInvierno
        Escribir "¿Es viernes? (1|0):"
        Leer esViernes
        Escribir "¿Es fin de semana? (1|0):"
        Leer esFinDeSemana

        Si (esInvierno && !(esViernes || esFinDeSemana)) Entonces
                descuentoAAplicar <- precioOriginal * 25 / 100
        Fin Si

        precioFinal <- precioOriginal - descuentoAAplicar
        Escribir "Precio final: " + ConvertirATexto(precioFinal)
FinAlgoritmo
```

**8 -** Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
Algoritmo Ejercicio8
        numeroDeFallos <- 0
        palabraClave <- "Fictizia mola mucho"
        palabraClaveEsCorrecta <- falso

        Repetir
                Escribir "Introduzca la palabra clave:"
                Leer entradaDelUsuario
                Si (entradaDelUsuario == palabraClave) Entonces
                        Escribir "Usuario autorizado."
                        palabraClaveEsCorrecta <- verdadero
                Sino
                        numeroDeFallos <- numeroDeFallos + 1
                        Escribir "Usuario NO autorizado (fallos cometidos: " + ConvertirATexto(numeroDeFallos) + ")."
                Fin Si
                Mientras Que (numeroDeFallos < 3 && !palabraClaveEsCorrecta)

                Si (numeroDeFallos >=  3) Entonces
                        Escribir "Número máximo de fallos superado"
                Fin Si
FinAlgoritmo
```
**9 -** Diseña un algoritmo introducido un numero y pasarlo a número romano
- Esperamos que el número sea menor de 50
```
Algoritmo Ejercicio9
	Repetir
		Escribir "Introduzca un número válido entre 1 y 50"
		Leer numeroDecimal
	Mientras Que (numeroDecimal < 0 || numeroDecimal == 0 || numeroDecimal > 50)
	
	decenas <- trunc(numeroDecimal / 10)
	unidades <- numeroDecimal % 10
	
	Dimension nUnidades[10], nDecenas[10]
	nUnidades[1]<-''; nUnidades[2]<-'I'; nUnidades[3]<-'II'; nUnidades[4]<-'III'; nUnidades[5]<-'IV'; nUnidades[6]<-'V'; nUnidades[7]<-'VI'; nUnidades[8]<-'VII'; nUnidades[9]<-'VIII'; nUnidades[10]<-'IX'
	nDecenas[1]<-''; nDecenas[2]<-'X'; nDecenas[3]<-'XX'; nDecenas[4]<-'XXX'; nDecenas[5]<-'XL'; nDecenas[6]<-'L'
	
	Escribir nDecenas[decenas + 1], nUnidades[unidades + 1]
FinAlgoritmo
```
