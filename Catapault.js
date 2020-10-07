class Catapault{
    constructor(body1,body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 10,
            stiffness : 0.06
        } 
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        push()
        strokeWeight(10)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}
