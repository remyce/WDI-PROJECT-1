//load the document
// $(start);

var Game = Game || {};

Game.counter = 0;
// call function to compare the two arrays
// Game.compareArrays = function() {
//   if (this.userSequence.length === this.count)
//   console.log(true);
// };
Game.showUserSequence = function (){

};

// if there is a click, push the clicked element into the userSequence array
Game.checkSequence = function() {
  for (var i = 0; i < Game.sequence.length; i++) {
    if (Game.sequence.indexOf(Game.userSequence[i]) !== -1) {
      Game.counter++;
    } else {
      Game.counter = 0;
      Game.userSequence = [];
    }
    if (Game.counter === 3) {
      
    }
  }

};

// add click event to all li's
Game.addListeners = function() {
  $('li').on('click', function(){
    $(this).addClass('clicked');
    Game.userSequence.push(this.id);
    Game.checkSequence();
  });
  // if there is a click, push the clicked element into the userSequence array
  // if userSequence.length === this.count <--- 3 === 3
  // call function to compare the two arrays
};

Game.hideSequence = function() {
  for (var i = 0; i < this.sequence.length; i++) {
    $('#' + this.sequence[i]).removeClass('selected');
  }
  this.addListeners();
};

Game.showSequence = function() {
  for (var i = 0; i < this.sequence.length; i++) {
    $('#' + this.sequence[i]).addClass('selected');
  }

  setTimeout(this.hideSequence.bind(this), 1500);
};

Game.pickRandom = function() {
  for (var i = 0; i < this.count; i++) {
    var box = $('li')[Math.floor(Math.random()*$('li').length)].id;
    this.sequence.push(box);
  }

  this.showSequence();
};

Game.createGrid = function() {
  for (var i = 0; i < this.base * this.base; i++) {
    $('ul').append('<li id="' + i + '"></li>');
  }

  Game.pickRandom();
};

Game.setUp = function() {
  this.base         = 4;
  this.count        = 3;
  this.sequence     = [];
  this.userSequence = [];

  this.createGrid();
};


$(Game.setUp.bind(Game));

// function start(){

// var dots = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad];



//computer shows random squares

//then board changes back to original bg

//listens for player to click the correct squares

//if correct computer plays on following original sequence

//if uncorrect player starts from the beginning

// }

// var Game = Game || {};
//
// Game.sequence       = [];
// Game.guess          = [];
// Game.gridBase       = 4;
// Game.sequenceLength = 4;
// Game.width          = 400;
//
// Game.createGrid     = function () {
//   var body          = document.getElementsByTagName('body')[0];
//   var grid          = document.createElement('ul');
//   body.appendChild(grid);
//   for (var i = 0; i < Game.gridBase*Game.gridBase; i++) {
//     var square = document.createElement('li');
//     square.style.width = Game.width / Game.gridBase + 'px';
//     square.style.height = Game.height / Game.gridBase + 'px';
//     grid.appendChild(square);
//   }
// };
//
// Game.chooseSequence = function()  {
//   for (var i = 0; i < Game.sequenceLength; i++){
//     Game.combination.push(Game.randomSequenceNumber());
//   }
//   console.log(Game.sequence);
//   Game.lightUp();
// };
//
// Game.randomSequenceNumber = function()  {
//   return Math.round(Math.random()*(Game.gridBase * Game.gridBase) -1);
// };
//
// Game.lightUp = function (){
//
// };
//
// Game.start = function() {
//   Game.createGrid();
// };
//
// document.addEventListener('DOMContentLoaded', Game.start);
