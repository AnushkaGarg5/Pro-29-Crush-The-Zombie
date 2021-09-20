class Stone{
    constructor(x,y,r){
    this.x = x
    this.y = y
    this.r = r
    
    
    var options = {isSatatic : false , restitution : 0.8}
    this.body = Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    }
    show(){
       var pos = this.body.position
       
       push ()
       fill("white")
       ellipse(pos.x , pos.y,80)
       pop()
    

}
}