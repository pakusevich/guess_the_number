const secretNum = Math.ceil(Math.random() * 10);
console.log(secretNum);
let tries = 0;

function guessNum(num) {
  if (tries >= 5) return alert("Game over");

  if (num === secretNum) {
    alert("Ты выиграл");
    tries = 5;
    return;
  } else {
    alert("Неправильно, попробуй еще раз");
    tries++;
  }
  if (num > secretNum) {
    alert("Загаданное число меньше");
  } else {
    alert("Загаданное число больше");
  }
}
function restart() {
  location.reload();
}

window.onload = function () {
  span = document.getElementById("span");
  let count = 5;
  span.innerHTML = count;
  document.body.onclick = function (e) {
    e = e;
    let target = e.target;
    if (target.className == "btn" && count > 0) {
      count--;
      span.innerHTML = count;
    }
  };
};
