//Global varibles
var questionsArray = [];
var questionNumber = 0;
var score = 0;
var answerSelection = "";

//Create an on load function to all the function to create the objects and then put them into an array
document.addEventListener('load',objectCreation(),false);

//Add a click event to submit the final quiz
var event1 = document.getElementById("submit");
    event1.addEventListener('click',submitAnswer,false);

//Add a click event to sshow the new question input
var event1 = document.getElementById("openQuestionInput");
    event1.addEventListener('click',startInputForm,false);

//add a click event to add the question to the array
var event1 = document.getElementById("submitQuestion");
    event1.addEventListener('click',addQuestion,false);

//add a click event to restart the quiz and hide the input form
var event1 = document.getElementById("restartQuizBut");
    event1.addEventListener('click',restartQuiz,false);

//Create the object constructer
function questionData (question, optionOne, optionTwo, optionThree, correctAnswer) {
    this.question = question;
    this.optionOne = optionOne;
    this.optionTwo = optionTwo;
    this.optionThree = optionThree;
    this.correctAnswer = correctAnswer;
}

//Main load logic starts here
function objectCreation(){
    //hide the submit and forms for inputing questions
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("openQuestionInput").style.visibility = "hidden";
    document.getElementById("restartQuizBut").style.visibility = "hidden";
    document.getElementById("newQestionForm").style.visibility = "hidden";
    
    //Create 5 objects with the question data in
    var qustionOne = new questionData("Narayana Engineering College Gudur was established on?", "1996", "2001", "1998", "answerTwo");
    var qustionTwo = new questionData("How many departments are there in NECG under B.Tech?", "5", "7", "4", "answerOne");
    var qustionThree = new questionData("What is the department code of CSE under JNTUA?", "1", "3", "5", "answerThree");
    var qustionFour = new questionData("Who is the president of India?", "Ramnath Kovind", "Prathiba patil", "Pranab Mukharjee", "answerOne");
    var qustionFive = new questionData("Who invented tentway.info?", "Bill gates", "Steve jobs", "Yaswanth Sai Palaghat", "answerThree");
    
    //Create an array of the questions
    questionsArray = [qustionOne, qustionTwo, qustionThree, qustionFour, qustionFive];
    
    //Populate the first question to the screen
    questionToPage();
}

//function to take the answer automatically and then move on to the next question
function answerQuestion(answer){
    //evalulate the answer and increase the score if correct    
    if (answer === questionsArray[questionNumber].correctAnswer){
        score++;    
    }
    questionNumber++;
    questionToPage();
    document.getElementById("answers").reset();
    if (questionNumber == (questionsArray.length - 1)){
        //show the submit button to trigger the score
        document.getElementById("submit").style.visibility = "visible";    
    }
}

//Submit answer function
function submitAnswer(){
    document.getElementById("output").innerHTML = "Your score was " + score;
    //show the button to add new questions
    document.getElementById("openQuestionInput").style.visibility = "visible";
    document.getElementById("restartQuizBut").style.visibility = "visible";
}

//function to populated the question data to the page
function questionToPage(){
    document.getElementById("question").innerHTML = questionsArray[questionNumber].question;
    document.getElementById("optionOne").innerHTML = questionsArray[questionNumber].optionOne;
    document.getElementById("optionTwo").innerHTML = questionsArray[questionNumber].optionTwo;
    document.getElementById("optionThree").innerHTML = questionsArray[questionNumber].optionThree;
}

//function to open the new question form
function startInputForm(){
    document.getElementById("newQestionForm").style.visibility = "visible";
}

//function to add new questions to the quiz
function addQuestion(){
    var question = document.getElementById("newQestion").value;
    var optionOne = document.getElementById("newOptionOne").value;
    var optionTwo = document.getElementById("newOptionTwo").value;
    var optionThree = document.getElementById("newOptionThree").value;
    var saveQuestion = new questionData(question, optionOne, optionTwo, optionThree, answerSelection);
    questionsArray.push(saveQuestion);
    document.getElementById("newQuestFormReset").reset();
    questionNumber++;
}

//function to get correct answer from the form and set it to a varible to be added in the array
function subQuestAnswer(answer){
    answerSelection = answer;
}

//function to reset the quiz and hide all the elements
function restartQuiz(){
    questionNumber = 0;
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("openQuestionInput").style.visibility = "hidden";
    document.getElementById("newQestionForm").style.visibility = "hidden";
    document.getElementById("restartQuizBut").style.visibility = "hidden";
    document.getElementById("output").innerHTML = "";
    document.getElementById("answers").reset();
    score = 0;
    questionToPage();
}


