let againdiv = document.getElementById("playagain");
againdiv.classList.add("hidden");

let tries = document.getElementById("tries");
tries.innerText = "You have " + 3 + " tries left";

let triebutton = document.getElementById("enterGuessBtn");
console.log(triebutton);

let listener = function () {
    let field = document.getElementById("input");
    let value = parseInt(field.value);
    checkNumber(value);
    console.log(value);
}
triebutton.addEventListener("click", listener);

function checkNumber(value) {
    reduceTries();
    console.log(value);
}

function reduceTries() {
    let tries = document.getElementById("tries");
    tries.innerText = "You have " + 2 + " tries left";
}