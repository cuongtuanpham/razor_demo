var game = new Phaser.Game(1800, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update, fire: fire});
var starVelocity = 50;
var i = 0.5;


function preload() {
  this.load.image('star', 'assets/star.png');//load the center
  this.load.image('blast', 'assets/blast.png')
}

function create() {

  this.star = this.game.add.sprite(600, 300, 'star');//Add the center
//  this.blast = this.game.add.sprite(this.star.x, this.star.y, 'blast');
//  this.blast.anchor.setTo(0.5, 0.5);
//  this.blast.scale.setTo(i, i);
//  this.physics.enable(this.blast, Phaser.Physics.ARCADE);
  this.blasts = [];
  this.nextShotAt = 0;
  this.shotDelay = 100;

  this.star.anchor.setTo(0.5, 0.5);
  this.physics.enable(this.star, Phaser.Physics.ARCADE);

}

function fire(){
  if (this.nextShotAt > this.time.now){
    return;
  }
  this.nextShotAt = this.time.now + this.shotDelay;

  this.blast = this.game.add.sprite(this.star.x, this.star.y, 'blast');
  this.blast.anchor.setTo(0.5, 0.5);
  this.physics.enable(this.blast, Phaser.Physics.ARCADE);
//  if (i < 2){
    this.blast.scale.setTo(i, i);
  //  i += 0.5;
//  }else {this.blast.destroy()};

  this.blasts.push(this.blast);
  console.log(this.blasts);
}

function update() {
  if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
    this.star.body.velocity.x -= starVelocity;
    if(this.blast != null){
      this.blast.body.velocity.x = this.star.body.velocity.x;
    }
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    this.star.body.velocity.x += starVelocity;
    if(this.blast != null){
      this.blast.body.velocity.x = this.star.body.velocity.x;
    }
  }
  else {this.star.body.velocity.x = 0;
    if(this.blast != null){
      this.blast.body.velocity.x = this.star.body.velocity.x;
    }};

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)){
    this.star.body.velocity.y -= starVelocity;
    if(this.blast != null){
      this.blast.body.velocity.y = this.star.body.velocity.y;
    }
  }
  else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
    this.star.body.velocity.y += starVelocity;
    if(this.blast != null){
      this.blast.body.velocity.y = this.star.body.velocity.y;
    }
  }
  else {this.star.body.velocity.y = 0;
    if(this.blast != null){
      this.blast.body.velocity.y = this.star.body.velocity.y;
    }};

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
      this.fire();
  }

}
