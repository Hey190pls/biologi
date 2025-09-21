let score = 0;

function updateScore() {
  document.getElementById("score").textContent = "Бали: " + score;
}

document.querySelectorAll(".organel").forEach(item => {
  item.addEventListener("click", () => {
    // правильні органели: ядро, хлоропласт, мітохондрія, лізосома, вакуоля
    const correct = ["ядро","хлоропласт","мітохондрія","лізосома","вакуоля"];
    if(correct.includes(item.dataset.name)) {
      score++;
      item.style.background = "#4db6ac";
    } else {
      score--;
      item.style.background = "#e57373";
    }
    updateScore();
  });
});

function resetGame() {
  score = 0;
  updateScore();
  document.querySelectorAll(".organel").forEach(item => {
    item
