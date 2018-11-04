//console.log ( h1 dentro de class:masterslist)
var masters = Array.prototype.slice.call(document.querySelectorAll('header > h1:not(.logo)'));
var horas = Array.prototype.slice.call(document.querySelectorAll('.mainTag'));
var enlaces = [];
console.log(masters);

for (i = 0 ; i < masters.length; i++){
    enlaces[i] = masters[i].querySelector('a');
    //console.log(enlaces[i]);
    console.log ("[ " + masters[i].innerText + " (" + horas[i].innerText 
                + ") ] ( " + enlaces[i].href
                + ")" );
}
