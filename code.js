let againdiv = document.getElementById("playagain");
againdiv.classList.add("hidden");

let tries = document.getElementById("tries");
tries.innerText ="You have " + 3 + " tries left";

let triebutton = document.getElementById("enterGuessBtn");
triebutton.addEventListener("click",listener);


function listener(){
    let field = document.getElementById("input");
    let value = ParseInt(field.value);
    checkNumber(value);
}

function checkNumber(value){
    reduceTries();
}

function reduceTries(){
    let tries = document.getElementById("tries");
    tries.innerText ="You have " + 2 + " tries left";
}