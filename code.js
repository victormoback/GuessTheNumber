let againdiv = document.getElementById("playagain");
againdiv.classList.add("hidden");
let guessdiv = document.getElementById("guess");
let feedback = document.getElementById("tries");

let value = -1;
let tryCount = 0;
let theValue = 0
startNewGame();

let tryButton = document.getElementById("enterGuessBtn");
let playAgainButton = document.getElementById("playAgainBtn");

 function listener () {
    let field = document.getElementById("input");
    value = parseInt(field.value);
    field.value = "";
    field.focus();
    checkNumber();
}
    function resetListener() {
    startNewGame();
    toggleHidden();
}
tryButton.addEventListener("click", listener);
playAgainButton.addEventListener("click",resetListener)

function startNewGame() {
    value = -1;
    tryCount = 4;
    theValue = Math.floor(Math.random()*10)+1;
    reduceTries();
}

function checkNumber() {
    if (value !== theValue){
        reduceTries();
        if(tryCount === 0){
            toggleHidden();
            feedback.innerText = "You didnt wonnered"
        }
    } else {
        feedback.innerText = "You wonnered"
        toggleHidden();
    }
}

function reduceTries() {
    let tries = document.getElementById("tries");
    tries.innerText = "You have " + (--tryCount) + " tries left.";
    if (value < theValue && value !== -1) {
        tries.innerText += " Try higher!!"
    } else if (value > theValue && value !== -1) {
        tries.innerText += " Try lower!!"
    }
}
function toggleHidden() {
    againdiv.classList.toggle("hidden");
    guessdiv.classList.toggle("hidden");
}