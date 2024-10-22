var level=0;
var currnt=0;
var userchosenans=[];
var one_lowercaseAlphabets = [];
for (let i = 97; i <= 103; i++) {
    one_lowercaseAlphabets.push(String.fromCharCode(i));
}
var two_lowercaseAlphabets = [];
for (let i = 104; i <= 110; i++) {
    two_lowercaseAlphabets.push(String.fromCharCode(i));
}
var three_lowercaseAlphabets = [];
for (let i =111; i <= 117; i++) {
    three_lowercaseAlphabets.push(String.fromCharCode(i));
}
var four_lowercaseAlphabets = [];
for (let i = 118; i <= 122; i++) {
    four_lowercaseAlphabets.push(String.fromCharCode(i));
}

let qaMap = new Map();
qaMap.set("What is the capital of bihar?", "patna");
qaMap.set("who is the founder of java script?", "Eich");
qaMap.set("What is the color of the sky?", "Blue");
var questions = Array.from(qaMap.keys());
displayQuestion();

$(document).keypress(function() {
    first(one_lowercaseAlphabets);
    first(two_lowercaseAlphabets);
    first(three_lowercaseAlphabets);
    first(four_lowercaseAlphabets);
});
function first(alphabetArray) {
    if (level == 4) {
        level = 0;
    }
    level++;
    var random_number = Math.floor(Math.random() * alphabetArray.length);
    $("#" + level).text(alphabetArray[random_number]);
}

$(".btn").click(function(){
    var userClickedPattern=$(this).text();
     userchosenans.push(userClickedPattern);
     var to_send=$(this).attr("id");
     animatePress(to_send);
     checkAnswer();
     
}
);
function checkAnswer() {
    var currentQuestion = questions[currnt];
    var currentAnswer = qaMap.get(currentQuestion);
    var len = userchosenans.length;

    if (len <= currentAnswer.length && userchosenans[len - 1] === currentAnswer[len - 1]) {
        if (len === currentAnswer.length) {
            alert("Correct!");
          
            moveToNextQuestion();
        }
    } else {
       playSound();
        resetAnswer();
    }
}





function moveToNextQuestion() {
    userchosenans = [];
    currnt = (currnt + 1) % questions.length;
    displayQuestion();
}

function resetAnswer() {
    userchosenans = [];
}

function displayQuestion() {
    var currentQuestion = questions[currnt];
    $(".show").text(currentQuestion);
}
function animatePress(currentColor) {
    console.log("Animating press for: ", currentColor);
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
function playSound(){
    var audio=new Audio("mmm.mpeg");
    audio.play();
}













