
var chart;
var inicio ='';
var final = '';
var urlcambiada= '';
var api_url ='https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-01-01&end=2018-10-10';



iniciototal();
function iniciototal(){
var ctx = document.getElementById('chart').getContext('2d');

    function init() {
      getData();
    }

        function getData() {
          var request = new XMLHttpRequest();
        
          request.open('GET', api_url, true);
        
          request.addEventListener('load', function() {
            createChart(JSON.parse(request.response).bpi);
          });
        
          request.send();
        }

function createChart(data) {
  var keys = Object.keys(data);
  var chart_data = [];

  for (var i = 0; i < keys.length; i++) {
    chart_data.push(data[keys[i]]);
  }

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: keys,
      datasets: [{
        label: 'PRECIO DEL BITCOIN (USD)',
        backgroundColor: 'rgba(244, 202, 65, 0.4)',
        borderColor: 'rgba(244, 190, 65, 0.8)',
        data: chart_data,
      }]
    }
  });

}
init();
}

    function validateDate(isoDate) {

    if (isNaN(Date.parse(isoDate))) {
        return false;
    } else {
        if (isoDate != (new Date(isoDate)).toISOString().substr(0,10)) {
            return false;
        }
    }
    return true;
}
    



// CAMBIAR INTERVALO DE FECHAS
function cambiarChart(){

   inicio = document.getElementById('txtFromDate').value;
    final = document.getElementById('txtToDate').value;
    
  if(validateDate(inicio)==true && validateDate(final)==true)  {

    
    
    urlcambiada = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=' + inicio + '&end=' + final;
    api_url = String(urlcambiada);
     console.log(api_url);
     document.getElementById('chart').innerHTML=''  // SIN ESTO LA LINEA DE DEBAJO NO FUNCIONA
chart.destroy(); 
iniciototal();
    }
else{
  document.getElementById('imprimir2').innerHTML='¡INTRODUCE UNA FECHA VÁLIDA!'
}
}

