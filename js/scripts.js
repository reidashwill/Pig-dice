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
console.log(playerOne.turnScore)
var playerTwo = new Player;

// playerTwo.assignId()
console.log(playerOne)
console.log(playerTwo)

$(document).ready(function(){
  // attatchContactListeners();
  $("#roll-button").click(function(event){
    event.preventDefault();
    var rollScore = rollDie();
    playerOne.turnScore.push(rollScore);
    console.log(rollScore);
    console.log(playerOne);
    $('#output-number').append(' ' + rollScore);
  })
  $("#hold-button").click(function(event){
    event.preventDefault();
    var roundScoreHolder = playerOne.turnScore.reduce(function(a, b) {
      return a + b
    })
    playerOne.turnScore.length = 0;
    playerOne.totalScore += roundScoreHolder
    console.log(roundScoreHolder)
    console.log(playerOne);
  })
})

// working on line 41, clear out turn score array after pushing to total score.
//Next step address the rolling 1 rule