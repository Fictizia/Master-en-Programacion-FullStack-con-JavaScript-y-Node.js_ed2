let OpenWeatherMap = (function(){
  const canvas = document.getElementById("chartOWM");

  const API = ``;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=${API}&units=metric`;

  async function callApi(URL) {
    try {
      const json = await fetch(URL);
      const data = await json.json();
      const arrayData = getData(data.list);
      const temp = setTemperature(arrayData);
      const days = setDays(arrayData);
      const humidity = setHumidity(arrayData);
      generateChart(days, temp, humidity);
    } catch (error) {
      console.log(error);
    }
  }

  function getData(arrayData) {
    return arrayData.filter(item => item.dt_txt.includes('12:00:00'));
  }

  function setTemperature(arrayData) {
    return arrayData.map(item => Math.round(item.main.temp));
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

  function setHumidity(arrayData) {
    let humidity = [];
    arrayData.forEach(item => {
      humidity.push(item.main.humidity);
    });
    return humidity;
  }

  function generateChart(days, temp, humidity) {
    const chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [
          {
            label: 'º centígrados',
            data: temp,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'º humedad',
            data: humidity,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)'
            ],
            borderWidth: 1,
            type: 'line'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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

  return {
    init: () => {
      callApi(URL);
    }
  }


})();

OpenWeatherMap.init();
