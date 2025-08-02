//playing with alerts

function showAlert(message) {
    alert(message);
}

// playing with variables

let name = "John";
let admin = "";

const jsonString = `{
    "forest": [
        {
            "meetBird": [
                "meet",
                "meet2",
                "meet3"
            ],
            "askBirdOut": [
                "ask", "ask2", "ask3"
            ]
        }
    ],
    "river": [
        {
            
        
        }
    ]
}`

const data = JSON.parse(jsonString);
const meetBirdArray = data.forest[0].meetBird;
console.log(meetBirdArray[1]);
admin = name;

function showPrompt(message, defaultInputText) {
    let userInput = prompt(message, defaultInputText);
    alert(`You are ${userInput} years old!`);
}

let primeQuestion = 1;

function isNumberPrime() {
    primeQuestion = document.getElementById("primeq").value;
    if (primeQuestion) {
        for (let i = 0; i <= primeQuestion; i++) {
            if (primeQuestion % i == 0) {
                console.log(i);
            }
        }
    } else {
        alert("please enter a valid number");
    }
}

function pow(a, b) {
    for (let i = 0; i <= b; i++) {
        a *= a;
    }
    console.log(a);
}
