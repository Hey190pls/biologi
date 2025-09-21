const questions = [
  {
    q: "Яка клітина має хлоропласти?",
    options: ["Рослинна", "Тваринна", "Грибна", "Бактеріальна"],
    answer: "Рослинна"
  },
  {
    q: "Яка клітина не має ядра?",
    options: ["Рослинна", "Тваринна", "Бактеріальна", "Грибна"],
    answer: "Бактеріальна"
  },
  {
    q: "Яка клітина має хітинову стінку?",
    options: ["Тваринна", "Грибна", "Рослинна", "Бактеріальна"],
    answer: "Грибна"
  },
  {
    q: "Яка органела відповідає за енергію клітини?",
    options: ["Мітохондрія", "Ядро", "Вакуоля", "Хлоропласт"],
    answer: "Мітохондрія"
  },
  {
    q: "Де знаходиться ДНК у прокаріотів?",
    options: ["Ядро", "Вакуоля", "Нуклеоїд", "Хлоропласт"],
    answer: "Нуклеоїд"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const scoreEl = document.getElementById("score");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startGame);

function startGame() {
  score = 0;
  current = 0;
  scoreEl.textContent = "Бали: " + score;
  startBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  if(current >= questions.length) {
    questionEl.textContent = "Гра завершена! Ваш рахунок: " + score;
    answerBtns.forEach(btn => btn.style.display = "none");
    startBtn.style.display = "inline-block";
    startBtn.textContent = "Грати ще раз";
    return;
  }

  const q = questions[current];
  questionEl.textContent = q.q;
  answerBtns.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.style.display = "inline-block";
    btn.onclick = () => checkAnswer(btn.textContent);
  });
}

function checkAnswer(selected) {
  if(selected === questions[current].answer) {
    score++;
  }
  scoreEl.textContent = "Бали: " + score;
  current++;
  showQuestion();
}
