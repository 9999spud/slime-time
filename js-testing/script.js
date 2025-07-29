//playing with alerts

function showAlert(message) {
    alert(message);
}

// playing with variables

let name = "John";
let admin = "";

admin = name;

<<<<<<< HEAD
function showPrompt(message, defaultInputText) {
    let userInput = prompt(message, defaultInputText);
    alert(`You are ${userInput} years old!`);
=======
//prompts and if statements

function promptLogin() {
    let username = prompt('Enter username', '');
    let password = '';


    if (username === null || username === '') {
        alert('cancelled');
    } else if (username == 'Admin') {

        let password = prompt('Enter password', '');

        if (password == 'TheBoss') {
            alert('Welcome');
        } else {
            alert('Wrong password');
        }
    } else {
        console.log(username);
        alert('I don\'t know you');
    }
>>>>>>> a032572e0bf4a42c02027d339ce4934a28c5773f
}