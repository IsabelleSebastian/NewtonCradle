class chain{
    constructor(body1 , body2, offsetX, offsetY){

        this.offsetX = offsetX 
        this.offsetY = offsetY
        var option = {
            bodyA : body1,
            bodyB : body2,
            pointB :{x: this.offsetX, y: this.offsetY},
            stiffness:0.3, //if it's <0.7 = flexible
            length:400

        }
        this.chan = Constraint.create(option)
        World.add(world,this.chain)
    }
    
display(){

    
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position

    strokeWeight(2)
    line(pointA.x,pointA.y,pointB.x + this.offsetX,pointB.y + this.offsetY);

    //line(x1,y1,x2,y2)

}

}