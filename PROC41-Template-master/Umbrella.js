class Umbrella {
    constructor(x, y,d,w,h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y,d/2, options);
        this.image = loadImage("walking_1.png");
        this.width = w;
        this.height = h;
       World.add(world, this.body);
    };
    display() {
        push();
       // translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        // console.log(this.width);
        // console.log(this.height);
        image(this.image, this.body.position.x, this.body.position.y, this.width/5, this.height/5);
        pop();

      }


    }
