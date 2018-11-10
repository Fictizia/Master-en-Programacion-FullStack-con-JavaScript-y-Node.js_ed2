### 1 - Saca una lista de los cursos disponibles en Fictizia en el área de Desarrollo interactivo y Web y conviertelo en Markdown.
> [Máster en Diseño de interfaz y Front-end con HTML5, CSS3 y jQuery (165 HORAS)] \(https://fictizia.com/formacion/master-interfaz-frontend-html5-css3-jquery\)

```javascript 1.5
var cursos = document.querySelectorAll('.card.plan');

var filtered = [];

cursos.forEach(function(item) {
  var nombre = item.children[1].firstElementChild.firstElementChild.textContent;
  var duracion = item.children[0].textContent;
  var link = item.children[1].firstElementChild.firstElementChild.href;

  filtered.push('['+ nombre + ' (' + duracion + ')](' + link + ')');
});
```

### 2 - Hagamos la web del Metro más divertida. 

>Saca el estado actual de todas las líneas del metro de Madrid por consola.

```javascript 1.5
var bloque = document.querySelectorAll('.bloquet');

bloque.forEach(function (item) {
  if (item.children[1] !== undefined) {
    var linea = item.children[1].children[0].firstElementChild.textContent;
    linea = linea.replace('  ', ' ');
    console.log(linea);
  }
});
```

### 3 - Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos.

```javascript 1.5
var wrap = document.getElementById('td-outer-wrap');
var array = wrap.getElementsByTagName('img');

Array.from(array).forEach(function(item) {
    item.src = 'http://placekitten.com/g/200/300';
});
```

### 4 - Nos creamos un array de objetos con la informacion, links y fotografias de l@s profes de Fictizia

```javascript 1.5

var profes = [];

var articles = document.querySelectorAll('.microCard');

articles.forEach(function (item) {
    
    var profe = {
        nombre: '',
        descripcion: '',
        img: '',
        redes: [
            {
                twitter: '',
                linkedin: '',
                web: '',
                github: ''
            }
        ]
    }
    
    profe['nombre'] = item.children[1].firstElementChild.textContent;
    profe['descripcion'] = item.children[1].children[1].textContent;
    profe['img'] = item.children[0].children[0].src;
    
    if (item.children[1].children[2] !== undefined) {
        var lis = item.children[1].children[2].children;
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].textContent === 'Web') {
                profe['redes'][0].web = lis[i].children[0].href;
            } else if (lis[i].textContent === 'Linkedin') {
                profe['redes'][0].linkedin = lis[i].children[0].href;
            } else if (lis[i].textContent === 'Twitter') {
                profe['redes'][0].twitter = lis[i].children[0].href;
            } else if (lis[i].textContent === 'Github') {
                profe['redes'][0].github = lis[i].children[0].href;
            }
            
        }
    }
    
    profes.push(profe);
})

```


