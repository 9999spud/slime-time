//playing with alerts

function showAlert(message) {
    alert(message);
}

// playing with variables

let name = "John";
let admin = "";

admin = name;

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
}