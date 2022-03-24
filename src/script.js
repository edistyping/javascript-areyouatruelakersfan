const questionEl = document.getElementById("question");
const answerFirstButtonEl = document.getElementById("answerFirstButton");
const answerSecondButtonEl = document.getElementById("answerSecondButton");
const answerThirdButtonEl = document.getElementById("answerThirdButton");
const answerFourthButtonEl = document.getElementById("answerFourthButton");

const answerButtons = document.getElementsByName("answerButtons");

const numberOfQuestions = 5;
const questionRange = 25;

var numberOfCorrectAnswers = 0; // This is the number of User's correct answers

var correctAnswer = undefined;
var currentQuestion = 0;
var questions = [];




// Create an 'num'-sized array between 0 ~ maxNumber without duplicate
function generateNumbers(num, maxNumber) {
    
    let arr_temp = [];    
    let numberRange = maxNumber; 
    // We can't have an 'num'-sized array with unique MaxNumber-ranged numbers  
    if (num > maxNumber) {
        numberRange = num;    
    }
    
    var i = 0;
    while(i < num) {
        var rand0 = Math.floor(Math.random() * numberRange);

        if (arr_temp.includes(rand0) == false) {
            arr_temp.push(rand0);
            i++;
        }
    }        
    return arr_temp;
}

/* Support Codes */
function clearAnswerButtons() {  
    var ele = document.getElementsByName("answerButtons");
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
} 

function showQuestionsButtons() {  
    document.getElementsByClassName("container-questions")[0].style.display = "block";
} 
function hideQuestionsButtons() {
    document.getElementsByClassName("container-questions")[0].style.display = "none";
}

function showAnswerButtons() {  
    document.getElementsByClassName("container-answers")[0].style.display = "grid";
} 

function hideAnswerButtons() {
    document.getElementsByClassName("container-answers")[0].style.display = "none";
}
function showReplayContainer() {
    document.getElementsByClassName("container-replay")[0].style.display = "block";   
}
function hideReplayContainer() {
    document.getElementsByClassName("container-replay")[0].style.display = "none";   
}
function hideScores() {
    document.getElementById("numberofCorrectAnswers").style.display = "none";   
}


/* loadQuestions from json file  */
async function loadQuestions() {
    console.log("*loadQuestions() finished...");
    const randomNumbers = generateNumbers(numberOfQuestions, questionRange); 
    // Get Data from json file
    const response = await fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(err => console.log(err));

    // Push the data into 'questions' array
    for(i= 0; i < numberOfQuestions; i++) { 
        var x = randomNumbers[i];
        questions.push(response[x]); 
    };
}

// when submit is clicked or if 3 seconds are passed, increment currentQuestion 
function displayQuestions(x) {  
    // currentQuestion < numberOfQuestions
    // Replaced currentQuestion for x
    var temp = questions[x].false_answer;    
    const fakeAnswers = temp.split(";");
    const arr_answers = [questions[x].answer].concat(fakeAnswers); // both real and fake
    const randomNumbers = generateNumbers(4, 3); // 4 items between 0 to 10        
    correctAnswer = randomNumbers.indexOf(0); // answerFirst, answerSecond, etc.

    questionEl.innerHTML = questions[x].question;
    answerFirstButtonEl.innerHTML =  arr_answers[randomNumbers[0]];
    answerSecondButtonEl.innerHTML =  arr_answers[randomNumbers[1]];
    answerThirdButtonEl.innerHTML =  arr_answers[randomNumbers[2]];
    answerFourthButtonEl.innerHTML =  arr_answers[randomNumbers[3]];

}

function displayGameOver() {
    const correctAnswerEl = document.getElementById("numberofCorrectAnswers");
    correctAnswerEl.style.display = "block";
    correctAnswerEl.innerHTML = "Score: " + numberOfCorrectAnswers;

    if (numberOfCorrectAnswers == numberOfQuestions) {
        correctAnswerEl.innerHTML = "Congratulation, I accept your victory";
    } else {
        correctAnswerEl.innerHTML = "Congratulation, you lost";
    }
    
    hideQuestionsButtons();
    hideAnswerButtons();
    showReplayContainer();
    console.log("Game is over...")
}

/* Given User's choice, see if he/she selected the correct answer */
function checkAnswer(choice) { 
    const temp = ["answerFirst", "answerSecond", "answerThird", "answerFourth"];
    if (choice == temp[correctAnswer]) {
        console.log("checkAnswer() ---> User got the answer correct!!!")
        numberOfCorrectAnswers++;
    }
    
}


// One way to use onclick()
function onClickAnswer(choice) {
    // check if i got the right answer
    checkAnswer(choice);    
    
    // Increment for next Question
    currentQuestion++;
    if (currentQuestion >= numberOfQuestions) {
        displayGameOver();
    } else {
        // Need to reset timer here
        //document.getElementById("timeSecond").innerHTML = timeLeft;
        displayQuestions(currentQuestion);
    }


}

// Another way to use onclick()
const replayButton = document.getElementById("buttonReplay");
replayButton.addEventListener("click", () => {
    // Reset
    currentQuestion = 0;
    numberOfCorrectAnswers = 0;

    hideScores();
    hideReplayContainer();
    showQuestionsButtons();
    showAnswerButtons();
    displayQuestions(currentQuestion);

});


/* Start Game button:  */
const gamestartButton = document.getElementById("gamestartButton");
gamestartButton.addEventListener("click", () => {
    console.log("gamestartButton() clicked...");

    // Hide Start button and show questions
    document.getElementsByClassName("container-header")[0].style.display = "none"
    document.getElementsByClassName("container-quiz")[0].style.display = "block"
    
    hideReplayContainer();
    showQuestionsButtons();
    displayQuestions(currentQuestion);    

    // Need to reset timer here
    countTimers();

})

loadQuestions();


/* These are moved to top */
var timersCount = 0;
var pause = true; //is timer paused
//countTimers();

function countTimers() {
  timersCount++;

  var count = 6;
  var counter = setInterval(timer, 1000);

  function timer() {
    if (!pause) { //do something if not paused
      count = count - 1;
      if (count < 0) {
        clearInterval(counter);
        setTimeout(countTimers, 5000); //start count from 6 again after 5 sec
        return;
      } 

      document.getElementById("textTimer").innerHTML = count;
    }
  }

  document.getElementById("textTimer").innerHTML = timersCount;
}