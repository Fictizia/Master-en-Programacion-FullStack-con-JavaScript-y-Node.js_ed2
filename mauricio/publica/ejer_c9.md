### 1 - Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.
    
```javascript

var string = 'un algoritmo que cuente las veces que aparece una determinada letra en una frase'

function counterLyrics (string, letter) {
  
  var filtered = Array.from(string).filter(function(item) {
    return item === letter; 
  })
  
  return 'la letra ' + letter +' aparece ' + filtered.length;
}

```