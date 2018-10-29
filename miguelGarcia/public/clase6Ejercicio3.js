function ifElse(a,b,c){

if (a<0) {console.log("sumamos b y c :" + (b+c) ) ;}
else {console.log(" multiplicamos los 3 :" + (a*b*c));}

}

function ternario(a,b,c){

a<0 ? console.log("sumamos b y c :" + (b+c) ): console.log(" multiplicamos los 3 :" + (a*b*c));

}

function conSwitch(a,b,c){

switch(true){

case (a<0) :  console.log("sumamos b y c :" + (b+c) );

break;

case (a>-1) :  console.log(" multiplicamos los 3 :" + (a*b*c));

break;


}

}