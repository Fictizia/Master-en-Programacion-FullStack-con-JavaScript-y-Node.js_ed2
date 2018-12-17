'use strict'

var $http = function (url) {
  var urlRequest = url;
  var xhr = new XMLHttpRequest();

  function get() {
    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function(){
        //console.log(xhr)
        if (this.status === 200 && this.readyState === 4) {
          resolve(JSON.parse(xhr.response))
        }else{
          //reject('error en la petición')
        }
      }
      xhr.open("GET", urlRequest, true);
      xhr.send();
    });
  }

  return {
    get
  }
}

$http('http://airemad.com/api/v1/station')
  .get()
  .then(data => {
    console.log(data);
    let content = ""
    data.forEach(element => {
      content += `<li>La estación ${element.nombre_estacion} (${element.id}) está en ${element.direccion}</li>`
    })
    document.body.innerHTML = `<ul>${content}</ul>` 
  })
  .catch(console.log);