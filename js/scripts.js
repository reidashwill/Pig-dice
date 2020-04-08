// Business logic for Player----------------------------

function Player(){
  this.turnScore = [];
  this.totalScore = [];
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
  
}