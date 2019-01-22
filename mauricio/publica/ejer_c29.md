##### 1 - $http es una librería que crearemos para poder funcionar con promesas usando XMLHttpRequest y devolviendo el JSON ya parseado

`main.js`
```javascript
$http('http://airemad.com/api/v1/station')
    .then()
```

`library.js`
```javascript
(function () {

  function $http(url) {

    const library = {}

    library.promise = fetch(url)
      .then(response => response)

    library.get = function () {
    
      return library.promise
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            library.catch(response);
            return false;
          }
      })
    }

    library.then = function () {
      this.get()
        .then( data => {
            if (data && data.length) {
              let content = ""
              data.forEach(element => {
                content += `<li>La estación ${element.nombre_estacion} (${element.id}) está en ${element.direccion}</li>`
              })
              document.body.innerHTML = `<ul>${content}</ul>` 
            }            
          }
        )
    }

    library.catch = function(error) {
      document.body.innerHTML = `Error: ${error.status} ${error.statusText}` 
    }

    return library;
  }

  if (typeof (window.$http) === 'undefined') {
    window.$http = $http;
  }

})();

```