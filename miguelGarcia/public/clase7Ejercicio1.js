
function passFor(){

for (var i=3;i>0;i--){
var entrada = prompt("cual es la palabra clave?");
if (entrada== "Fictizia mola mucho"){
    console.log ( "correcto");
    break;}
(i>1) ? console.log("La palabra clave no es la correcta y te quedan " + (i-1) + " intentos") : console.warn("Intentos agotados");  

}


}

function passWhile(){
    var i=3;
    while (i>0){
    var entrada = prompt("cual es la palabra clave?");
    if (entrada== "Fictizia mola mucho"){
        console.warn ( "correcto");
        break;}

    (i>1) ? console.log("La palabra clave no es la correcta y te quedan " + (i-1) + " intentos") : console.warn("Intentos agotados");  
    i--;
    }    
    }
    

function passDoWhile() {

var i=3;
do {
var entrada = prompt("cual es la palabra clave?");
if (entrada== "Fictizia mola mucho"){
    console.warn ( "correcto");
    break;}

(i>1) ? console.log("La palabra clave no es la correcta y te quedan " + (i-1) + " intentos") : console.warn("Intentos agotados");  
i--;
}  while (i>0);

}


