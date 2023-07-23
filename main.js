// Data 
const data = [
    {
        question: "What is the capital of Jordan?" ,
        answers: [  "New York",
            "Madrid",
            "Amman",
            "Lispoa"],
        answer: 2
    },
    {
        question: "What is the largest continent in the world by area ?" ,
        answers: [  "Asia",
            "Europe",
            "Africa",
            "South America"],
        answer: 0
    },
    {
        question: "What is the biggest country in the world ?" ,
        answers: [  "America",
            "Russia",
            "Egypt",
            "Spain"],
        answer: 1
    },
    {
        question: "Who is the captin of Real Madrid?" ,
        answers: [  "Modric",
            "Rodrigo",
            "Mendy",
            "Nacho"],
        answer: 3
    },
    {
        question: "Which country is famous for sushi ?" ,
        answers: [  "Palestine",
            "Morroco",
            "Spain",
            "Japan"],
        answer: 3
    },
    {
        question: "How many English characters ?" ,
        answers: [  "20",
            "26",
            "16",
            "30"],
        answer: 1
    },
]
// Selectors 
let button = document.querySelector("button");
let question = document.querySelector(".question p");
let answers = document.querySelectorAll(".answers label");
let counter = document.querySelector(".data span");
let fullCount = document.querySelector(".data p:first-child span:last-child")
let answered = document.querySelector(".data p:last-child span");
let checkboxes = Array.from(document.querySelectorAll("input"));
let content = document.querySelector(".content");
let finish = document.querySelector(".result");
let answeredq = document.querySelector(".data p:first-child");
let finalResult = document.querySelector(".result span:first-child")
let finalResult2 = document.querySelector(".result span:last-child")



// Functions
function showuestion (index) {
    question.innerHTML = data[index].question;
}
function showData (index) {
    let i = 0
    answers.forEach((e)=> {
            e.innerHTML = data[index].answers[i];
            i++;
    })
}
function checkAnswer (index) {
    let passed = false;
    checkboxes.forEach((e) => {
        if(e.checked) 
            passed = true
    })
    return passed;
}
function clearChecked () {
    checkboxes.forEach((e)=> {
        e.checked = false;
    })
}
let result = 0;
function getResult (index) {
    let correct = data[index].answer;
    checkboxes.forEach((e , index)=> {
        if(e.checked && index == correct)
            ++result; 
    }) 
}

// Initial Values
showData(0);
showuestion(0);
fullCount.innerHTML = data.length;
answered.innerHTML = 0;

// App 
let i = 1;
function App (e) {
    {
        if(i < data.length && checkAnswer() ) {
            showuestion(i)
            showData(i);
            counter.innerHTML = i+1;
            answered.innerHTML = i; 
            getResult(i-1)
            i++;
            clearChecked();
            console.log(result)
        } else if (i == data.length) {
            getResult(i-1);
            content.innerHTML = ""
            answered.innerHTML = i;
            finish.style.display = "block";
            answeredq.style.display = "none";
            finalResult.innerHTML = result;
            finalResult2.innerHTML = data.length;
            button.innerHTML = "Try Again";
            i++;
            button.addEventListener("click" , ()=> {
                location.reload()
            })
        } else {
            e.preventDefault()
        }
    }
}

// Main Method 
button.addEventListener("click" , App);