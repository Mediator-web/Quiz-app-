// ===== Quiz Questions Array =====
const questions = [
    {
      question: "What does HTML stand for?",
      choices: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "None of these"],
      answer: 0
    },
    {
      question: "Which language is used for styling web pages?",
      choices: ["HTML", "jQuery", "CSS", "XML"],
      answer: 2
    },
    {
      question: "Which is not a JavaScript Framework?",
      choices: ["React", "Vue", "Angular", "Django"],
      answer: 3
    
    },
     {
    question: "Which language is primarily used for styling web pages?",
    choices: ["HTML", "jQuery", "CSS", "XML"],
    answer: 2
    },   
  {
    question: "Which of these is a NoSQL database?",
    choices: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    answer: 1
  },
  {
    question: "Which company developed TypeScript?",
    choices: ["Facebook", "Google", "Microsoft", "Amazon"],
    answer: 2
  },
  {
    question: "What does API stand for?",
    choices: ["Application Programming Interface", "Advanced Programming Interface", "Application Protocol Interface", "Applied Program Interface"],
    answer: 0
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    choices: ["<!-- -->", "//", "##", "**"],
    answer: 1
  },
  {
    question: "Which of the following is used to execute JavaScript code in the browser?",
    choices: ["Node.js", "React", "Console", "Browser Engine"],
    answer: 2
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    choices: ["var", "const", "let", "define"],
    answer: 1
  },
  {
    question: "Which is a version control system?",
    choices: ["Docker", "Git", "NPM", "Webpack"],
    answer: 1
  },
  {
    question: "What does CSS stand for?",
    choices: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    answer: 2
  },
  {
    question: "Which HTML tag is used to link JavaScript to HTML?",
    choices: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: 1
  },
   
   {
    question: "What should you do before a job interview?",
    choices: ["Sleep late", "Skip breakfast", "Research the company", "Wear casual clothes"],
    answer: 2
  },
   {
    question: "Which nutrient is most important for building muscle?",
    choices: ["Carbohydrates", "Protein", "Fats", "Vitamins"],
    answer: 1
  },



    
  
  ];
  
  // ===== Global Variables =====
  let currentQuestion = 0;
  let score = 0;
  let timer;
  let timeLeft = 10;
  
  // ===== DOM Elements =====
  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const timerEl = document.getElementById('timer');
  const progressBar = document.getElementById('progress-bar');
  const quizBox = document.getElementById('quiz-box');
  const resultBox = document.getElementById('result-box');
  const scoreEl = document.getElementById('score');
  
  // ===== Initialize Quiz =====
  function startQuiz() {
    loadQuestion();
    startTimer();
    updateProgress();
  }
  
  // ===== Load Current Question and Options =====
  function loadQuestion() {
    const current = questions[currentQuestion];
    questionEl.textContent = current.question;
    choicesEl.innerHTML = '';
  
    // Create choice buttons
    current.choices.forEach((choice, index) => {
      const div = document.createElement('div');
      div.className = 'choice';
      div.textContent = choice;
      div.onclick = () => selectAnswer(index); // handle answer selection
      choicesEl.appendChild(div);
    });
  }
  
  // ===== Handle Answer Selection =====
  function selectAnswer(index) {
    clearInterval(timer); // stop timer when an answer is selected
    const correct = questions[currentQuestion].answer;
  
    if (index === correct) {
      score++; // increase score if correct
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      // Load next question
      timeLeft = 10;
      loadQuestion();
      startTimer();
      updateProgress();
    } else {
      showResults(); // End quiz if all questions are done
    }
  }
  
  // ===== Start Countdown Timer =====
  function startTimer() {
    timerEl.textContent = timeLeft;
  
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        selectAnswer(-1); // auto-skip if time runs out
      }
    }, 1000);
  }
  
  // ===== Update Progress Bar =====
  function updateProgress() {
    const percent = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = `${percent}%`;
  }
  
  // ===== Display Final Score =====
  function showResults() {
    quizBox.classList.add('hidden');
    resultBox.classList.remove('hidden');
    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  // ===== Start the Quiz on Page Load =====
  startQuiz();
  
