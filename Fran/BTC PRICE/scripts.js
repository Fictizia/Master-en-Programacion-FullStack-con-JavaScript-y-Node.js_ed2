
var eljason;
function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
            eljason = JSON.parse(xmlHttp.responseText);
         
       
     document.getElementById('precionow').innerHTML='UN BITCOIN SON: </br>' + eljason.bpi.EUR.rate + ' EUROS,</br> ' + eljason.bpi.USD.rate + ' DÓLARES,</br> ' + eljason.bpi.GBP.rate +' LIBRAS';;
            setTimeout(function(){
     


	repeticionAjax();
	
	}, 3000);
           
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();

}
function repeticionAjax(){
          setTimeout(function(){
peticionAjax("https://api.coindesk.com/v1/bpi/currentprice.json");
	
	}, 30000);
}

peticionAjax("https://api.coindesk.com/v1/bpi/currentprice.json");

//otro ajax para el calculo

function calculoAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
             eljason = JSON.parse(xmlHttp.responseText);
         
           
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();

}








function hacercambio(){

var primero = document.getElementById("primero");
var valorprimero = primero.options[primero.selectedIndex].value;
var textoprimero = primero.options[primero.selectedIndex].text;

var segundo = document.getElementById("segundo");
var valorsegundo = segundo.options[segundo.selectedIndex].value;
var textosegundo = segundo.options[segundo.selectedIndex].text;

var tercero = document.getElementById("tercero");
var valortercero = tercero.value;
var cambio = 0;
definecambio();
function definecambio(){
    calculoAjax("https://api.coindesk.com/v1/bpi/currentprice.json");
if(valorsegundo == 1){
    cambio = parseFloat(eljason.bpi.EUR.rate.replace(/,/g, ''));
}
else if(valorsegundo== 2){
    cambio = parseFloat(eljason.bpi.USD.rate.replace(/,/g, ''));
}
else if(valorsegundo== 3){
    cambio = parseFloat(eljason.bpi.GBP.rate.replace(/,/g, ''));
}

}
document.getElementById('imprimir').innerHTML= valortercero + ' BITCOINS SON ' + cambio * valortercero + ' ' + textosegundo; 
}











