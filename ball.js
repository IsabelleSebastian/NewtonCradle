class ball {
    constructor(x,y,radius){
        var options = {      
            restitution: 0.3,
            density: 0.3,
            friction: 0,
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position
    
    push();
    translate(pos.x,pos.y)
    fill("lightblue")
    strokeWeight(0.1);
    ellipseMode(CENTER)
    ellipse(0,0,this.radius,this.radius)
    pop();
    }
    }