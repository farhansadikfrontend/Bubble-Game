var pBubble = document.querySelector("#pBubble");
var num;
var score = 0;

function createBubble() {
  let bubbles = "";
  for (var i = 0; i <= 215; i++) {
    num = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${num}</div>`;
  }
  pBubble.innerHTML = bubbles;
}

function timerCode() {
  var timer = 60;
  var tt = document.querySelector("#timer");

  function time() {
    var interval = setInterval(function () {
      if (timer >= 0) {
        tt.textContent = timer;
        timer--;
      } else {
        clearInterval(interval);
        pBubble.innerHTML = "<h1>Game Is Over Bro😂</h1>";
      }
    }, 1000);
  }

  time();
}

function hitRandom() {
  var hit = document.querySelector("#hit");
  function hitt() {
    hit.innerHTML = num;
  }
  hitt();
}

function scoref() {
  score += 10;
  console.log((document.querySelector("#score").textContent = score));
}

function bubbleClick() {
  pBubble.addEventListener("click", function (dets) {
    var bubbleNum = Number(dets.target.textContent);
    if (bubbleNum === num) {
      createBubble();
      hitRandom();
      scoref();
    }
  });
}

createBubble();
hitRandom();
timerCode();
bubbleClick();
