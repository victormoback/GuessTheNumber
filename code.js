let ui = {
    againdiv: document.getElementById("playagain"),
    guessdiv: document.getElementById("guess"),
    //feedbackdiv: document.getElementById("tries"), ?
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
ui.tryButton.addEventListener("click", () => {
    state = enterGuess(state, ui);
    state = checkNumber(state, ui);
    render(state, ui);
});
ui.playAgainButton.addEventListener("click", () => {
    state = startNewGame(state);
    render(state, ui);
});

state = startNewGame(state);

function render(state, ui) {
    if (state.keepPlaying) {
        ui.againdiv.classList.add("hidden");
        ui.guessdiv.classList.remove("hidden");
    }else{
        ui.againdiv.classList.remove("hidden");
        ui.guessdiv.classList.add("hidden");
    }
    clearField(ui);
    updateUi(state, ui);
}
function enterGuess(state, ui) {
    let newState = { ...state };
    newState.value = parseInt(ui.field.value);
    return newState;
}
function clearField(ui) {
    ui.field.value = "";
    ui.field.focus();
}

function startNewGame(state) {
    let newState = { ...state }
    newState.value = -1;
    newState.tryCount = 3;
    newState.theValue = Math.floor(Math.random() * 10) + 1;
    newState.keepPlaying = true;
    return newState;
}

function checkNumber(state) {
    newState = { ...state };
    if (newState.value !== newState.theValue) {
        newState.tryCount--;
        if (newState.tryCount === 0) {
            newState.keepPlaying = false;
        }
    } else {
        newState.keepPlaying = false;
    }
    return newState;
}

function updateUi(state, ui) {
    //if just started
    if (state.tryCount === 0) {
        ui.feedbackText.innerText = "You didnt wonnered";
    } else if (state.value === state.theValue) {
        ui.feedbackText.innerText = "You wonnered";
    } else {
        ui.feedbackText.innerText = "You have " + state.tryCount + " tries left.";
        if (state.value < state.theValue && state.value !== -1) {
            ui.feedbackText.innerText += " Try higher!!";
        } else if (state.value > state.theValue && state.value !== -1) {
            ui.feedbackText.innerText += " Try lower!!";
        }
    }
}