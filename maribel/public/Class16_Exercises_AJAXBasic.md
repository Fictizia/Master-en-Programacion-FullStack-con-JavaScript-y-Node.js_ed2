## AJAX básico
1. Sacar en el html los [datos de polen](http://airemad.com/api/v1/pollen).

-> See project [directory](https://github.com/minicatsCB/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed2/tree/master/maribel/public/MadridPollenData).

2. Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia.
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

-> See project [directory](https://github.com/minicatsCB/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed2/tree/master/maribel/public/OpenWeatherMap).

3. Jugando con [datos abiertos](http://datos.gob.es/), saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.
```javascript
function requestData(url, cb) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var data = JSON.parse(xmlHttp.responseText);
            cb(data);
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function showElectricalPanels(data) {
    var accessUrl = getAccessUrlToJson(data);
    if(accessUrl !== -1) {
        requestData(accessUrl, showDataInConsole);
    }
    else {
        console.log("No access URL found for JSON format.");
    }
}

function getAccessUrlToJson(data){
    var result = -1;
    for(var item of data.result.items[0].distribution) {
        if(item.title.toLowerCase() === "json") {
            result = item.accessURL;
        }
    }

    return result;
}

function showDataInConsole(data){
    console.log("***** Electrical panels *****");
    console.log(data.cuadromandos.cuadromando);
}

var url = "http://datos.gob.es/apidata/catalog/dataset/l01330241-cuadros-de-mando-electrico-del-alumbrado-publico";
requestData(url, showElectricalPanels);
```
