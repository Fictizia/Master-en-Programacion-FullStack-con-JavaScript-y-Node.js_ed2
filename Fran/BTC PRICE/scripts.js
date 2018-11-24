


//INICIAR---------------------------------------
 
document.getElementById('cargador').onloadend= initAll();

function initAll(){
document.addEventListener("DOMContentLoaded", function(event) {
    
//TRANSICIÓN DE INICIO--------------------------

   fin();
   fut();
   //FADEIN
function fin(){
var i = 0;
var el = document.getElementById("mainContent");
fadeInx(el,i);
}

function fadeInx(el,i) {

    i = i + 0.01;
    seto(el,i);
    if (i<1){setTimeout(function(){fadeInx(el,i);}, 30);}
}

function seto(el,i)
{
    el.style.opacity = i;

}
//FADEOUT
function fut(){
var i = 1;
var el = document.getElementById("spinner");
fadeou(el,i);
}

function fadeou(el,i) {

    i = i - 0.01;
    seto(el,i);
    if (i<1){setTimeout(function(){fadeou(el,i);}, 25);}
}

function seto(el,i)
{

    el.style.opacity = i;
    el.style.zIndex = -9999;

}
   
//DATE PICKER----------------------------

     $("#txtFromDate").datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: new Date(2015, 01, 01),
        maxDate: new Date(),
        numberOfMonths: 1,
        	currentText: "Hoy",
	monthNames: [ "enero","febrero","marzo","abril","mayo","junio",
	"julio","agosto","septiembre","octubre","noviembre","diciembre" ],
	monthNamesShort: [ "ene","feb","mar","abr","may","jun",
	"jul","ago","sep","oct","nov","dic" ],
	dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
	dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
	dayNamesMin: [ "D","L","M","X","J","V","S" ],
	firstDay: 1,
        onSelect: function(selected) {
          $("#txtToDate").datepicker("option","minDate", selected);
        }
    });
    $("#txtToDate").datepicker({ 
        dateFormat: 'yy-mm-dd',
        minDate: new Date(2015, 01, 01),
        maxDate: new Date(),
        numberOfMonths: 1,
        firstDay: 1,
        	currentText: "Hoy",
	monthNames: [ "enero","febrero","marzo","abril","mayo","junio",
	"julio","agosto","septiembre","octubre","noviembre","diciembre" ],
	monthNamesShort: [ "ene","feb","mar","abr","may","jun",
	"jul","ago","sep","oct","nov","dic" ],
	dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
	dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
	dayNamesMin: [ "D","L","M","X","J","V","S" ],
        onSelect: function(selected) {
           $("#txtFromDate").datepicker("option","maxDate", selected);
        }
    });  
});
}
//------------------------------------------------






//  PRECIO EN TIEMPO REAL
var eljason;
function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
            eljason = JSON.parse(xmlHttp.responseText);
         
       
     document.getElementById('precionow').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBTC/EUR:' + eljason.bpi.EUR.rate + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBTC/USD:' + eljason.bpi.USD.rate + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBTC/GPB:' + eljason.bpi.GBP.rate +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
            setTimeout(function(){
                repeticionAjax();
            }, 3000);
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();

}
function repeticionAjax(){
          setTimeout(function(){
peticionAjax("https://api.coindesk.com/v1/bpi/currentprice.json");
	}, 30000);
}
peticionAjax("https://api.coindesk.com/v1/bpi/currentprice.json");


// PRECIO
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







document.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    hacercambio();
  }
});


function hacercambio(){

var primero = document.getElementById("primero");
var textoprimero = primero.options[primero.selectedIndex].text;

var segundo = document.getElementById("segundo");
var valorsegundo = segundo.options[segundo.selectedIndex].value;
var textosegundo = segundo.options[segundo.selectedIndex].text;

var tercero = document.getElementById("tercero");
var valortercero = tercero.value;

var cambio = 0;

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
        
     function cambiofinal(){
          if(cambiado=='inactivo'){          
                      if(valortercero == 1){
                                         document.getElementById('imprimir').innerHTML= valortercero + ' BITCOIN SON ' + cambio * valortercero + ' ' + textosegundo;   
                                        }
                                        else{
                    document.getElementById('imprimir').innerHTML= valortercero + ' BITCOINS SON ' + cambio * valortercero + ' ' + textosegundo;
                    }
          }
          else if (cambiado =='activo'){
                   
                    document.getElementById('imprimir').innerHTML= valortercero + ' ' + textosegundo + ' SON ' + valortercero/cambio + ' ' + textoprimero;
                    
              
          }
        }
        
        
 if(valortercero > 0 && valortercero < 999999999999 /*&& typeof valortercero == 'number'*/ ){
    definecambio();
    cambiofinal();
    }else{

    document.getElementById('imprimir').innerHTML= 'INTRODUCE UN VALOR VÁLIDO';
    }
}


var textocambiado=`


 <div id="conversor">
<input type="number" id="tercero" name="tercero" min="0" max="9999999" step="any">
 <select id="segundo" name="segundo">
   <option value="1">EUROS</option> 
   <option value="2">DÓLARES</option> 
   <option value="3">LIBRAS</option>
 
</select>
<p class='a'> A </p> 
<select id="primero" name="primero">
    <option value="1">BTC</option> 
</select>
 
  
      <button id='cambiar' onclick='hacercambio()'>CAMBIAR </button>
      </div>
`;




var textonormal=`
  <div id="conversor">
<input type="number" id="tercero" name="tercero" min="0" max="9999999" step="any">
<select id="primero" name="primero">
    <option value="1">BTC</option> 
</select>
<p class='a'> A </p>  <select id="segundo" name="segundo">
   <option value="1">EUROS</option> 
   <option value="2">DÓLARES</option> 
   <option value="3">LIBRAS</option>
 
</select>

 
  
      <button id='cambiar' onclick='hacercambio()'>CAMBIAR </button>
      </div>
`;


var cambiado ='inactivo';

function switcher(){
    
   
    if(cambiado =='inactivo'){
        document.getElementById('conversor').innerHTML=textocambiado;
activar();

        
}
else if (cambiado =='activo') { 
         document.getElementById('conversor').innerHTML=textonormal;
desactivar();

}
}


function activar(){
     cambiado = 'activo';
     
}


function desactivar(){
     cambiado = 'inactivo';
     
}























 
