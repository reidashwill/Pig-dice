// Business logic for Player----------------------------

function Player(){
  this.turnScore = [];
  this.totalScore = [];
  this.currentId = 0;
}

// Business logic------------------------------

var rollDie = function(){
return Math.floor(Math.random() * 6) + 1;

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
    var totalScoreHolder = playerOne.turnScore.reduce(function(a, b) {
      return a + b
    })
    playerOne.totalScore.push(totalScoreHolder);
    playerOne.turnScore.delete()
    console.log(totalScoreHolder)
    console.log(playerOne);
  })
})