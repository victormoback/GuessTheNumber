let againdiv = document.getElementById("playagain");
againdiv.classList.add("hidden");

let tryCount = 4;
let theValue = (Math.random()*10)+1;
reduceTries();

let tryButton = document.getElementById("enterGuessBtn");

let listener = function () {
    let field = document.getElementById("input");
    field.value = "";
    let value = parseInt(field.value);
    checkNumber(value);
}
tryButton.addEventListener("click", listener);

function checkNumber(value) {
    if (value !== theValue){
        reduceTries();
        if(tryCount === 0){
            console.log("say goodbye");
        }
    }
}

function reduceTries() {
    let tries = document.getElementById("tries");
    tries.innerText = "You have " + (--tryCount) + " tries left";
    return tryCount;
}