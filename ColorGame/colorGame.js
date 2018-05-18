var numSquares = 6;
var colors = [];
var pickedColor;
var score = 0;
var highScore = 0;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message")
var scoreDisplay = document.querySelector("#score")
var highScoreDisplay = document.querySelector("#highScore")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            score = 0;
            scoreDisplay.textContent = "Score: " + score;
            highScore = 0;
            highScoreDisplay.textContent = "Highscore: " + highScore;
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        //add click listener to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                score++;
                scoreDisplay.textContent = "Score: " + score;
                    if(score > highScore){
                        highScore = score;
                    }
                highScoreDisplay.textContent = "Highscore: " + highScore;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
                score = 0;
                scoreDisplay.textContent = "Score: " + score;
            }
        })
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick new random color
    pickedColor = pickColor();
    //Change colorDiplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    //loop throught all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    };   
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}