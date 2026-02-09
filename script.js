var score = 0;
var box = document.querySelector(".box");
var scoreText = document.getElementById("score");

// Increase score
function increaseScore() {
    score = score + 1;
    scoreText.innerHTML = score;
    moveBox();
}

// Move box to random position
function moveBox() {
    var x = Math.floor(Math.random() * 250);
    var y = Math.floor(Math.random() * 250);

    box.style.left = x + "px";
    box.style.top = y + "px";
}

// Initial position
moveBox();
