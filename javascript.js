var pBubble = document.querySelector("#pBubble");

for (var i = 0; i <= 215; i++) {
  var num = Math.floor(Math.random() * 10);

  pBubble.innerHTML += `<div class="bubble">${num}</div>`;
}
