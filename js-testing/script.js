//playing with alerts

function showAlert(message) {
    alert(message);
}

// playing with variables

let name = "John";
let admin = "";

admin = name;

function showPrompt(message, defaultInputText) {
    let userInput = prompt(message, defaultInputText);
    alert(`You are ${userInput} years old!`);
}