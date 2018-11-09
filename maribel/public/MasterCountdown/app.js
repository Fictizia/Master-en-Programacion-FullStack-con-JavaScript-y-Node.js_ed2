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
