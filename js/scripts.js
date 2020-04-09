// Business logic for Player----------------------------

function Player(){
  this.turnScore = 0;
  this.totalScore = 0;
  this.rollScore = 0;
  this.playerName = "";
}

// Business logic------------------------------

var rollDie = function(){
  var roll = (Math.floor(Math.random() * 6) + 1);
  if (roll === 1 && playerTwo.rollScore === 0) {
    playerOne.rollScore = 0;
    $("#p1-hold-button").trigger("click")
    return 0;  
  }else if(roll === 1 && playerOne.rollScore === 0){
    playerTwo.rollScore = 0;
    $("#p2-hold-button").trigger("click")
    return 0;
  } else {
    return roll;
  }
}
Player.prototype.winning = function() {
  if (this.totalScore >= 100){
    $("#winners-circle").append(this.playerName + " wins!")
  }
}
Player.prototype.giveName = function(placeholder){
  this.playerName = placeholder;
}

// UI logic---------------------------------------------

var playerOne = new Player();
playerOne.giveName("Player One")
var playerTwo = new Player();
playerTwo.giveName("Player Two")
console.log(playerOne);

$(document).ready(function(){
  // attatchContactListeners();
  $("#p1-roll-button").click(function(event){
    $(".p2-zone").hide()
    event.preventDefault();
    playerOne.rollScore = rollDie();
    playerOne.turnScore += playerOne.rollScore;
    console.log("playerOne turn score at roll button", playerOne.turnScore);
    console.log(playerOne);
    if(playerOne.rollScore === 0){
      $('#p1-turn-score').append(' ' + 1);
    }else{
      $('#p1-turn-score').append(' ' + playerOne.rollScore);
    }
  })

  $("#p1-hold-button").click(function(event){
    event.preventDefault();
    console.log("p1 Rollscore: ", playerOne.rollScore)
    if(playerOne.rollScore === 0){
      playerOne.turnScore = 0;
      playerTwo.rollScore = 0;
      
        $(".p1-zone").hide()
        $(".p2-zone").show()
        $("#p1-total-score").html('')
        $("#p1-total-score").append(playerOne.totalScore);
      }else{
        playerOne.rollScore = 0;
        playerTwo.rollScore = 0;
        playerOne.totalScore += playerOne.turnScore
        playerOne.turnScore = 0;
        console.log("playerOne turn score at hold button", playerOne.turnScore)
        console.log("player one log", playerOne);
        $(".p1-zone").hide()
        $(".p2-zone").show()
        $("#p1-total-score").html('')
        $("#p1-total-score").append(playerOne.totalScore);
        playerOne.winning();
      }
  })
  
  $("#p2-roll-button").click(function(event){
    event.preventDefault();
    $(".p1-zone").hide()
    playerTwo.rollScore = rollDie();
    
    playerTwo.turnScore += playerTwo.rollScore;
    console.log(playerTwo.rollScore);
    console.log("player two log", playerTwo);
    if(playerTwo.rollScore === 0){
      $('#p2-turn-score').append(' ' + 1);
    }else{
    $('#p2-turn-score').append(' ' + playerTwo.rollScore);
    }
  })

  $("#p2-hold-button").click(function(event){
    event.preventDefault();
    if(playerTwo.rollScore === 0){
      playerOne.rollScore = 0;
      playerTwo.turnScore = 0;
      $(".p2-zone").hide()
      $(".p1-zone").show()
      $("#p2-total-score").html('')
      $("#p2-total-score").append(playerTwo.totalScore);
    }else{
      playerOne.rollScore = 0;
      playerTwo.rollScore = 0;
      playerTwo.totalScore += playerTwo.turnScore
      playerTwo.turnScore = 0;
      console.log("player two roll score at p2 hold button", playerTwo.totalScore)
      console.log(playerTwo);
      $(".p2-zone").hide()
      $(".p1-zone").show()
      $("#p2-total-score").html('')
      $("#p2-total-score").append(playerTwo.totalScore);
      playerTwo.winning();
    }
  })  
})


// total score counter
// show dice rolls for current turn
// win condition
// style it