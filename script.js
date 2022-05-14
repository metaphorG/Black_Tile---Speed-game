let grid = document.getElementById("grid");
let hardBtn = document.getElementById("hard");
let easyBtn = document.getElementById("easy");
let mediumBtn = document.getElementById("medium");
let startBtn = document.getElementById("start");
let chooseDifficultyText = document.getElementById("chooseDifficultyText");
let title = document.getElementById("title");
let yourScore = document.getElementById("yourScore");
let highestScoreDisplay = document.getElementById("highest_score");
let displayScore = document.getElementById("display_score");
let score = 0;
let highestScore;
let highestScore2;
let highestScoreNew = 0;
let gridSize;
let gameLevel;
let size;
let allTile;
let blackTile;
let randomNumber;
let reload = document.getElementById("reload");
hardBtn.addEventListener("click", levelSelecrtor);
easyBtn.addEventListener("click", levelSelecrtor);
mediumBtn.addEventListener("click", levelSelecrtor);
startBtn.addEventListener("click", generateBlackTile);
startBtn.addEventListener("click", hideStartBtn);
startBtn.addEventListener("click", twentySecond);
reload.addEventListener("click", refrash);

function hideStartBtn() {
  startBtn.setAttribute("style", "display:none");
}
function levelSelecrtor(clicked) {
  gameLevel = clicked.target.id;
  startBtn.removeAttribute("style");
  easyBtn.setAttribute("style", "display:none");
  mediumBtn.setAttribute("style", "display:none");
  hardBtn.setAttribute("style", "display:none");
  chooseDifficultyText.setAttribute("style", "display:none");
  title.setAttribute("style", "display:none");

  if (gameLevel === "hard") {
    gridSize = 25;
    size = 84;
  } else if (gameLevel === "medium") {
    gridSize = 16;
    size = 105;
  } else {
    gridSize = 9;
    size = 140;
  }
  for (i = 1; i < gridSize + 1; i++) {
    let tile = document.createElement("div");
    tile.setAttribute("class", "tile");
    tile.setAttribute(
      "style",
      "height:" +
        size +
        "px" +
        ";width:" +
        size +
        "px" +
        ";border:1px solid black" +
        ";box-sizing: border-box"
    );
    grid.append(tile);
  }
}

function generateBlackTile() {
  allTile = document.getElementsByClassName("tile");
  gridSize = allTile.length;
  randomNumber = Math.floor(Math.random() * gridSize);
  blackTile = allTile[randomNumber];
  for (i = 0; i < gridSize; i++) {
    allTile[i].setAttribute(
      "style",
      "height:" +
        size +
        "px" +
        ";width:" +
        size +
        "px" +
        ";border:1px solid black" +
        ";box-sizing: border-box"
    );
    allTile[i].removeEventListener("click", generateBlackTile);
    allTile[i].removeAttribute("id");
  }
  blackTile.setAttribute(
    "style",
    "background-color: black" +
      ";height:" +
      size +
      "px" +
      ";width:" +
      size +
      "px" +
      ";border:1px solid black" +
      ";box-sizing: border-box"
  );
  blackTile.setAttribute("id", "black");
  blackTile.addEventListener("click", generateBlackTile);
  blackTile.addEventListener("click", increaseScore);
}

function twentySecond() {
  setTimeout(() => {
    grid.setAttribute("style", "display:none;");
    displayScore.setAttribute(
      "style",
      "display:;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%); font-size:70px;"
    );
    highestScore = localStorage.getItem("highestScore");
    if (highestScore < score) {
      localStorage.setItem("highestScore", score);
    }
    yourScore.innerText = score;
    if(highestScore<score){
      highestScore2 = score
    }
    highestScoreDisplay.innerText = highestScore2;
  }, "20000");
}

function refrash() {
  location.reload();
}

function increaseScore() {
  score++;
}
