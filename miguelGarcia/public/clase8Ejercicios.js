function lanzarMoneda(){

var resultado = Math.random();
resultado *= -100;
resultado = resultado.toFixed();
var par = (resultado%2==0);


return (par ? console.log("Salio cara"): console.log("Salio cruz"));

}


function dados(){
var dado1;
var dado2;
var suma10=0;

for ( var i= 0 ; i<100 ; i++ )
{
dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
if ((dado1 + dado2)==10){suma10++;} 
}

return console.log(suma10);
}


function fechas(dia,mes,año){
if (dia > 31 || mes > 12) {console.log("La fecha no es correcta");}    
    
if (dia < 32 && mes <13){var fecha = new Date(año,mes-1,dia);
}
return console.log(fecha);
}

function enTreinta ()
{

var hoy = new Date();


console.log(hoy + new Date(0,0,30));



}







