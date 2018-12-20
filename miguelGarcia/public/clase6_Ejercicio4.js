
function descuentoIf(a,b){

    var noFinde = (a!=5 && a!=6 && a!=7);
    var invierno = (b == 12 || b == 1 || b == 2);

    if (noFinde && invierno) {console.log("tienes un 25 % de DTO!!");}
    else {console.log("hoy no estamos de rebajas");}

}

function descuentoTernario(a,b){

    var noFinde = (a!=5 && a!=6 && a!=7);
    var invierno = (b == 12 || b == 1 || b == 2);

    (noFinde && invierno) ? console.log("tienes un 25 % de DTO!!") : console.log("hoy no estamos de rebajas");

}

function descuentoSwitch (a,b) {

    var noFinde = (a!=5 && a!=6 && a!=7);
    var invierno = (b == 12 || b == 1 || b == 2);

    switch (true){
    
        case (noFinde && invierno) :  console.log("tienes un 25 % de DTO!!");
        break;
        default : console.log("hoy no estamos de rebajas")
    }


}