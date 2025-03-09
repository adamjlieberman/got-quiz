const questions = [
    {
        question: "In the heat of battle, what is your first instinct?",
        answers: [
            { text: "Charge forward and lead the attack.", house: "Stark" },
            { text: "Strategize and find a tactical advantage.", house: "Targaryen" },
            { text: "Protect your allies and ensure their safety.", house: "Tyrell" },
            { text: "Seek out the enemy's leader and confront them.", house: "Lannister" }
        ]
    },
    {
        question: "How do you handle betrayal?",
        answers: [
            { text: "Seek revenge and justice.", house: "Lannister" },
            { text: "Forgive but never forget.", house: "Stark" },
            { text: "Use it to your advantage.", house: "Targaryen" },
            { text: "Move on and focus on your goals.", house: "Tyrell" }
        ]
    },
    // add 13 more questions here...
];

function loadQuestions() {
    const questionsContainer = document.getElementById('questions');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            ${q.answers.map((a, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${a.house}" />
                    ${a.text}
                </label>
            `).join('')}
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const result = calculateResult(answers);
    displayResult(result);
}

function calculateResult(answers) {
    const houseCounts = { Stark: 0, Targaryen: 0, Tyrell: 0, Lannister: 0 };
    answers.forEach(answer => {
        houseCounts[answer.value]++;
    });
    return Object.keys(houseCounts).reduce((a, b) => houseCounts[a] > houseCounts[b] ? a : b);
}

function displayResult(house) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Your Game of Thrones House is: ${house}</h2>`;
}

document.addEventListener('DOMContentLoaded', loadQuestions);