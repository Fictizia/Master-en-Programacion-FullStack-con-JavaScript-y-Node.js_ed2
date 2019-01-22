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
    <script src="js/main.js"></script>      
</body>
</html>

```

`main.js`

```javascript

(function() {
    const API = `######`;
    const URL = `https://samples.openweathermap.org/data/2.5/forecast?q=Madrid,ES&appid=${API}`;
    
    const canvas = document.getElementById("chartOWM");
    
    var canvas = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
                    beginAtZero:true
                }
            }]
        }
    }
});
    
})()

```

