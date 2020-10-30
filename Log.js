class Log {
    constructor (x, y, height,angle){

        var body_options = {
            restitution : 0.6,
            friction : 1.0

        }
        
        this.body = Bodies.rectangle(x,y,20,height, body_options);
        
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle)
        
        World.add (world, this.body);
        
    }

    display(){

        
        push(); //saves the previous setting

        //changes the origin
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill ("white");
        rect(0, 0, this.width, this.height);
        
        pop();  //goes back to previous setting
    }
}