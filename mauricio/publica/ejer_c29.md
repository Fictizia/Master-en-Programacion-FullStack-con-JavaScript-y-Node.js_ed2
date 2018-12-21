##### 1 - $http es una librería que crearemos para poder funcionar con promesas usando XMLHttpRequest y devolviendo el JSON ya parseado

`main.js`
```javascript
$http('http://airemad.com/api/v1/station')
    .get()
```

`main.js`
```javascript
(function(){
    function $http(url){
      const library = {  }
      
      library.promise = new Promise((resolve, reject) => {
        fetch(url)
          .then(response => {
            if (response.status === 200) {
              return resolve(response.json());
            } else {
              return reject(response.json());
            }
          })
          .catch(error => console.log(error));
      })

      library.get = function() {
        console.log('olaquease');
      }
      
      return library;
    }

    if(typeof(window.$http) === 'undefined'){
      window.$http = $http;
    }

  })();
```