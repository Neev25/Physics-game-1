class snake{
    constructor(x, y, width, height     ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
        this.image = loadImage("images/snake.png")
        this.image.resize(450,450);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}