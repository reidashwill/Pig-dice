// Business logic for Player----------------------------

function Player(){
  this.turnScore = [];
  this.totalScore = 0;
  this.currentId = 0;
  this.rollScore = 0;
}

// Business logic------------------------------

var rollDie = function(){
  if ((Math.floor(Math.random() * 6) + 1) === 1 && playerTwo.rollScore === 0) {
    $("#p1-hold-button").trigger("click")
    return 0
  }else if((Math.floor(Math.random() * 6) + 1) === 1 && playerOne.rollScore === 0){
    $("#p2-hold-button").trigger("click")
    return  0
  } else {
    return Math.floor(Math.random() * 5) + 2
  }
}
// UI logic---------------------------------------------

var playerOne = new Player;
var playerTwo = new Player;

$(document).ready(function(){
  // attatchContactListeners();
  $("#p1-roll-button").click(function(event){
    $(".p2-zone").hide()
    event.preventDefault();
    playerOne.rollScore = rollDie();
    playerOne.turnScore.push(playerOne.rollScore);
    console.log(playerOne.rollScore);
    console.log(playerOne);
    if(playerOne.rollScore === 0){
      $('#p1-turn-score').append(' ' + 1);
    }else{
    $('#p1-turn-score').append(' ' + playerOne.rollScore);
    }
  })

  $("#p1-hold-button").click(function(event){
    event.preventDefault();
    var roundScoreHolder = playerOne.turnScore.reduce(function(a, b) {
      return a + b
    })
    playerOne.rollScore = 0;
    playerTwo.rollScore = 0;
    playerOne.turnScore.length = 0;
    playerOne.totalScore += roundScoreHolder
    console.log(roundScoreHolder)
    console.log(playerOne);
    $(".p1-zone").hide()
    $(".p2-zone").show()
    
  })
  
  $("#p2-roll-button").click(function(event){
    event.preventDefault();
    $(".p1-zone").hide()
    playerTwo.rollScore = rollDie();
    playerTwo.turnScore.push(playerTwo.rollScore);
    console.log(playerTwo.rollScore);
    console.log(playerTwo);
    if(playerTwo.rollScore === 0){
      $('#p2-turn-score').append(' ' + 1);
    }else{
    $('#p2-turn-score').append(' ' + playerTwo.rollScore);
    }
  })

  $("#p2-hold-button").click(function(event){
    event.preventDefault();
    var roundScoreHolder = playerTwo.turnScore.reduce(function(a, b) {
      return a + b
    })
    playerOne.rollScore = 0;
    playerTwo.rollScore = 0;
    playerTwo.turnScore.length = 0;
    playerTwo.totalScore += roundScoreHolder
    console.log(roundScoreHolder)
    console.log(playerTwo);
    $(".p2-zone").hide()
    $(".p1-zone").show()
    
  })
})

// total score counter
// show dice rolls for current turn
// make a result of 0 show as one
// win condition
// style it