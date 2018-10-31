## DOM

1. Saca una lista de los cursos disponibles en Fictizia en el área de Desarrollo interactivo y Web y conviertelo en Markdown.
```javascript
var articles = document.getElementsByTagName("article");
var links = [];
for (var i = 0; i < articles.length; i++) {
    var link = articles[i].querySelector('header > h1 > a');
	var text = link.text;
	var href = link.href;
	
	console.log("- " + text + ": " + href);
}
```

2. Hagamos la web del Metro más divertida.
Saca el estado actual de todas las líneas del metro de Madrid por consola.
```javascript
var lines = document.getElementsByClassName("bloquet");
for (var i = 0; i < lines.length; i++) {
	var trafficStatus = lines[i].querySelector("div.circulacion > div.txt > a");
 	if (trafficStatus) {
	    console.log(trafficStatus.innerText);
    }
}
```

3. Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos.
```javascript
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
    images[i].src = "https://placekitten.com/200/300";
}
```

4. Nos creamos un array de objetos con la informacion, links y fotografias de l@s profes de Fictizia
```javascript
var articles = document.getElementsByTagName("article");
var teachersList = [];
for (var i = 0; i < articles.length; i++) {
    var teacher = {
        photo: "",
        name:"",
        information: "",
        links: {
            twitter: "",
            github: "",
            linkedin: "",
            web: ""
        }
    }
    teacher.photo = articles[i].querySelector("div.withMedia > img").src;
    teacher.name = articles[i].querySelector("div:nth-child(2) > h3").innerText;
    teacher.information = articles[i].querySelector("div:nth-child(2) > p").innerText;
    var links = articles[i].querySelector("div:nth-child(2) > ul");
	if (links) {
		var aNodes = links.getElementsByClassName("txtBtn");
		for (var j = 0; j < aNodes.length; j++) {
		    var href = aNodes[j].href;
	        if(href.includes("twitter") === true) {
	            teacher.links.twitter = href;
            }
            else if(href.includes("github")) {
                teacher.links.github = href;
            }
            else if(href.includes("linkedin")) {
                teacher.links.linkedin = href;
            }
            else {
                teacher.links.web = href;
            }
		}
	}

	teachersList.push(teacher);
}
```
