// Get elements from HTML
const questionEl = document.getElementById("result1");
const questionE2 = document.getElementById("result2");
const questionE3 = document.getElementById("result3");
const choicesEl = document.getElementById("choices");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next");
const startQuizBtn = document.getElementById("btnStartQuiz");
const quiz = document.getElementById("quiz-div");
var infoContainer = document.getElementById("info-container");
var quizContainer = document.getElementById("quiz-container");
const qNo =document.getElementById('question-num');
const quitBtn = document.getElementById('quit');
// const restartBtn = document.getElementById('restart');


//exitQuiz button clicked
quitBtn.onclick = ()=>{
  infoContainer.classList.remove("activeInfo"); //hide info box
}


// Initialize variables
let currentQuestionIndex = 0;
let timeLeft = 6;
let timerInterval;
let score = 0;

// Display the current question and choices
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-num").innerHTML = (currentQuestionIndex + 1) + " of 10 Questions";
  questionEl.innerText = currentQuestion.question;
  choicesEl.innerHTML = "";
  quitBtn.style.display = "none";
  // restartBtn.style.display = "none";
  currentQuestion.choices.forEach((choice) => {
    const choiceBtn = document.createElement("button");
    choiceBtn.innerText = choice;
    choicesEl.appendChild(choiceBtn);
    choiceBtn.addEventListener("click", handleChoice);
  });
}

// Handle the user's choice
function handleChoice(event) {
  clearInterval(timerInterval);
  const userChoice = event.target.innerText;
  const currentQuestion = questions[currentQuestionIndex];
  if (userChoice === currentQuestion.answer) {
    event.target.style.backgroundColor = "#66ff66";
    score++;
  } else {
    event.target.style.backgroundColor = "#ff6666";
  }
  disableChoices();
  nextBtn.style.display = "block";

  if (userChoice === "" && timeLeft === 0) {
    goToNextQuestion();
  }
}

// Disable all choice buttons
function disableChoices() {
  const choiceBtns = document.querySelectorAll("#choices button");
  choiceBtns.forEach((choiceBtn) => {
    choiceBtn.disabled = true;
  });
}

// Start the timer for the current question
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.innerHTML = "Time left: " + timeLeft + "s";
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      goToNextQuestion();
    }
  }, 1000);
}

// Go to the next question
function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    timeLeft = 7;
    showQuestion();
    startTimer();
    nextBtn.style.display = "none";
  }
}

// End the quiz
function endQuiz() {
  clearInterval(timerInterval);
  
  choicesEl.innerHTML = "";
  timerEl.innerText = "";
  nextBtn.style.display = "none";
  qNo.style.display = "none";
  quitBtn.style.display = "";
  // restartBtn.style.display = "";

  if (score>= 6){
    questionEl.innerText = "Quiz over!";
    questionE2.innerText = "Congradulations!!!🥳🎉"
    questionE3.innerText = "Your score is " + score + " from 10";
  } else if(score > 2) {
    questionEl.innerText = "Quiz over!";
    questionE2.innerText = "Nice work!!😉😉"
    questionE3.innerText = "Your score is " + score + " from 10";
  } else {
    questionEl.innerText = "Quiz over!";
    questionE2.innerText = "Sorry!!😢😢"
    questionE3.innerText = "Your score is " + score + " from 10";
  }
}

function startQuiz(){
  infoContainer.style.display="none";
  quizContainer.style.display="block";
  showQuestion();
     startTimer();
}
// Start the quiz
// showQuestion();
// startTimer();

// Add event listener for the next button
nextBtn.addEventListener("click", goToNextQuestion);
startQuizBtn.addEventListener("click",startQuiz);
quitBtn.addEventListener("click", function() {
  // Redirect to the desired HTML file when the button is clicked
  window.location.href = "index.html";
});



function loadQuestion(questionIndex) {
  // set the question number
  document.getElementById("question-num").innerHTML = "Question " + (questionIndex + 1) + ":";
  
  // set the question text
  document.getElementById("question").innerHTML = questions[questionIndex].question;

  // set the choices
  var choices = questions[questionIndex].choices;
  var choiceHtml = "";
  for (var i = 0; i < choices.length; i++) {
    choiceHtml += '<div class="choice" onclick="checkAnswer(this)">' + choices[i] + '</div>';
  }
  document.getElementById("choices").innerHTML = choiceHtml;
}

