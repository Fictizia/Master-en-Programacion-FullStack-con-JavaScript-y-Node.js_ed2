### Librería HTTP

**1 -** `$http` es una librería que crearemos para poder funcionar con promesas usando `XMLHttpRequest` y devolviendo el JSON ya parseado

```javascript
let $http = function(url) {
    return {
        get: function() {
            return new Promise((resolve, reject) => {
                let xmlHttp = new XMLHttpRequest();

                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                        let data = JSON.parse(xmlHttp.responseText);
                        resolve(data);
                    } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                        console.error("ERROR! 404");
                        reject(JSON.parse(xmlHttp.responseText));
                    }
                };
                xmlHttp.open("GET", url, true);
                xmlHttp.send();
            });
        }
    }
}

$http("http://airemad.com/api/v1/station")
    .get()
    .then(data => {
        let content = "";
        data.forEach(element => {
          content += `<li>La estación ${element.nombre_estacion} (${element.id}) está en ${element.direccion}</li>`;
      });
        document.body.innerHTML = `<ul>${content}</ul>`;
    })
    .catch(console.log);

```
