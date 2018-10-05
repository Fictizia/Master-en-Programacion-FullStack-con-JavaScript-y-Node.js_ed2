![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 3


### Pseudocódigo

> El pseudocódigo (o falso lenguaje) es una descripción de alto nivel compacta e informal del principio operativo de un programa informático u otro algoritmo.

> Utiliza las convenciones estructurales de un lenguaje de programación real, pero está diseñado para la lectura humana en lugar de la lectura mediante máquina, y con independencia de cualquier otro lenguaje de programación. Normalmente, el pseudocódigo omite detalles que no son esenciales para la comprensión humana del algoritmo, tales como declaraciones de variables, código específico del sistema y algunas subrutinas. *Fuente: [Wikiwand](http://www.wikiwand.com/es/Pseudoc%C3%B3digo)*

**Partes:**
- Definición del Problema:
 - Entrada (Datos de Entrada)
 - Proceso (Modificaciones)
 - Salida (Datos finales)
- Cabecera:
 - Variables, Constantes, etc...
- Cuerpo:
 - Inicio, Instrucciones, Fin


**Ginger Code**

![logo](https://raw.githubusercontent.com/GingerCode/Art/master/Logo/Logo%20-%20formato%20horizontal%402x.png)

- [@gingerCode en Github](https://github.com/GingerCode)
- [Especificación](https://github.com/GingerCode/gingercode.org/wiki/Especificaci%C3%B3n)


**PSeInt:**

![PSeInt_logo](http://pseint.sourceforge.net/logo-header.png)

> ...una invitación a entrar en el maravilloso mundo de la programación...

- [Descargar](http://pseint.sourceforge.net/descargas.php)
- [Noticias](http://pseint.sourceforge.net/index.php?page=noticias.php)
- [Documentacion](http://pseint.sourceforge.net/index.php?page=documentacion.php)
- [Exportar](http://pseint.sourceforge.net/index.php?page=psexport.html)


**Trabajando con PSeInt**

- No utilizaremos:
  - Arreglos
  - Objetos
  - Definición explícita
  - Expresiones coloquiales
  - Exportaciones

**Variables:**
- Numéricos
 - Enteros
 ```
  -123, 12, 0...
 ```
 - Reales
 ```
  1.75, 3.1415...
 ```

- Carácter (cadenas)
```
	'texto', "más textos..."
```
- Lógico (Boleanos)
```
	VERDADERO o FALSO
```

**Expresiones:**
- Operadores
- Funciones


**Acciones Secuenciales:**
-  Asignación
```
	(variable)<-(expresion);
	
	// Otra opción
	(variable) = (expresión); 
```
-  Lectura (asignacion desde el ambiente)
```
	Leer (variable)
```
-  Escritura (muestra en el ambiente)
```
	Escribir (variable)
```
-  Otras
```
	// Limpiar ventana
	Borrar Pantalla; 
	// Simulacion evento tecla
	Esperar tecla; 
	// Parar temporalmente
	Esperar (numero) Segundos; 
```

**Estructuras de control:**
- Condicionales:
  - Simple (if)
  ```
	Si (expresion_logica) Entonces
		(acciones_por_verdadero)
	Fin Si
  ```
  - Valor por defecto (if... else)
  ```
	Si (expresion_logica) Entonces
		(acciones_por_verdadero)
	Sino
		(acciones_por_falso)
	Fin Si
  ``` 
  - Casos (Switch)
  ```
	Segun (variable_numerica) Hacer
		(opcion_1):
			(secuencia_de_acciones_1)
		(opcion_2):
			(secuencia_de_acciones_2)
		(opcion_3):
			secuencia_de_acciones_3)
		De Otro Modo:
			(secuencia_de_acciones_dom)
	Fin Segun 
  ```
- Bucles:
  - Mientras (while)
  Solo si se cumple la condicion se ejecutará
  ```
	Mientras (expresion_logica) Hacer
		(secuencia_de_acciones)
	Fin Mientras
  ```
  - Para (for)
  Se ejecutará un número limitado de veces.
  ```
	Para (variable_numerica)<-(valor_inicial) Hasta (valor_final) Con (Paso) paso Hacer
		(secuencia_de_acciones)
	Fin Para
  ```
  - Repetir (Do... While)
  Se ejecuta una vez al menos.
  ```
	Repetir
		(secuencia_de_acciones)
	Hasta Que (expresion_logica)
  ```


### Diagramas de flujo

> El diagrama de flujo o diagrama de actividades es la representación gráfica del algoritmo o proceso. Se utiliza en disciplinas como programación, economía, procesos industriales y psicología cognitiva.

> Estos diagramas utilizan símbolos con significados definidos que representan los pasos del algoritmo, y representan el flujo de ejecución mediante flechas que conectan los puntos de inicio y de fin del proceso. *Fuente: [Wikiwand](https://www.wikiwand.com/es/Diagrama_de_flujo)*


- **Teoría**
![img_simbolos](https://image.jimcdn.com/app/cms/image/transf/dimension=480x10000:format=jpg/path/s37cc796afdd27ec2/image/ib9531583fa25cd50/version/1367814535/image.jpg)


- **Ejemplo**
![img_diagrama](https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/DiagramaFlujoLampara.svg/440px-DiagramaFlujoLampara.svg.png) 


- *Herramientas*
    - [Draw.io](https://www.draw.io/)
    - [Draw de LibreOffice](http://www.libreoffice.org/discover/draw/)
    - [lucidchart](https://www.lucidchart.com/pages/es)


**Demostración:**
- Problema:
 - Objetivo: Calcular el área de un triángulo
 - Fórmula: (base*altura)/2

- Solución:
 - Pseudocódigo (Ginger Code)
 ```
 @altura = 4
 @base = 6
 @resultado = (@base * @altura) / 2
 mostrar "El resultado es " + @resultado
 ```
 - Pseudocódigo (pesInt):
 ```
 Proceso areaTriangulo
 	altura<-4
 	base<-6
 	resultado<-(base*altura)/2
 	Escribir "El resultado es ", resultado
 FinProceso
 ``` 
 - Código:
 ```javascript
 	var altura = 4;
 	var base = 6;
 	var resultado = (base*altura)/2;
 	console.log("El resultado es ", resultado);
 ```



### Lenguaje unificado de modelado

![img](https://upload.wikimedia.org/wikipedia/commons/8/81/UML_Diagrams.jpg)


> El lenguaje unificado de modelado (UML, por sus siglas en inglés, Unified Modeling Language) es el lenguaje de modelado de sistemas de software más conocido y utilizado en la actualidad; está respaldado por el Object Management Group (OMG).

> Es un lenguaje gráfico para visualizar, especificar, construir y documentar un sistema. UML ofrece un estándar para describir un "plano" del sistema (modelo), incluyendo aspectos conceptuales tales como procesos, funciones del sistema, y aspectos concretos como expresiones de lenguajes de programación, esquemas de bases de datos y compuestos reciclados.

> Es importante remarcar que UML es un "lenguaje de modelado" para especificar o para describir métodos o procesos. Se utiliza para definir un sistema, para detallar los artefactos en el sistema y para documentar y construir. En otras palabras, es el lenguaje en el que está descrito el modelo.

> Se puede aplicar en el desarrollo de software gran variedad de formas para dar soporte a una metodología de desarrollo de software (tal como el Proceso Unificado Racional, Rational Unified Process o RUP), pero no especifica en sí mismo qué metodología o proceso usar.

> UML no puede compararse con la programación estructurada, pues UML significa Lenguaje Unificado de Modelado, no es programación, solo se diagrama la realidad de una utilización en un requerimiento. Mientras que programación estructurada es una forma de programar como lo es la orientación a objetos, la programación orientada a objetos viene siendo un complemento perfecto de UML, pero no por eso se toma UML solo para lenguajes orientados a objetos.

> UML cuenta con varios tipos de diagramas, los cuales muestran diferentes aspectos de las entidades representadas.

> [Más información en Wikipedia](https://es.wikipedia.org/wiki/Lenguaje_unificado_de_modelado)


**Recursos**
- [Wikipedia](https://es.wikipedia.org/wiki/Lenguaje_unificado_de_modelado)
- [Herramientas](https://modeling-languages.com/web-based-modeling-tools-uml-er-bpmn/)
- [Ejemplos](https://www.uml-diagrams.org/index-examples.html)



### Mejorando con juegos

![img](https://media2.giphy.com/media/CEyvatrJlP9mM/giphy.gif)

- [Code Monkey](https://www.playcodemonkey.com/)
- [Code Combat](https://codecombat.com/)
- [CodinGame](https://www.codingame.com/start)
- [Untrusted](https://alexnisnevich.github.io/untrusted/)
- [CheckIO & Empire of Code](https://checkio.org/)
- [Elevator Saga](http://play.elevatorsaga.com/)
- [CSS Diner](https://flukeout.github.io/)
- [Flexbox Froggy](http://flexboxfroggy.com/)
- [Flexbox Defense](http://www.flexboxdefense.com/)
- [VIM Adventures](https://vim-adventures.com/)
- [Code Wars](https://www.codewars.com/)


### Ejercicios: Pseudocódigo


**1 -** Diseña un programa que imprima los numeros del 1 al 100.
```
	// Tu solución
```

**2 -** Diseña un programa que muestre los numeros del 100 al 0.
```
	// Tu solución
```

**3 -** Diseña un programa que muestre los numeros pares entre 0 y 100.
```
	// Tu solución
```


**4 -** Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
```
	// Tu solución
```

**5 -** Diseña un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
```
	// Tu solución
```


**6 -** Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
	- Calcular porcentajes (segmento*100)/total
```
	// Tu solución
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

![numeros_romanos](https://4.bp.blogspot.com/-Wla6ZUPzEc0/T8C_JofDt8I/AAAAAAAAZg0/-Uq5XTizJxA/s640/numeros%252Bromanos.png)

```
	// Tu solución
```

### ¡Nuestro primer proyecto!

![img](https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif)

**Funcionamiento:**
- Usaremos los [issues de nuestro repositorio](https://github.com/Fictizia/Curso-JS-para-desarrolladores-web_ed8/issues) para coordinar todas las dudas que tengais.
- Crearemos un nuevo repositorio en Github para desarrollar el proyecto.

**Objetivos Primarios**
- Uso de selectores css3
- Al menos una llamada AJAX
- Al menos un evento

**Objetivos Secundarios**
- Documentación con JSDocs
- Varias llamadas AJAX
- Encapsulamiento del código con `funciones anonimas autoejecutadas`
- Multiples eventos
- "sensación" de navegación por varias vistas

**Extras**
- Test independientes con `console.assert()`
- Router en el front

**Fecha de entrega:**
- Clase 23 (finales de noviembre)


### Recursos para el proyecto
**APIs: Listados**
- [Public APIs](https://github.com/toddmotto/public-apis)
- [programmableweb - List](https://www.programmableweb.com/apis/directory)
- [Open APIs Wikipedia](https://en.wikipedia.org/wiki/List_of_open_APIs)
- [apilist.fun](http://apilist.fun/)

**APIs: Interesantes**
- [Shodan](https://www.shodan.io/)
- [pokeapi](http://pokeapi.co/)
- [Open Weather Map](http://openweathermap.org/)
- [Fitbit](https://dev.fitbit.com/eu)
- [Marvel](http://developer.marvel.com/)
- [SWAPI - The Star Wars API](https://swapi.co/)
- [reddit](https://www.reddit.com/dev/api)
- [Deck of Cards - API](http://deckofcardsapi.com/)
- [TheTVDB API v2](https://api-beta.thetvdb.com/swagger#/)
- [Twitter Streaming](https://dev.twitter.com/streaming/overview)
- [Guild Wars 2](https://api.guildwars2.com/v2)
- [Nutritionix API](https://www.nutritionix.com/business/api)


**Datos Abiertos**

- [Portal de datos abiertos del Ayuntamiento de Madrid](http://datos.madrid.es/portal/site/egob/)
- [Iniciativa de datos abiertos del Gobierno de España](http://datos.gob.es/)
- [EMT Datos Abiertos](http://opendata.emtmadrid.es/)
- [European Data Portal](https://www.europeandataportal.eu/)
- [Open NASA](https://open.nasa.gov/open-data/)
- [Datos Abiertos de Mexico](https://datos.gob.mx/)
- [The home of the U.S. Government’s open data](https://www.data.gov/)