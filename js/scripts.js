// Business logic for Player----------------------------

function Player(){
  this.turnScore = [];
  this.totalScore = 0;
  this.currentId = 0;
}

// Business logic------------------------------

var rollDie = function(){
  if((Math.floor(Math.random() * 6) + 1) === 1){ 
   return playerOne.turnScore.length = 0 && $('#hold-button').trigger('click');
  }else{
    return Math.floor(Math.random() * 5) + 2;
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
    var rollScore = rollDie();
    playerOne.turnScore.push(rollScore);
    console.log(rollScore);
    console.log(playerOne);
    $('#p1-turn-score').append(' ' + rollScore);
  })

  $("#p1-hold-button").click(function(event){
    event.preventDefault();
    var roundScoreHolder = playerOne.turnScore.reduce(function(a, b) {
      return a + b
    })
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
    var rollScore = rollDie();
    playerTwo.turnScore.push(rollScore);
    console.log(rollScore);
    console.log(playerTwo);
    $('#p2-turn-score').append(' ' + rollScore);
  })

  $("#p2-hold-button").click(function(event){
    event.preventDefault();
    var roundScoreHolder = playerTwo.turnScore.reduce(function(a, b) {
      return a + b
    })
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