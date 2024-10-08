const trailer = document.getElementById("trailer");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function triggerBtn() {
  if (trailer.paused) {
    trailer.play();
    btn1.innerHTML = "PAUSE";
  } else {
    trailer.pause();
    btn1.innerHTML = "PLAY";
  }
}

let count = 0;

function toggleOn() {
  if (trailer.play) {
    btn2.click();
    trailer.muted = false;
  }
}

function toggleOff() {
  if (trailer.play) {
    btn3.click();
    trailer.muted = true;
  }
}
