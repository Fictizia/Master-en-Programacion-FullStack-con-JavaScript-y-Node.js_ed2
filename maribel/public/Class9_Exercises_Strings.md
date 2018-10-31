## Strings

1. Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.
```javascript
function getLetterFrequency(text, letterToSearch) {
    return text.split("").map(function (letter) { if (letter === letterToSearch) { return true; } })
                         .filter(function (isLetterEqual) { return isLetterEqual === true; })
                         .length;
}
````
