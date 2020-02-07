var playerSelection = ""
var randomChosen = ""
var chosen = ["paper", "rock", "scissors", "lizard", "spock"]
var score = 0;

$(".circle").click(function() {
  $(".game-icon").fadeOut(0);
  $(".result").fadeIn(0);

  playerSelection = event.currentTarget.className.split(" ")[0];
  randomChosen = randomChoose();
  // create player's choice
  $(".player-selection").addClass(playerSelection + " circle");
  $(".player-selection").append("<img src='images/icon-" + playerSelection +
  ".svg' alt='" + playerSelection + "'>");

  // create computer's choice
  $(".pc-selection").addClass(" box").fadeOut(1000).fadeIn(1000).fadeOut(1000);


  setTimeout(function(){
    $(".result").css("display","none");
    $(".result-box").css("display","block");
    $(".pc-selection").removeClass("box");
    $(".pc-selection").addClass(randomChosen + " circle").fadeIn(0);
    $(".pc-selection").append("<img src='images/icon-" + randomChosen +
    ".svg' alt='" + randomChosen + "'>");
    checkAnswer(playerSelection, randomChosen);
    $(".score").html(score)
  },3500);
});

$(".result-btn").click(function() {
  $(".game-icon").css("display","block");
  $(".result-box").css("display","none");
  $(".player-selection").empty();
  $(".player-selection").removeClass(playerSelection + " circle");
  $(".pc-selection").empty();
  $(".pc-selection").removeClass(randomChosen + " circle");
})

function randomChoose() {
  var randomNumber = Math.floor(Math.random() * 5);
  var randomChosen = chosen[randomNumber];
  return randomChosen
}

function checkAnswer(playerSelection, randomChosen) {
  switch (playerSelection) {
    case "paper":
      switch (randomChosen) {
        case "paper":
          draw();
          break;
        case "rock":
          win();
          break;
        case "scissors":
          lose();
          break;
        case "lizard":
          lose();
          break;
        case "spock":
          win();
          break;
        default:
          console.log("undefined error")
      }
      break;

    case "rock":
      switch (randomChosen) {
        case "paper":
          lose();
          break;
        case "rock":
          draw();
          break;
        case "scissors":
          win();
          break;
        case "lizard":
          win();
          break;
        case "spock":
          lose();
          break;
        default:
          console.log("undefined error")
      }
      break;

    case "scissors":
      switch (randomChosen) {
        case "paper":
          win();
          break;
        case "rock":
          lose();
          break;
        case "scissors":
          draw();
          break;
        case "lizard":
          win();
          break;
        case "spock":
          lose();
          break;
        default:
          console.log("undefined error")
      }
      break;

    case "lizard":
      switch (randomChosen) {
        case "paper":
          win();
          break;
        case "rock":
          lose();
          break;
        case "scissors":
          lose();
          break;
        case "lizard":
          draw();
          break;
        case "spock":
          win();
          break;
        default:
          console.log("undefined error")
      }
      break;

    case "spock":
      switch (randomChosen) {
        case "paper":
          lose();
          break;
        case "rock":
          win();
          break;
        case "scissors":
          win();
          break;
        case "lizard":
          lose();
          break;
        case "spock":
          draw();
          break;
        default:
          console.log("undefined error")
      }
      break;


    default:
  }
}

// Win alert
function win() {
  score += 1;
  $(".game-result").html("YOU WIN");
}

// Lose alert
function lose() {
  score = 0;
  $(".game-result").html("YOU LOSE");
}

// Draw alert
function draw() {
  $(".game-result").html("DRAW");
}
