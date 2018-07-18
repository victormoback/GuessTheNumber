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
    theValue: 0,
    keepPlaying: true
}
ui.againdiv.classList.add("hidden");
ui.tryButton.addEventListener("click", inputListener);
ui.playAgainButton.addEventListener("click",resetListener);
startNewGame();

function render(currentState, ui){
    enterGuess(state.keepPlaying, parseInt(ui.field.value));
}
function enterGuess(currentState, newGuess){
    return 
}

function inputListener () {
state.value = parseInt(ui.field.value);
ui.tryButton.addEventListener("click", listener);
ui.playAgainButton.addEventListener("click",resetListener)
}
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
    state.value = -1;
    state.tryCount = 4;
    state.theValue = Math.floor(Math.random()*10)+1;
    reduceTries();
}

function checkNumber() {
    if (state.value !== state.theValue){
        reduceTries();
        if(state.tryCount === 0){
            toggleHidden();
            ui.feedbackdiv.innerText = "You didnt wonnered"
        }
    } else {
        ui.feedbackdiv.innerText = "You wonnered"
        toggleHidden();
    }
}

function reduceTries() {
    ui.feedbackText.innerText = "You have " + (--state.tryCount) + " tries left.";
    if (state.value < state.theValue && state.value !== -1) {
        ui.feedbackText.innerText += " Try higher!!"
    } else if (state.value > state.theValue && state.value !== -1) {
        ui.feedbackText.innerText += " Try lower!!"
    }
}
function toggleHidden() {
    ui.againdiv.classList.toggle("hidden");
    ui.guessdiv.classList.toggle("hidden");
}