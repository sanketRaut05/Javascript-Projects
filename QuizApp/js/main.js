const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Arctic", correct: true },
            { text: "Australia", correct: false },
            { text: "Africa", correct: false },
        ]

    },
    {
        question: "Which is larget desert in the world?",
        answers: [
            { text: "Antarctica", correct: true },
            { text: "Kalahari", correct: false },
            { text: "Sahara", correct: false },
            { text: "Gobi", correct: false },
        ]
    },
    {
        question: "Which is smallest country in the world?",
        answers: [
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
            { text: "Vatican City", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answerbtn");
const nextBtn = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextBtn.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";
}
function showscore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
}
function handlenextbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handlenextbtn();
    }else{
        startQuiz()
    }
})
startQuiz();
