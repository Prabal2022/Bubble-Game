function makeBubble() {
  let clutter = "";

  for (var i = 1; i <= 90; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

var score = 0;
var timer = 60;
var hitrn = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// jis pe click karoge wo element par eve trias ehoga aur event listener naa milne ar enve element ke parent par listenen dhundhega , wahah bhi naa milne par event parent ke parent ke parent me dhudega

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    makeBubble();
    getNewhit();
  }
  // alert("chal raha hai");
});

function getNewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}


makeBubble();

runTimer();

