class Drop {
    constructor(x, y,d,w,h) {
        var options = {
            isStatic: false,
               //restitution:1.5,
               friction:0 
               //density:0.1,
               //gravity:0.00001   
        }
        this.body = Bodies.circle(x, y,d/2, options);
        this.image = loadImage("Dropqwe.png");
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
