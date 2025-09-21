let score = 0;
let time = 30;
let gameInterval = null;
let organelles = [];

const organelleNames = ["ядро", "хлоропласт", "мітохондрія", "лізосома", "вакуоля"];
const badOrganelles = ["рибосома", "ендоплазматичний ретикулум", "цитоплазма"];

function createOrganel(name, isCorrect) {
  const div = document.createElement("div");
  div.className = "organel";
  div.textContent = name;
  div.dataset.correct = isCorrect;
  div.style.top = Math.random() * 350 + "px";
  div.style.left = Math.random() * 800 + "px";

  div.onclick = () => {
    if(time <= 0) return;
    if(div.dataset.correct === "true") {
      score++;
      div.style.background = "#4db6ac";
    } else {
      score--;
      div.style.background = "#e57373";
    }
    updateScore();
  };

  document.getElementById("game-board").appendChild(div);
  organelles.push({el: div, dx: (Math.random()-0.5)*3, dy: (Math.random()-0.5)*3});
}

function updateScore() {
  document.getElementById("score").textContent = "Бали: " + score;
}

function updateTimer() {
  document.getElementById("timer").textContent = "Час: " + time;
}

function startGame() {
  resetGame();
  // створення органел
  for(let i=0; i<5; i++) createOrganel(organelleNames[i], true);
  for(let i=0; i<3; i++) createOrganel(badOrganelles[i], false);

  gameInterval = setInterval(() => {
    time--;
    updateTimer();
    moveOrganelles();
    if(time <= 0) {
      clearInterval(gameInterval);
      alert("Час вичерпано! Ваш рахунок: " + score);
    }
  }, 1000);
}

function moveOrganelles() {
  organelles.forEach(obj => {
    let el = obj.el;
    let top = parseFloat(el.style.top);
    let left = parseFloat(el.style.left);
    top += obj.dy;
    left += obj.dx;
    if(top < 0 || top > 350) obj.dy *= -1;
    if(left < 0 || left > 800) obj.dx *= -1;
    el.style.top = top + "px";
    el.style.left = left + "px";
  });
}

function resetGame() {
  if(gameInterval) clearInterval(gameInterval);
  time = 30;
  score = 0;
  updateScore();
  updateTimer();
  organelles.forEach(obj => obj.el.remove());
  organelles = [];
}
