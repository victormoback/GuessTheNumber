let ui = {

    guessdiv: $("#guess"),
    againdiv: $("#playagain"),   
    feedbackText: $("#tries"),
    field: $("#input"),
    tryButton: $("#enterGuessBtn"),
    playAgainButton: $("#playAgainBtn")
}

let state = {
    tryCount: 0,
    value: -1,
    theValue: 0,
    keepPlaying: true
}
ui.againdiv.addClass("hidden");
ui.tryButton.on("click", () => {
    state = enterGuess(state, ui);
    state = checkNumber(state, ui);
    render(state, ui);
});
ui.playAgainButton.on("click", () => {
    state = startNewGame(state);
    render(state, ui);
});

state = startNewGame(state);
updateUi(state, ui);

function render(state, ui) {
    if (state.keepPlaying) {
        ui.againdiv.addClass("hidden");
        ui.guessdiv.removeClass("hidden");
    }else{
        ui.guessdiv.addClass("hidden");
        ui.againdiv.removeClass("hidden");

    }
    clearField(ui);
    updateUi(state, ui);
}
function enterGuess(state, ui) {
    let newState = { ...state };
    newState.value = parseInt(ui.field.val());
    return newState;
}
function clearField(ui) {
    ui.field.val("");
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
    ui.feedbackText.text("Guess a Number");
    if (state.tryCount === 0) {
        ui.feedbackText.text("You didnt wonnered");
    } else if (state.value === state.theValue) {
        ui.feedbackText.text("You wonnered");
    } else if (state.tryCount < 3) {
        ui.feedbackText.text("You have " + state.tryCount + " tries left.");
        if (state.value < state.theValue && state.value !== -1) {
            ui.feedbackText.text(ui.feedbackText.text() + " Try higher!!");
        } else if (state.value > state.theValue && state.value !== -1) {
            ui.feedbackText.text(ui.feedbackText.text() + " Try lower!!");
        }
    }
}