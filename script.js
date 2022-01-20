


//Grab all the DIV elementd getElementby ID 
var divQuizEL = document.getElementById("QuizInfo"); 
var divQAEL = document.getElementById("displayQA");
var divScoreCard = document.getElementById("scoreCard");
var divScoreBoard = document.getElementById("scoreboard");
var startBtn = document.getElementById("startQuiz");

var quizQuestionList = [
  {
    question: "Question 1", 
    question: "Question 2", 
    question: "Question 3", 
    question: "Question 4", 
  }
]
//Hide all Elements on page load 
divQAEL.style.display = 'none'; 
divScoreCard.style.display = 'none'; 
divScoreBoard.style.display = 'none'; 


function startQuiz(){
  console.log("Starting Quiz ......"); 
  //hide the first screen QuizInfo 
  divQuizEL.style.display = 'none'; 
  //and show displayQA div 
  divQAEL.style.display = "block";
  //starting the clock 
  startTime()
}

function startTime(){
  console.log("start clock")
}

function checkAnswer(){
  console.log("answer")
  // by Wendy:
  divQAEL.style.display = "none";
  divScoreCard.style.display = "block";
  }

function endQuiz(){
  console.log("end quiz")
}
  
startBtn.addEventListener("click", startQuiz); 
divScoreCard.addEventListener("click", divScoreCard); 
