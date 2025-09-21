const quizData = [
    {
        type: "plant",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Plant_cell_structure.svg"
    },
    {
        type: "animal",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Animal_cell_structure_en.svg"
    },
    {
        type: "fungi",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Fungal_cell_structure.svg"
    },
    {
        type: "bacteria",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Prokaryote_cell_diagram.svg"
    }
];

let current = 0;

function loadQuestion() {
    const q = quizData[Math.floor(Math.random() * quizData.length)];
    document.getElementById("quizImage").src = q.img;
    document.getElementById("quizImage").dataset.answer = q.type;
    document.getElementById("result").textContent = "";
}

function checkAnswer(answer) {
    const correct = document.getElementById("quizImage").dataset.answer;
    if (answer === correct) {
        document.getElementById("result").textContent = "✅ Молодець! Правильно!";
        document.getElementById("result").style.color = "green";
        setTimeout(loadQuestion, 2000);
    } else {
        document.getElementById("result").textContent = "❌ Неправильно, спробуй ще!";
        document.getElementById("result").style.color = "red";
    }
}

window.onload = loadQuestion;
