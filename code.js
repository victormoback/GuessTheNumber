let ui ={
    againdiv: document.getElementById("playagain"),
    guessdiv: document.getElementById("guess"),
    feedbackdiv: document.getElementById("tries"),
    feedbackText: document.getElementById("tries"),
    field: document.getElementById("input"),
    tryButton: document.getElementById("enterGuessBtn"),
    playAgainButton: document.getElementById("playAgainBtn")
}

let state = {
    tryCount: 0,
    value: -1,
    theValue: 0
}
ui.againdiv.classList.add("hidden");
startNewGame();




ui.tryButton.addEventListener("click", listener);
ui.playAgainButton.addEventListener("click",resetListener)

function listener () {
    value = parseInt(ui.field.value);
    ui.field.value = "";
    ui.field.focus();
    checkNumber();
}
function resetListener() {
    startNewGame();
    toggleHidden();
}

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
            ui.feedbackdiv.innerText = "You didnt wonnered"
        }
    } else {
        ui.feedbackdiv.innerText = "You wonnered"
        toggleHidden();
    }
}

function reduceTries() {
    
    ui.feedbackText.innerText = "You have " + (--tryCount) + " tries left.";
    if (value < theValue && value !== -1) {
        ui.feedbackText.innerText += " Try higher!!"
    } else if (value > theValue && value !== -1) {
        ui.feedbackText.innerText += " Try lower!!"
    }
}
function toggleHidden() {
    ui.againdiv.classList.toggle("hidden");
    ui.guessdiv.classList.toggle("hidden");
}