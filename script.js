


//Grab all the DIV elementd getElementby ID 
var divQuizEL = document.getElementById("QuizInfo");
var divQAEL = document.getElementById("displayQA");
var divScoreCard = document.getElementById("scoreCard");
var divScoreBoard = document.getElementById("scoreboard");
var startBtn = document.getElementById("startQuiz");
var submitBtn = document.getElementById("submitScore");
var answerBtns = document.getElementsByName("btn3");
var timeRemaining = 20;

var questionEL = document.getElementById("question");
//keeps track og the correct answers 
var playerScore = 0;

function decrementTime() {
  timeRemaining--;
  document.getElementById("clockTime").innerHTML = timeRemaining
  if (timeRemaining > 0) { setTimeout(decrementTime, 1000) }
  else { showScorecard() };
}

// When one answers in Q3 is clicked then the score card will show up 
// create a for loop to add an event listener to each of the 4 btns in q3
// for(var i = 0; i < answerBtns.length; i++) {
//   answerBtns[i].addEventListener("click", showScorecard);
// }

var quizQuestionList = [
  //defining an Object 
  {
    //left key: right side value 
    question: "Commonly used data types DO not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAns: "alerts"
  },
  {
    question: "Question 2",
    choices: ["AA", "bA", "CA", "DA"],
    correctAns: "CA"
  }, {
    question: "Question 3",

  }, {
    question: "Question 4",
  }
];

//Hide all Elements on page load 
divQAEL.style.display = 'none';
divScoreCard.style.display = 'none';
divScoreBoard.style.display = 'none';


function startQuiz() {
  console.log("Starting Quiz ......");
  //hide the first screen QuizInfo 
  divQuizEL.style.display = 'none';
  //and show displayQA div 
  divQAEL.style.display = "block";
  //starting the clock -- Calling the function you cretaed on some event 
  startTime();
  //every one second update the time 
  setTimeout(decrementTime, 1000);

}

function showScorecard() {
  console.log("ScoreCard ......");
  divQAEL.style.display = 'none';
  divScoreCard.style.display = "block";
  document.getElementById("score").textContent = playerScore; 
  stopTime()
}

//Decalaring a function called startTime()
function startTime() {
  console.log("start clock")
}

function stopTime() {
  console.log("stop clock")
}

function checkAnswer() {
  console.log("answer is", this, "Name is ", this.name);
  var answer = this.name;
  if (answer === "correct") {
    playerScore = playerScore + 1;
    alert("Right ANswer, your score is "+ playerScore);

  }
  else {
    timeRemaining = timeRemaining - 5;
    alert("Wrong answer, time dedcuted by 5 sec");
  }

  // if (timeRemaining = 0) {
  //   alert("Game over");
  //   divScoreCard.style.display = "block";

  //   showScorecard();
  // }
  // by Wendy:
  // divQAEL.style.display = "none";
}

function endQuiz() {
  console.log("end quiz")
}

function saveScore() {
  console.log("saving ...score into local storage"); 
  var playerName = document.getElementById("initials").value; 
  //seeting the value in LS 
  localStorage.setItem("score", JSON.stringify(playerName + " - "+ playerScore) );

}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", saveScore);
// answerBtns[0].addEventListener("click", checkAnswer)
// answerBtns[1].addEventListener("click", checkAnswer)
// answerBtns[2].addEventListener("click", checkAnswer)
// answerBtns[3].addEventListener("click", checkAnswer)

document.getElementById("answer1").onclick = checkAnswer;
document.getElementById("answer2").onclick = checkAnswer;
document.getElementById("answer3").onclick = checkAnswer;
document.getElementById("answer4").onclick = checkAnswer; 

document.getElementById("answer5").onclick = checkAnswer;
document.getElementById("answer6").onclick = checkAnswer;
document.getElementById("answer7").onclick = checkAnswer;
document.getElementById("answer8").onclick = checkAnswer; 

document.getElementById("answer9").onclick = checkAnswer;
document.getElementById("answer10").onclick = checkAnswer;
document.getElementById("answer11").onclick = checkAnswer;
document.getElementById("answer12").onclick = checkAnswer; 