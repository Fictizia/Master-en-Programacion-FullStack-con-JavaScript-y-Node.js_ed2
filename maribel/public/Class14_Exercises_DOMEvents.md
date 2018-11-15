## Eventos del DOM

1. Realiza una pagina web que muestre la cuenta atrás para terminar el master en días, horas, minutos y segundos. Objetivos Adicionales:
    - Además debería de seguir actualizando la cuenta atrás de manera dinámica.
    - Los datos horarios siempre deben mostrarse con dos dígitos, añadiendo un cero a la izquierda cuando sea necesario.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Master Countdown</title>
         <link href="https://fonts.googleapis.com/css?family=KoHo" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="app.css">
    </head>
    <body>
        <div class="container">
            <h1 id="main-title">Master Countdown</h1>
            <p id="count-end-msg" class="hidden">Master ended!
                <span role="img" aria-label="party">&#x1F389;</span>
            </p>
            <ul id="timer">
                <li>
                    <p id="days">0</p>
                    <p>days</p>
                </li>
                <li>
                    <p id="hours">0</p>
                    <p>hours</p>
                </li>
                <li>
                    <p id="minutes">0</p>
                    <p>minutes</p>
                </li>
                <li>
                    <p id="seconds">0</p>
                    <p>seconds</p>
                </li>
            </ul>
        </div>
        <script src="app.js"></script>
    </body>
</html>

```

```css
/*
Background animation by Manuel Pinto:
https://codepen.io/P1N2O/pen/pyBNzX
*/

body {
	color: white;
	background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
	animation: Gradient 15s ease infinite;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "KoHo", sans-serif;
    font-size: 25px;
}

#main-title {
    margin: 0;
}

#count-end-msg {
    font-size: 28px;
}

#timer {
    margin: 0;
    padding: 0;
}

li {
    display: inline-block;
    list-style-type: none;
    margin: 0 15px 0 15px;
}

li p[id] {
    font-size: 50px;
    font-weight: bold;
}

li p {
    text-transform: uppercase;
}

.hidden {
    display: none;
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
```

```javascript
// Equivalences in millieseconds
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

var endDate = new Date(2019, 6, 1);
var timer = setInterval(getTimeRemaining, second);

function getTimeRemaining()
{
    var startDate = new Date();
    var remainingTime = endDate - startDate;

    if(remainingTime < 0)
    {
      clearInterval(timer);
      document.getElementById("timer").classList.add("hidden");
      document.getElementById("count-end-msg").classList.remove("hidden");
    }
    else
    {
        var remainingDays  = Math.floor(remainingTime / day);
        var remainingHours = Math.floor((remainingTime % day) / hour);
        var remainingMinutes  = Math.floor((remainingTime % hour) / minute);
        var remainingSeconds  = Math.floor((remainingTime % minute) / second);

        document.getElementById("days").textContent = remainingDays;
        document.getElementById("hours").textContent = remainingHours;
        document.getElementById("minutes").textContent = remainingMinutes;
        document.getElementById("seconds").textContent = remainingSeconds;
    }
}
```
