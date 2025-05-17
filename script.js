//your JS code here. If required.
function updateTimer() {
  const now = new Date();
  const timerElement = document.getElementById("timer");
  timerElement.textContent = now.toLocaleString();
}

// Initial call to set the timer immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
