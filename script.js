const questions = [
  { q: "Яка клітина має хлоропласти?", a: "рослинна" },
  { q: "Яка клітина не має ядра?", a: "бактеріальна" },
  { q: "Яка клітина має хітинову стінку?", a: "грибів" },
  { q: "Яка клітина не має клітинної стінки?", a: "тваринна" }
];
let current = null;

function newQuestion() {
  const rand = Math.floor(Math.random() * questions.length);
  current = questions[rand];
  document.getElementById("question").textContent = current.q;
  document.getElementById("result").textContent = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  if (!current) {
    document.getElementById("result").textContent = "Спочатку натисни 'Нове питання'.";
    return;
  }
  if (userAnswer === current.a) {
    document.getElementById("result").textContent = "✅ Правильно!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = "❌ Неправильно. Правильна відповідь: " + current.a;
    document.getElementById("result").style.color = "red";
  }
}
