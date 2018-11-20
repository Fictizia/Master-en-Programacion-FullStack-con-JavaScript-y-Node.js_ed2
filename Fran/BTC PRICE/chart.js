var api_url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-01-01&end=2018-11-19';

var ctx = document.getElementById('chart').getContext('2d');

init();

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

  var chart = new Chart(ctx, {
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