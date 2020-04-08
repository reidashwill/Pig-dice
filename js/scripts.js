// Business logic for Player----------------------------

function Player(){
  this.turnScore = [];
  this.totalScore = [];
  this.currentId = 0;
}


Player.prototype.rollPush = function(rollScore) {
  console.log(rollScore);
this.turnScore.push(rollScore);
}



// Player.prototype.assignId = function() {
//   this.currentId +=1;
//   return this.currentId
// }

// Business logic------------------------------

var rollDie = function(){
return Math.floor(Math.random() * 6) + 1;

}
// UI logic---------------------------------------------
var playerOne = new Player;
console.log(playerOne.turnScore)
var playerTwo = new Player (turnScore,totalScore,1);
// playerTwo.assignId()
console.log(playerOne)
console.log(playerTwo)

for (var i= 0; i < 2; i++){

}

$(document).ready(function(){
  // attatchContactListeners();
  $("#roll-button").click(function(event){
    event.preventDefault();
    var rollScore = rollDie();
    console.log(rollScore)
    console.log(playerOne)
  })
})