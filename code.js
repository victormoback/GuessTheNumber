let againdiv = document.getElementById("playagain");
againdiv.classList.add("hidden");
let guessdiv = document.getElementById("guess");
let feedback = document.getElementById("tries");

let tryCount = 4;
let theValue = (Math.random()*10)+1;
startNewGame();
reduceTries();

let tryButton = document.getElementById("enterGuessBtn");
let playAgainButton = document.getElementById("playAgainBtn");

let listener = function () {
    let field = document.getElementById("input");
    let value = parseInt(field.value);
    field.value = "";
    checkNumber(value);
}
let resetListener = function() {
    startNewGame();
}
tryButton.addEventListener("click", listener);
playAgainButton.addEventListener("click",resetListener)


function checkNumber(value) {
    if (value !== theValue){
        reduceTries();
        if(tryCount === 0){
            toggleHidden();
            feedback.innerText = "You didnt wonnered"
        }
    } else {
        feedback.innerText = "You wonnered"
    }
}

function reduceTries() {
    let tries = document.getElementById("tries");
    tries.innerText = "You have " + (--tryCount) + " tries left";
    return tryCount;
}
function toggleHidden() {
    againdiv.classList.toggle("hidden");
    guessdiv.classList.toggle("hidden");
}