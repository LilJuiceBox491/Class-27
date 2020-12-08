class Chain{
    constructor(bodyA,bodyB){
        var op ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 5,
            length: 7
        }
        this.chain=Constraint.create(op);
        World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(5);
        stroke('Blue');
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}