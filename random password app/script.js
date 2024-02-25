const passwordBox = document.getElementById("password");
var length = 15; 





const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{{}></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}


function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}

function getLength() {
    var userInput = document.getElementById("passLength");
    var lengthValue = userInput.value;

    if (lengthValue < 4 || lengthValue > 15) {
        alert("Please enter a number between 4 and 15");
        userInput.value = "";
    } else {
        var passwordLength = lengthValue
        length = passwordLength;
        alert("Length entered. Click Generate Password to proceed")
    }

    
}



