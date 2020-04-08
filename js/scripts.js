// Business logic for Player----------------------------

function Player(){
  this.turnScore = 0;
  this.totalScore = 0;
  this.currentId = 0;
}

Player.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId
}

// Business logic for Score------------------------------

function Score(turnScore, totalScore) {
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Score.prototype.rollDie = function(){
  Math.floor(Math.random() * 6) + 1;
  
}

Score.prototype.addTurnScore = function(rollScore, turnScore) {
  var newTurnScore = (rollScore + turnScore)
}

// UI logic ---------------------------------------------

$(document).ready(function(){
  $("#roll-button").click(function(event){
    event.preventDefault();
    var turnRoll = rollDie();
    console.log(turnRoll);
    
  })
  
})