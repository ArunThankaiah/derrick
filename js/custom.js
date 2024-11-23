const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

// Set the target date to 30th November 2024 at 12:00 PM
const targetDate = new Date('November 30, 2024 12:00:00').getTime();

function countDown() {
  const currentDate = new Date().getTime();
  const programDate = targetDate - currentDate;

  const d = Math.floor(programDate / (1000 * 60 * 60 * 24));  // Calculate days
  const h = Math.floor((programDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // Calculate hours
  const m = Math.floor((programDate % (1000 * 60 * 60)) / (1000 * 60));  // Calculate minutes
  const s = Math.floor((programDate % (1000 * 60)) / 1000);  // Calculate seconds

  // Add leading zero if less than 10
  day.innerHTML = d < 10 ? "0" + d : d;
  hour.innerHTML = h < 10 ? "0" + h : h;
  min.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;

  // If the countdown is over
  if (programDate < 0) {
    day.innerHTML = "00";
    hour.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    clearInterval(countDownInterval);  // Stop the countdown
  }
}

// Update the countdown every second
const countDownInterval = setInterval(countDown, 1000);

// Initial call to display the countdown immediately
countDown();

