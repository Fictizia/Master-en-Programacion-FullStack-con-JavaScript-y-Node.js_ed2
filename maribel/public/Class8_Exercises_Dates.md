## Dates

3. Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
    - El usuario introduce tres números (día, mes, año) usando una función.
    - Validar la fecha. En caso de error incluir un mensaje informativo.
    - Después de validar, devolvemos la fecha en formato DD/MM/AAAA
    - Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)

```javascript
function validateDate(day, month, year) {
	var isDateValid = false;
	var minYear = 1000;
	var maxYear = 3000;
	
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    monthLength[1] = 29;
  }
  
  // Check the range of the day
			isDateValid = day > 0 && day <= monthLength[month - 1];

  // Check the ranges of month and year
  if (year < minYear || year > maxYear || month == 0 || month > 12) {
    isDateValid = false;
  }
  
  if (isDateValid) {
    var firstFormat = day + "/" +  month + "/" + year;
    var secondFormat = day + " of " + monthNames[month - 1] + " of " + year;
    console.log("Date is valid: " + firstFormat + " or " + secondFormat);
  } else {
    console.log("Date is invalid");
  }
}
```

4.  ¿Que fecha será dentro de 30 días?
```javascript
function addThirtyDays() {
  var todayDate = new Date();
  
  todayDate.setDate(todayDate.getDate() + 30);
  console.log(todayDate.toLocaleString());
}
```
5 - ¿Cuantas horas han pasado desde que emepezó este master? y... ¿en días?
```javascript
function getTimeElapsed() {
  var startDate = new Date(2018, 9, 1);
  var endDate = new Date();
  var elapsedTime = endDate - startDate;
  
  var elapsedHours = (elapsedTime / (1000 * 60 * 60)).toFixed(0);
  var elapsedDays  = (elapsedTime / (1000 * 60 * 60 * 24)).toFixed(0); 
  
  console.log(elapsedHours + " hours since the master started");
  console.log(elapsedDays + " days since the master started");
}
```
6 - ¿Cuantos milisengundos quedan para terminar el master? y... ¿en horas o días?
```javascript
function getTimeRemaining() {
  var startDate = new Date();
  var endDate = new Date(2019, 6, 1);
  var elapsedTime = endDate - startDate;
  
  var elapsedHours = (elapsedTime / (1000 * 60 * 60)).toFixed(0);
  var elapsedDays  = (elapsedTime / (1000 * 60 * 60 * 24)).toFixed(0); 
  
  console.log(elapsedHours + " hours for the master to end");
  console.log(elapsedDays + " days for the master to end");
}
```
7 - ¿Que fecha será dentro de un año y 10 horas más?
```javascript
function addAYearAndAnHour() {
  var todayDate = new Date();
  var millisecondsInAYear = 1 * 365 * 24 * 60 * 60 * 1000;
  var millisecondsInAnHour = 1 * 60 * 60 * 1000;
  todayDate.setTime(todayDate.getTime() + millisecondsInAYear + millisecondsInAnHour);
  console.log(todayDate.toLocaleString());
}
```

8. Imprimir por consola la fecha completa (formato texto) en koreano y japones.
```javascript
function formatDateToLocale() {
  var todayDate = new Date();
  var options = { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  };
  
  console.log("Korean: " + todayDate.toLocaleString("kr-KR", options));
  console.log("Japanese: " + todayDate.toLocaleString("jp-JP", options));
}
```
