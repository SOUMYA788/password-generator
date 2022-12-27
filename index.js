// DOM ELEMENTS
const form = document.getElementsByClassName("passwordGeneratorForm")[0]
const displayScreen = document.getElementById("password_screen");
let passwordRangeSlider = document.getElementById("passwordRangeSlider");
const numInp = document.getElementById("passwordRangeInput");
const includeUppercaseElement = document.getElementById("upperCaseCheckbox");
const includeLowercaseElement = document.getElementById("lowerCaseCheckbox");
const includeNumbersElement = document.getElementById("numberCheckbox")
const includeSymbolsElement = document.getElementById("symbolCheckbox")
const warningAlert = document.getElementById("warning");
const submitBTN = document.getElementById("generateBTN")

document.getElementById("light_dark_toggle_btn").addEventListener("click", () => { 
    document.body.classList.toggle("light_mode");
    document.getElementById("dark_light_switch").classList.toggle("light_on");
})

let syncCharAmtFunc;
let setWarning = (message) => {
    displayScreen.innerText = message;
}

passwordRangeSlider.addEventListener("input", syncCharAmt);
numInp.addEventListener("input", syncCharAmt);

submitBTN.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const charecterAmount = numInp.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const includeLowercase = includeLowercaseElement.checked;
    const password = generatePassword(charecterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

})



function syncCharAmt(e) {
    const value = e.target.value;
    passwordRangeSlider.value = value;
    numInp.value = value;
    e.preventDefault();
    e.stopPropagation();
}

function generatePassword(charecterAmount, includeUppercase, includeLowerCase, includeNumbers, includeSymbols) {
    let mainPassword = "";
    let passwordChars = "";

    // let lower = "abcdefghijklmnopqrstuvwxyz"
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = upper.toLowerCase();
    let numb = "0123456789"
    let symb = `+-*/!@#$%&(){}[];:'"<>?\\|,.€~`

    if (includeUppercase == true && includeLowerCase == false && includeNumbers == false && includeSymbols == false) {
        // Complite
        passwordChars += upper;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }
        displayScreen.innerText = mainPassword;
        passwordChars = "";
        mainPassword = "";
    }

    else if (includeUppercase == false && includeLowerCase == true && includeNumbers == false && includeSymbols == false) {
        // Complite
        passwordChars += lower
        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }
        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    else if (includeUppercase == false && includeLowerCase == false && includeNumbers == true && includeSymbols == false) {
        // Complite
        passwordChars += numb;
        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }
        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    else if (includeUppercase == false && includeLowerCase == false && includeNumbers == false && includeSymbols == true) {
        // Complite
        passwordChars += symb;
        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }
        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    else if (includeUppercase == true && includeLowerCase == true && includeNumbers == false && includeSymbols == false) {
        // Complite
        passwordChars += upper;
        passwordChars += lower;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    else if (includeUppercase == true && includeLowerCase == false && includeNumbers == true && includeSymbols == false) {
        // Complite
        passwordChars += upper;
        passwordChars += numb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    else if (includeUppercase == true && includeLowerCase == false && includeNumbers == false && includeSymbols == true) {
        // Complite
        passwordChars += upper;
        passwordChars += symb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    else if (includeUppercase == false && includeLowerCase == true && includeNumbers == true && includeSymbols == false) {
        // Complite
        passwordChars += lower;
        passwordChars += numb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    else if (includeUppercase == false && includeLowerCase == false && includeNumbers == true && includeSymbols == true) {
        // Complite
        passwordChars += symb;
        passwordChars += numb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    // upper & lower & numb
    else if (includeUppercase == true && includeLowerCase == true && includeNumbers == true && includeSymbols == false) {
        // Complite
        passwordChars += upper;
        passwordChars += lower;
        passwordChars += numb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    // upper & lower & symb
    else if (includeUppercase == true && includeLowerCase == true && includeNumbers == false && includeSymbols == true) {
        // Complite
        passwordChars += upper;
        passwordChars += lower;
        passwordChars += symb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    // lower & numb & symb
    else if (includeUppercase == false && includeLowerCase == true && includeNumbers == true && includeSymbols == true) {
        // Complite
        passwordChars += symb;
        passwordChars += lower;
        passwordChars += numb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    // symble & upper & numb
    else if (includeUppercase == true && includeLowerCase == false && includeNumbers == true && includeSymbols == true) {
        // Complite
        passwordChars += upper;
        passwordChars += symb;
        passwordChars += numb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }


    // all apply
    else if (includeUppercase == true && includeLowerCase == true && includeNumbers == true && includeSymbols == true) {
        // Complite
        passwordChars += upper;
        passwordChars += lower;
        passwordChars += symb;
        passwordChars += numb;

        for (let i = 0; i < charecterAmount; i++) {
            let randomNumber = Math.floor(Math.random() * passwordChars.length)
            mainPassword += passwordChars.substring(randomNumber, randomNumber + 1)
        }

        displayScreen.innerText = mainPassword
        passwordChars = "";
        mainPassword = "";
    }

    else {
        setWarning(`Please Select an option...`);
    }
}

