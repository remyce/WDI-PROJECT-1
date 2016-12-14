var Game = Game || {};

// $(Game.setUp().ready(function(){
//   $('btn3').click(function(){
//     Game.reload();
//   });
// };

Game.counter = 0;
// call function to compare the two arrays
// Game.compareArrays = function() {
//   if (this.userSequence.length === this.count)
//   console.log(true);
// };

// // if userSequence.length === this.count <--- 3 === 3
Game.checkSequence = function() {
  // for (var i = 0; i < Game.sequence.length; i++) {
  //   if (Game.sequence.indexOf(Game.userSequence[i]) !== -1) {
  //     Game.counter++;
  //   } else {
  //     Game.counter = 0;
  //     Game.userSequence = [];
  //   }
  //   if (Game.counter === 3){
  //
  //   }
};

Game.hideSequence = function() {
  for (var i = 0; i < this.userSequence.length; i++) {
    $('#' + this.userSequence).removeClass('clicked');
  }
  Game.checkSequence();
};

// add click event to all li's
// if there is a click, push the clicked element into the userSequence array
Game.setUpListeners = function() {
  $('li').on('click', function(){
    $(this).addClass('clicked');

    setTimeout(this.hideUserSequence.bind(this), 1500);
    Game.userSequence.push(this);

  });
  Game.checkSequence();
};

Game.hideSequence = function() {
  for (var i = 0; i < this.sequence.length; i++) {
    $('#' + this.sequence[i]).removeClass('selected');
  }
  this.setUpListeners();
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
  this.base         = 5;
  this.count        = 3;
  this.sequence     = [];
  this.userSequence = [];
  this.sound        = [];
  this.createGrid();
};


$(Game.setUp.bind(Game));
