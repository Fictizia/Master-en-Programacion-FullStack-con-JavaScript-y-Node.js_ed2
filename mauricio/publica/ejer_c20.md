Hagamos una aplicación web que nos pregunte por un usuario de github...

**Características**

* Si el email no aparece, utilizaremos los eventos para mostrarlo.
* Devolveremos su información de perfil incluyendo el email.
```html

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

<img src="http://ryuta-komori.com/wp-content/uploads/2017/04/github-718x266.png" alt="img">
<input type="text" id="input" style="display: block" />
<div class="container"></div>

<script>
  var input = document.querySelector('input');
    input.addEventListener('keyup', searchUser, false);
    var container = document.querySelector('.container');
  
    function handleErrors (res) {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    }
  
    function callApiAgain(res) {
      fetch('https://api.github.com/users/'+ res.login +'/events')
        .then(function(dataEvent) {
          return dataEvent.json();
        })
        .then(function(resEvent) {
          var filtered = [];
          var stringifado = JSON.stringify(resEvent);
          var regex = /[a-z0-9\._%+!$&*=^|~#%\'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/gm;
  
          var email = stringifado.match(regex);
  
          if (email && email.length) {
            email.forEach(function(item) {
              if (filtered.indexOf(item) === -1) {
                filtered.push(item);
              }
            });
  
            res.email = filtered.toString();
          } else {
            res.email = 'No tiene mails';
          }
          for(var key in res) {
            if (res.hasOwnProperty(key)) {
              container.innerHTML += key + ': ' + res[key] + '<br />';
            }
          }
  
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  
    function searchUser ($event) {
      container.innerHTML = '';
      if ($event.code === 'Enter' && $event.isTrusted) {
        if (input.value.trim() === '') {
          container.innerHTML = 'Insert a user name';
          return ;
        } else {
          var inputTrimado = input.value.trim();
  
          fetch('https://api.github.com/users/'+inputTrimado)
            .then(handleErrors)
            .then(function(data){
              return data.json();
            })
            .then(function(res){
              if (res.email === null) {
  
                callApiAgain(res);
  
              } else {
                for(var key in res) {
                  if (res.hasOwnProperty(key)) {
                    container.innerHTML += key + ': ' + res[key] + '<br />';
                  }
                }
              }
            })
            .catch(function(error) {
              container.innerHTML = 'User not found';
              console.log(error);
            });
        }
      }
    }

</script>
</body>
</html>
```


