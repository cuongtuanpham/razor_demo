class Blast{
  constructor(){
    this.sprite = game.add.sprite(900, 400, 'blast');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.scale.setTo(i, i);
    i += 0.01;
  }
}
