var readlineSync = require('readline-sync');
var score = 0;
// var userName = readlineSync.question("what's your name ?");

// data of high score
var highScores = [
  {
    name: "pradeep",
    score: 5,
  },

  {
    name: "pramod",
    score: 4,
  },
]
//console.log("welcome"+ userName + "DO YOU KNOW PRADEEP");
// var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question("what's your name ? :");
console.log("welcome "+ userName + " DO YOU KNOW PRADEEP ?");
 

// play function

function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right");
    score = score + 1
  } else {
    console.log("wrong!");
  }

  console.log("current score : "+ score);
  console.log("---------------");
}

// array of objects
var questions = [{
  question:"where does he live? :",
  answer: "jharkhand"
},{
  question: "his favorite superhero would be? :",
  answer:"shaktiman"
},{
  question: "what is he doing currently in his study ?:",
  answer:"codding"
},{
  question: "which state is his birth place? :",
  answer:"jharkhand"
},{
  question: "what is his highest degree ?:",
  answer:"graduation"
}];

//loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

function showScores() {
  console.log("Hey! You SCORED: ", score);

  console.log("Check out the high scores, if you scored more or equal than me , I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

// welcome();
// game();
showScores();

console.log("THANKS FOR PLAYING")