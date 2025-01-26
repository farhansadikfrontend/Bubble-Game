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
        pBubble.innerHTML = "<h1>Game Over😂</h1>";
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

// ball Animate
function ballAnimate() {
  // Animate Btn
  document.querySelectorAll(".bubble").forEach((ball) => {
    let posX = 0,
      posY = 0; // Track position for smooth animation
    let targetX = 0,
      targetY = 0; // Target position to move to

    // Update the target position on mousemove
    ball.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      let ballWidth = ball.clientWidth;
      let ballHeight = ball.clientHeight;
      targetX = x - ballWidth / 2;
      targetY = y - ballHeight / 2;
    });

    // Reset position on mouseout
    ball.addEventListener("mouseout", () => {
      targetX = 0;
      targetY = 0;
    });

    // Smoothly animate the movement using requestAnimationFrame
    function animate() {
      posX += (targetX - posX) * 0.1; // Interpolation for smoothness
      posY += (targetY - posY) * 0.1;

      ball.style.transform = `translateX(${posX}px) translateY(${posY}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  });
}

createBubble();
hitRandom();
timerCode();
bubbleClick();
ballAnimate();
