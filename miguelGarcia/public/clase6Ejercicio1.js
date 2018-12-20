function compararIF(a,b){
if (a != b) {

    if (a > b) {return console.log("a es mayor");}
    else { return console.log("b es mayor");}
}
else return console.log("a y b son iguales");

}

function compararTernario(a,b){
    
{(a > b) ?  console.log("a es mayor") : ((a===b) ? console.log("Son iguales"):console.log("b es mayor")) ;}
    

}

function compararSwitch(a,b)

{

switch (true)   {
case (a>b) : console.log("a es mayor" );
break;
case (a<b) : console.log( "b es mayor que a");
break;
case (a===b) : console.log( "ambos son iguales");
break;
 }
}
    