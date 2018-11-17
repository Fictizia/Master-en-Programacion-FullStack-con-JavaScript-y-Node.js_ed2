*** 1 - Sacar en el html los datos de polen.

```html

<!DOCTYPE html>
<html lang="es">  
  <head>    
    <title>Título de la WEB</title>    
    <meta charset="UTF-8">
    <meta name="ajax" content="ajax">
  </head>  
  <body>
      
    <label>Zonas</label>
    <select></select>
    
    <table cellpadding="5">
        <tr>
            <th>Ciudad</th>
            <th>Medio</th>
            <th>Alto</th>
            <th>muy alto</th>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
        <tr>
            <td class="ciudad"></td>
            <td class="medio"></td>
            <td class="alto"></td>
            <td class="muy-alto"></td>
        </tr>
    </table>
      
  </body>
</html>

```

```javascript

function api(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var res = JSON.parse(xhr.responseText);
                callback(res);
            } else {
                throw ('error de conexión');
            }
        }
    };
    xhr.send();
}

function setSelect(data) {
    var select = document.querySelector('select');

    if (data && data.length > 0) {
        data.forEach(function (item) {
            var option = document.createElement('OPTION');
            var text = document.createTextNode(item.name);
            option.appendChild(text);
            select.appendChild(option)
        })
    }
}

function onSelectChange($event) {

    function getParameters(arrayDOM, array, param) {
        var temp = [];
        for (var j in array[0].parametros) {
            if (array[0].parametros.hasOwnProperty(j)) {
                temp.push(array[0].parametros[j][param]);
            }
        }
        for (var i = 0; i < arrayDOM.length; i++) {
            arrayDOM[i].textContent = temp[i];
        }
    }

    var city = $event.target.value;
    var ciudades = document.querySelectorAll('.ciudad');
    var medio = document.querySelectorAll('.medio');
    var alto = document.querySelectorAll('.alto');
    var muyAlto = document.querySelectorAll('.muy-alto');


    api('http://airemad.com/api/v1/pollen', function (data) {
        if (data && data.length > 0) {
            var filtered = data.filter(function (item) {
                return item.name === city;
            })
            console.log(filtered[0]);
        }

        var parametros = filtered.map(function (item) {
            return Object.keys(item.parametros);
        })

        for (var i = 0; i < ciudades.length; i++) {
            ciudades[i].textContent = parametros[0][i];
        }

        getParameters(medio, filtered, 'medio');
        getParameters(alto, filtered, 'alto');
        getParameters(muyAlto, filtered, 'muy_alto');

    });
}

function init() {
    api('http://airemad.com/api/v1/pollen', setSelect);
    var select = document.querySelector('select');
    select.addEventListener('change', onSelectChange, false);
}

init();

```

*** 2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <button>Madrid</button>
    <button>Barcelona</button>
    <button>Sevilla</button>

    <h2></h2>
    <table cellpadding="5">
        <tr>
            <td>Temp. Actual</td>
            <td class="tempAct"></td>
        </tr>
        <tr>
            <td>Temp. Máxima</td>
            <td class="tempMax"></td>
        </tr>
        <tr>
            <td>Temp. Mínima</td>
            <td class="tempMin"></td>
        </tr>
        <tr>
            <td>Humedad</td>
            <td class="tempHum"></td>
        </tr>
    </table>
</body>

</html>


```

```javascript

function api(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200) {
        var res = JSON.parse(xhr.responseText);
        callback(res);
      }
    }
    xhr.send();
  }

function getCity($event) {
    var city = $event.target.textContent;

    var h2 = document.querySelector('h2')
    var tempAct = document.querySelector('.tempAct');
    var tempMax = document.querySelector('.tempMax');
    var tempMin = document.querySelector('.tempMin');
    var tempHum = document.querySelector('.tempHum');

    api('https://api.openweathermap.org/data/2.5/weather?APPID=f6f7f9a1591073fb35d158aead30270e&units=metric&q='+city, function(data) {
       h2.textContent = data.name;
       tempAct.textContent = data.main.temp + 'º';     
       tempMax.textContent = data.main.temp_max + 'º';
       tempMin.textContent = data.main.temp_min + 'º';
       tempHum.textContent = data.main.humidity + '%';
    });
}  

function init() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(item){
        item.addEventListener('click', getCity, false)
    })
}

init();

```

*** 3 - Jugando con datos abiertos, saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body></body>

</html>

```


```javascript

function api (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
      var res = JSON.parse(xhr.responseText);
      callback(res);
    }
  }
  xhr.send();
}

function init () {
  api('http://opendata.gijon.es/descargar.php?id=163&tipo=JSON', function(data) {

    var data = data.cuadromandos.cuadromando;
    var body = document.querySelector('body');

    data.forEach(function(item){
      var pre = document.createElement('PRE');
      for (var key in item) {
        if (item.hasOwnProperty(key)) {
          pre.textContent += key + ' : ' + item[key] + '\n';
        }
      }
      body.appendChild(pre);
    });
  })
}

document.addEventListener("DOMContentLoaded", init, false);

```
