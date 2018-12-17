# Ejercicios clase 12

## 1- Saca una lista de los cursos disponibles en Fictizia en el área de Desarrollo interactivo y Web y conviertelo en Markdown.


```javascript
	let time = [];
	let name = [];

	time = document.querySelectorAll("article > strong");
	name = document.querySelectorAll("article > header > h1 > a");

	console.group("# Cursos de Fictizia en el Área de Desarrollo interactivo y Web:");

	for(let i = 0; i < name.length; i++){
		console.log(`- [${name[i].innerText} (${time[i].innerText})] (${name[i].href})`);
	}

	console.groupEnd("# Cursos de Fictizia en el Área de Desarrollo interactivo y Web:");
```

## 2- Saca el estado actual de todas las líneas de metro de Madrid por la consola.

```javascript
	let estadoLinea = [];

	estadoLinea = document.querySelectorAll(".bloquet > .circulacion > .txt > a");

	console.group("Información del estado de la circulación de la red de metro:");

	estadoLinea.forEach((element) => console.log(element.innerText));

	console.groupEnd("Información del estado de la circulación de la red de metro:");
```

## 3- Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos.

```javascript
	let arrImg = [];

	arrImg = document.querySelectorAll("img");

	arrImg.forEach((element) => element.src = "http://placekitten.com/g/200/300");
```

## 4- Crear un array de objetos con la informacion, links y fotografías de l@s profesores de Fictizia.

```javascript
	let data = [];
	let perfiles = [];

	perfiles = document.querySelectorAll(".microCard");

	perfiles.forEach(function(element){

		let enlaces = [];
		enlaces = element.querySelectorAll(".microBtns > li > a");

		data.push({
			imagen: element.querySelector(".withMedia > img").src,
			nombre: element.querySelector("h3").innerText,
			descripcion: element.querySelector("p").innerText,
			enlace1: enlaces[0] ? enlaces[0].href : undefined,
			enlace2: enlaces[1] ? enlaces[1].href : undefined,
			enlace3: enlaces[2] ? enlaces[2].href : undefined
		});
	});
```