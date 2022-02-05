


//Grab all the DIV elementd getElementby ID 
var divQuizEL = document.getElementById("QuizInfo");
var divQAEL = document.getElementById("displayQA");
var divScoreCard = document.getElementById("scoreCard");
var divScoreBoard = document.getElementById("scoreboard");
var startBtn = document.getElementById("startQuiz");
var submitBtn = document.getElementById("submitScore");
var answerBtns = document.getElementsByName("btn3");
var timeRemaining = 20;
var question1answered = false;
var question2answered = false;
var question3answered = false;


var questionEL = document.getElementById("question");
//keeps track of the correct answers 
var playerScore = 0;

// var loadTasks = function() {
//   var HighScores = localStorage.getItem("saveScore");
//     }
//   console.log("Saved scores found!");
//   saveScore = JSON.parse(saveScore);




function decrementTime() {
  timeRemaining--;
  document.getElementById("clockTime").innerHTML = timeRemaining
  if (timeRemaining > 0) { setTimeout(decrementTime, 1000) }
  else { showScorecard() };
}


//Hide all Elements on page load 
divQAEL.style.display = 'none';
divScoreCard.style.display = 'none';
// divScoreBoard.style.display = 'none';


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
  // High Scores
  document.getElementById("HighScores").innerHTML = localStorage.getItem("score");
}

function showScorecard() {
  console.log("ScoreCard ......");
  divQAEL.style.display = 'none';
  divScoreCard.style.display = "block";
  document.getElementById("score").textContent = playerScore;
  stopTime()
}

//Declaring a function called startTime()
function startTime() {
  console.log("start clock")
}

function stopTime() {
  console.log("stop clock")
}

function checkAnswer(event) {
  if (event.currentTarget.question == 1) {
    question1answered = true;
  }
  else if (event.currentTarget.question == 2) {
    question2answered = true;
  }
  else if (event.currentTarget.question == 3) {
    question3answered = true;
  }



  console.log("answer is", this, "Name is ", this.name);
  var answer = this.name;
  if (answer === "correct") {
    playerScore = playerScore + 1;
    alert("Right Answer, your score is " + playerScore);
  }
  else {
    timeRemaining = timeRemaining - 5;
    alert("Wrong answer, time deducted by 5 sec");
  }

  if (question1answered && question2answered && question3answered) {
    showScorecard ()
  }

  // if (timeRemaining = 0) {
  //   alert("Game over");
  //   divScoreCard.style.display = "block";

  //   showScorecard();
  // }
}

function endQuiz() {
  console.log("end quiz")
}

function saveScore() {
  console.log("saving ...score into local storage");
  var playerName = document.getElementById("initials").value;


  //   //setting the value in LS 
  //   // pull the array out of storage
  // var scores = localStorage.getItem("scores")
  //   // if array doesn't exist create it
  //   if (scores == null) {
  //     scores = [];
  //   }
  //   // put the new item in the array
  //   scores.push (JSON.stringify(playerName + " - " + playerScore));
  //   // put the array back to storage
  //   localStorage.setItem("scores", scores);

  localStorage.setItem("score", JSON.stringify(playerName + " - " + playerScore));
  document.getElementById("HighScores").innerHTML = localStorage.getItem("score");
}





startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", saveScore);


var answer1 = document.getElementById("answer1");
answer1.question = 1;
answer1.onclick = checkAnswer;

var answer2 = document.getElementById("answer2");
answer2.question = 1;
answer2.onclick = checkAnswer;

var answer3 = document.getElementById("answer3");
answer3.question = 1;
answer3.onclick = checkAnswer;

var answer4 = document.getElementById("answer4");
answer4.question = 1;
answer4.onclick = checkAnswer;

var answer5 = document.getElementById("answer5");
answer5.question = 2;
answer5.onclick = checkAnswer;

var answer6 = document.getElementById("answer6");
answer6.question = 2;
answer6.onclick = checkAnswer;

var answer7 = document.getElementById("answer7");
answer7.question = 2;
answer7.onclick = checkAnswer;

var answer8 = document.getElementById("answer8");
answer8.question = 2;
answer8.onclick = checkAnswer;

var answer9 = document.getElementById("answer9");
answer9.question = 3;
answer9.onclick = checkAnswer;

var answer10 = document.getElementById("answer10");
answer10.question = 3;
answer10.onclick = checkAnswer;

var answer11 = document.getElementById("answer11");
answer11.question = 3;
answer11.onclick = checkAnswer;

var answer12 = document.getElementById("answer12");
answer12.question = 3;
answer12.onclick = checkAnswer;




// document.getElementById("answer2").onclick = checkAnswer;
// document.getElementById("answer3").onclick = checkAnswer;
// document.getElementById("answer4").onclick = checkAnswer;

// document.getElementById("answer5").onclick = checkAnswer;
// document.getElementById("answer6").onclick = checkAnswer;
// document.getElementById("answer7").onclick = checkAnswer;
// document.getElementById("answer8").onclick = checkAnswer;

// document.getElementById("answer9").onclick = checkAnswer;
// document.getElementById("answer10").onclick = checkAnswer;
// document.getElementById("answer11").onclick = checkAnswer;
// document.getElementById("answer12").onclick = checkAnswer; 