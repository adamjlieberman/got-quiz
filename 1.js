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
    {
        question: "What is your ideal place to live?",
        answers: [
            { text: "A snowy fortress in the North.", house: "Stark" },
            { text: "A grand castle with dragons.", house: "Targaryen" },
            { text: "A lush and fertile garden.", house: "Tyrell" },
            { text: "A rich and opulent city.", house: "Lannister" }
        ]
    },
    {
        question: "How do you view loyalty?",
        answers: [
            { text: "It is earned through honorable actions.", house: "Stark" },
            { text: "It is commanded through power.", house: "Targaryen" },
            { text: "It is cultivated through kindness.", house: "Tyrell" },
            { text: "It is secured through wealth.", house: "Lannister" }
        ]
    },
    {
        question: "What drives you the most?",
        answers: [
            { text: "Honor and duty.", house: "Stark" },
            { text: "Power and conquest.", house: "Targaryen" },
            { text: "Love and beauty.", house: "Tyrell" },
            { text: "Ambition and wealth.", house: "Lannister" }
        ]
    },
    {
        question: "Which animal do you resonate with the most?",
        answers: [
            { text: "Direwolf.", house: "Stark" },
            { text: "Dragon.", house: "Targaryen" },
            { text: "Rose.", house: "Tyrell" },
            { text: "Lion.", house: "Lannister" }
        ]
    },
    {
        question: "What is your approach to leadership?",
        answers: [
            { text: "Lead by example.", house: "Stark" },
            { text: "Rule with an iron fist.", house: "Targaryen" },
            { text: "Inspire through kindness.", house: "Tyrell" },
            { text: "Command through fear and respect.", house: "Lannister" }
        ]
    },
    {
        question: "How do you handle defeat?",
        answers: [
            { text: "Accept it with dignity.", house: "Stark" },
            { text: "Rage and seek revenge.", house: "Targaryen" },
            { text: "Learn and adapt.", house: "Tyrell" },
            { text: "Plot your comeback.", house: "Lannister" }
        ]
    },
    {
        question: "What do you value most in your allies?",
        answers: [
            { text: "Loyalty and trust.", house: "Stark" },
            { text: "Strength and power.", house: "Targaryen" },
            { text: "Compassion and understanding.", house: "Tyrell" },
            { text: "Cunning and resourcefulness.", house: "Lannister" }
        ]
    },
    {
        question: "What is your greatest fear?",
        answers: [
            { text: "Betraying my principles.", house: "Stark" },
            { text: "Losing control.", house: "Targaryen" },
            { text: "Being alone.", house: "Tyrell" },
            { text: "Being powerless.", house: "Lannister" }
        ]
    }
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = questions[index];
    questionContainer.innerHTML = `
        <div class="question">
            <p>${question.question}</p>
            ${question.answers.map((a, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${a.house}" />
                    ${a.text}
                </label>
            `).join('')}
        </div>
    `;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
    toggleNavigationButtons();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
    toggleNavigationButtons();
}

function toggleNavigationButtons() {
    document.getElementById('prev-button').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById('next-button').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit-button').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
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

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentQuestionIndex);
    toggleNavigationButtons();
});
