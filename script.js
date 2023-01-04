const quizData = [{
    question: "Ram lives in?",
    a: "Mumbai",
    b: "delhi",
    c: "pune",
    d: "Banglore",
    correct: "d",
    id: "A",
},
{
    question: "Population of Delhi is?",
    a: "10000",
    b: "1M",
    c: "10M",
    d: "10000",
    correct: "c",
    id: "B",
},
{
    question: "Niagra Falls is in?",
    a: "USA",
    b: "Yemen",
    c: "Chile",
    d: "UK",
    correct: "a",
    id: "C",
},
{
    question: "Ancient walls are made of?",
    a: "Cement",
    b: "Concrete",
    c: "Sand",
    d: "Lime Stone",
    correct: "b",
    id: "D",
},
{
    question: "Brass is made of?",
    a: "Iron + Bronze",
    b: "Steel + Copper",
    c: "Iron + Copper",
    d: "Mercury + Copper",
    correct: "d",
    id: "E",

}
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const ID = "";
let arr = [0, 1, 2, 3, 4];
let selectIndex = Math.floor(Math.random() * arr.length);
randomNumber = arr[selectIndex];
arr.splice(selectIndex, 1);
console.log(arr);
console.log("selectindex" + selectIndex);
console.log("random" + randomNumber);
let currentQuiz = randomNumber;
let score = 0;
let Questions = 0;
loadQuiz()

function loadQuiz() {
deselectAnswers()

const currentQuizData = quizData[currentQuiz]

questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
let answer

answerEls.forEach(answerEl => {
    if (answerEl.checked) {
        answer = answerEl.id
    }
})

return answer
}

submitBtn.addEventListener('click', () => {
const answer = getSelected()

var id = quizData[currentQuiz].id;
var key = id + "_" + answer;


window.localStorage.setItem(id, quizData[currentQuiz].question);
if (localStorage.getItem(key)) {
    var cnt = parseInt(localStorage.getItem(key));
    console.log("Same option as " + key + " already present");
    console.log(cnt + 1);
    cnt += 1;
    window.localStorage.setItem(key, cnt);
    console.log("So now count for " + key + " is " + cnt);
} else {
    window.localStorage.setItem(key, 1);

}


if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++
        console.log("Question is ");
        console.log(quizData[currentQuiz].question);
    }
    selectIndex = Math.floor(Math.random() * (arr.length - 1));
    randomNumber = arr[selectIndex];
    console.log("selectindex" + selectIndex);
    console.log("random" + randomNumber);
    arr.splice(selectIndex, 1);
    console.log(arr);
    Questions++;
    currentQuiz = randomNumber;
    console.log(arr);
    if (Questions < quizData.length) {
        loadQuiz()
    } else {
        
        window.open("./dashboard.html");
    }
}
})
