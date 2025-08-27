let userSeq = [];
let gameSeq = [];

let btns= ["yellow", "red", "purple", "green"];


let started = false;
let level = 0; 

let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();

    }    
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
};


//generating random colour--->>>>
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let rndmIdx = Math.floor(Math.random()*4);
    let rndmclr = btns[rndmIdx];
    let rndmbtn = document.querySelector(`.${rndmclr}`);
    gameSeq.push(rndmclr);
    console.log(gameSeq);
    gameFlash(rndmbtn);
}


function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
        setTimeout( levelUp,1000);
    }
    }else{
        h2.innerHTML = `Game Over! Your Score was : <b>${level}<b> 
        <br>Please enter any key to restart!`;
        reset();
        let bg = document.querySelector("body");
        bg.style.backgroundColor = "red"; 

        setTimeout(function(){
            bg.style.backgroundColor="white";
    },250);

    }

}


//user pressed buttons--->>>>
function btnPress(){ 
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
};

function reset() {
    level = 0;
    started = false;
    userSeq = [];
    gameSeq = [];
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
};


    
    
