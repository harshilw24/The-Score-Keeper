var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetbutton = document.getElementById("reset");
var p = document.querySelector("p");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var p1Score=0;
var p2Score=0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetbutton.addEventListener("click", function(){
    p1Score=p2Score=0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
});


numInput.addEventListener("change", function(){
    var input = document.querySelector("input");
    winningScore =  Number(input.value);
    if(winningScore >= 0 ){
        p.textContent = "Playing to: " + winningScore;
    }
    else{
        alert("Wrong Input!")
    }
    
});
