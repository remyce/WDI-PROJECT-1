var Game = Game || {};

Game.counter = 0;

Game.checkSequence = function(id) {
  if (parseInt(id) === this.sequence[this.userSequence.length]) {
    $('h2').text('Correct!');
    setTimeout(function(){
      $('h2').text('Get ready...');
    }, 500);
    this.userSequence.push(id);
    if (this.userSequence.length === this.sequence.length) {
      $('li').off('click', this.playSound);
      this.count        += 1;
      this.sequence     = [];
      this.userSequence = [];
      this.pickRandom();
    }
  } else {
    $('h2').text('Wrong!');
    setTimeout(function(){
      $('h2').text('Get ready...');
    }, 500);
    $('li').off('click', this.playSound);
    this.sequence     = [];
    this.userSequence = [];
    this.pickRandom();
  }
};

Game.playSound = function playSound(){
  var id = $(this).attr('id');
  var audio = new Audio('../music/' + id + '.mp3');
  $('#' + id).addClass('selected');
  audio.play();

  $(audio).on('ended', function() {
    $('#' + id).removeClass('selected');
    Game.checkSequence(id);
  });
};

// add click event to all li's
// if there is a click, push the clicked element into the userSequence array
Game.setUpListeners = function() {
  $('li').on('click', this.playSound);
};

Game.showSequence = function(index) {
  if (!this.sequence[index]) {
    return this.setUpListeners();
  }

  var nextIndexInSequence = this.sequence[index];
  var audio = new Audio('../music/' + nextIndexInSequence + '.mp3');
  $('#' + nextIndexInSequence).addClass('selected');
  audio.play();

  $(audio).on('ended', function() {
    $('#' + nextIndexInSequence).removeClass('selected');
    Game.showSequence(index+1);
  });
};

Game.pickRandom = function() {
  for (var i = 0; i < this.count; i++) {
    var randomNumber = Math.floor(Math.random() * (this.base*this.base-1));
    this.sequence.push(randomNumber);
  }

  console.log(this.sequence)

  setTimeout(function(){
    $('h2').text('Get ready...');
  },500);

  // Recursively play sounds
  this.showSequence(0);
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
