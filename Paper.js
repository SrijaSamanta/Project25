class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r/2,option);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("sprites/paper.png");
        World.add(world, this.body);
    }
    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        image(this.image,0,0,this.r,this.r);
        pop();

    };
};