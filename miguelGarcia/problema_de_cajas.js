function restarCajas(value,index){return --value;}
function cajasVacias(value){return value > 0}
function queueTime(customers, n) {
var contador = 0 ;
var cajas = [];
var cajasACero = [1]
cajas.length = n;

while (customers.length > 0 && cajasACero.length != 0 ){
  cajasACero = cajas.filter(cajasVacias);
  for (i = 0; i < n ; i++){

    if (cajas[i] === 0 || cajas[i] === undefined) { 
    cajas[i] = customers.shift();}   
  }

cajas = cajas.map(restarCajas);
contador++;
}
return contador;
}