function mayorIf(a,b,c){

if (a > b && a > c) { console.log("a es el mayor");}
else if (b > a && b > c ){console.log( " b es el mayor"); }

else console.log (" c es el mayor" );



}


function mayorTernario (a,b,c){

(a>b && a > c) ? console.log( "a es el mayor") : ((b>a && b> c) ? console.log("b es el mayor"):console.log ("c debe ser el mayor") );  

}

function mayorSwitch (a,b,c){

switch(true){

case (a>b && a>c) : console.log("a es el mayor");
break;

case (b > a && b > c) : console.log("b es el mayor");
break;

case (c > a && c > b) : console.log("c es el mayor)");
break;

}

}  
