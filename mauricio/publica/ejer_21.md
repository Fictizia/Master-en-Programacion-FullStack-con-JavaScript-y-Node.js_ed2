```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
    body {
      max-width: 1200px;
      margin: auto;
    }
    main {
      display: flex;
    }
    article {
      flex: 1 0 50%;
    }
    article .details {
      display: flex;
    }
    article .details div {
      flex: 1 0 50%;
    }
    article .img-camera {

    }
    footer ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
    }
    .card-forecast {
      display: flex;
      align-items: center;
    }
    .card-forecast img {

    }
    .details-img-day img {
      width: 100%;
      max-width: 200px;
    }
  </style>
</head>
<body>

  <h1>Buenos días, Madrid</h1>

  <main>
    <article>

    </article>

    <article><!-- CONTAMINACIÖN --></article>

  </main>

  <footer>
    <ul>
    </ul>
  </footer>

  <script src="APIs.js"></script>
  <script>
    (function(){

      const API_KEY = config.openweathermap;

      const article =  document.querySelector('article');
      const footer =  document.querySelector('footer');

      function getForecastWeather (json) {

        const today = new Date();
        let day1 = new Date(today.setDate(today.getDate() + 1)).toLocaleDateString(('fr-CA'));
        day1 = `${day1} 09:00:00`;
        let day2 = new Date(today.setDate(today.getDate() + 1)).toLocaleDateString(('fr-CA'));
        day2 = `${day2} 09:00:00`;
        let day3 = new Date(today.setDate(today.getDate() + 1)).toLocaleDateString(('fr-CA'));
        day3 = `${day3} 09:00:00`;
        let day4 = new Date(today.setDate(today.getDate() + 1)).toLocaleDateString(('fr-CA'));
        day4 = `${day4} 09:00:00`;

        const filtered = json.list.filter(item => {
          return item.dt_txt === day1 || item.dt_txt === day2 || item.dt_txt === day3 || item.dt_txt === day4;
        });

        console.log(filtered);

        if (filtered && filtered.length) {
          const ul = document.querySelector('footer ul');

          filtered.forEach(item => {
            const li = document.createElement('LI');
            const pDay = document.createElement('P');
            const div = document.createElement('DIV');
            const img = document.createElement('IMG');
            const pDetails = document.createElement('P');

            div.classList.add('card-forecast');
            pDay.textContent = new Date(item.dt_txt).toLocaleString('es-ES', {weekday: 'long'});
            img.setAttribute('src', `http://openweathermap.org/img/w/${item.weather[0].icon}.png`);
            pDetails.innerHTML = `
              ${item.weather[0].description} <br>
              Temp ${item.main.temp} <br>
              Min ${item.main.temp_min}ºC Max${item.main.temp_max}ºC <br>
              H ${item.main.humidity}-${item.main.pressure} psi
            `;

            li.appendChild(pDay);
            li.appendChild(div);
            div.appendChild(img);
            div.appendChild(pDetails);
            ul.appendChild(li);
          });
        }

      }

      function fillCurrentWeather (json) {
        const divDetails = document.createElement('DIV');
        divDetails.classList.add('details');
        const divImgDay = document.createElement('DIV');
        divImgDay.classList.add('details-img-day');
        const divInfoDay = document.createElement('DIV');
        divInfoDay.classList.add('details-info-day');

        const img = document.createElement('IMG');
        img.setAttribute('src', `http://openweathermap.org/img/w/${json.weather[0].icon}.png`);

        divInfoDay.appendChild(document.createElement('P'))
          .appendChild(document.createTextNode(json.weather[0].description));
        divInfoDay.appendChild(document.createElement('P'))
          .appendChild(document.createTextNode(`${json.main.temp} ºC`));
        divInfoDay.appendChild(document.createElement('P'))
          .appendChild(document.createTextNode(`Min: ${json.main.temp_min}ºC | Max: ${json.main.temp_max}ºC`));
        divInfoDay.appendChild(document.createElement('P'))
          .appendChild(document.createTextNode(`Hum: ${json.main.humidity}% | Pres: ${json.main.pressure}psi`));
        divInfoDay.appendChild(document.createElement('P'))
          .appendChild(document.createTextNode(`Viento ${json.wind.deg}º | ${json.wind.speed}km/h`));

        divDetails.appendChild(divImgDay);
        divImgDay.appendChild(img);
        divDetails.appendChild(divInfoDay);
        article.appendChild(divDetails);
      }

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=Madrid,Spain&APPID=${API_KEY}&units=metric&lang=es`)
        .then(function (data) {
          return data.json()
        })
        .then(function (json) {

          // console.log(json);

          fillCurrentWeather(json);

        })
        .catch(function (error) {
          console.log(error);
        });

      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Madrid,Spain&APPID=${API_KEY}&units=metric&lang=es`)
        .then(function (data) {
          return data.json()
        })
        .then(function (json) {

          // console.log(json);

          getForecastWeather(json);

        })
        .catch(function (error) {
          console.log(error);
        });

    })()
  </script>
</body>
</html>
```


