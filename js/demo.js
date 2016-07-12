var game = new Phaser.Game(1800, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update});
var starVelocity = 400;
var i = 0;


function preload() {
  this.load.image('star', 'assets/star.png');//load the center
  this.load.image('blast', 'assets/blast.png')
}

function create() {

  this.star = this.game.add.sprite(600, 300, 'star');//Add the center
//  this.blast = this.game.add.sprite(this.star.x, this.star.y, 'blast');
//  this.blast.anchor.setTo(0.5, 0.5);
  this.blasts = [];
  this.nextShotAt = 0;
  this.shotDelay = 100;

  this.star.anchor.setTo(0.5, 0.5);
  this.physics.enable(this.star, Phaser.Physics.ARCADE);

}

function update() {
  if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
    this.star.body.velocity.x = - starVelocity;
    if(this.blast != null){
      this.blast.x = this.star.x;
    }
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    this.star.body.velocity.x = starVelocity;
    if(this.blast != null){
      this.blast.x = this.star.x;
    }
  }
  else {this.star.body.velocity.x = 0;
    if(this.blast != null){
      this.blast.x = this.star.x;
    }
  };

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)){
    this.star.body.velocity.y = - starVelocity;
    if(this.blast != null){
      this.blast.y = this.star.y;
    }
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
    this.star.body.velocity.y = starVelocity;
    if(this.blast != null){
      this.blast.y = this.star.y;
    }
  }
  else {this.star.body.velocity.y = 0;
    if(this.blast != null){
      this.blast.y = this.star.y;
    }
  };

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
    if (this.blasts.length >= 2){
      var blastToKill = this.blasts.splice(0,1)[0];
      blastToKill.kill();
    }else if (this.blasts.length < 2 && i < 1){
      this.blast = this.game.add.sprite(this.star.x, this.star.y, 'blast');
      this.blast.scale.setTo(i, i);
      this.blast.anchor.setTo(0.5, 0.5);
      this.blasts.push(this.blast);
      i += 0.01;
    }
    else if (this.blasts.length == 1 && i >= 1){
      this.blast.kill();
      i = 0;
    };
  }

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)){
    var newBlast = new Blast();
    console.log(newBlast);
  }

}
