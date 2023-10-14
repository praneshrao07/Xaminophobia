function updateTimer() {
  var now = new Date();
  var targetDate = new Date("2024-05-05T00:00:00Z");
  var timeDifference = targetDate - now;

  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days +
    " days : " +
    hours +
    " hrs : " +
    minutes +
    " mins : " +
    seconds +
    " secs";
}

setInterval(updateTimer, 1000);
