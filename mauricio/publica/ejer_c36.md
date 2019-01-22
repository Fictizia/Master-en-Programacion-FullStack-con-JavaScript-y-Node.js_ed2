#### 1 - Sacar una grafica de evolucion de temperatura y humedad basado en la prevision del tiempo usando la API de Open Weather Map

`ìndex.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gráfica API de Open Weather Map</title>
</head>
<body>
    <canvas id="chartOWM" width="400" height="400"></canvas>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.js"></script>
    <script src="js/main.js"></script>
</body>
</html>

```

`main.js`

```javascript

(function () {
  const canvas = document.getElementById("chartOWM");

  const API = `######`;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=${API}&units=metric`;

  function getData(arrayData) {
    return arrayData.filter(item => item.dt_txt.includes('12:00:00'));
  }

  function setDays(arrayDates) {
    let days = [];
    arrayDates.forEach(item => {
      return days.push(new Date(+item.dt * 1000).toLocaleDateString('es-ES', {
        weekday: 'long'
      }));
    });
    return days;
  }

  function setTemperature(arrayData) {
    return arrayData.map(item => Math.round(item.main.temp));
  }

  function setHumidity() {

  }

  async function callApi(URL) {
    try {
      const json = await fetch(URL);
      const data = await json.json();
      const arrayData = getData(data.list);
      const temp = setTemperature(arrayData);
      const days = setDays(arrayData);
      generateChart(days, temp);
    } catch (error) {
      console.log(error);
    }
  }

  callApi(URL);

  function generateChart(days, temp) {
    const chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [{
          label: 'º centígrados',
          data: temp,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

})();

```
