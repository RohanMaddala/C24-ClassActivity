class Bird {
    constructor (x, y){

        var body_options = {
            restitution : 0.6,
            friction : 1.0
        }
        
        this.body = Bodies.rectangle(x,y,50,50, body_options);
        
        this.width = 50;
        this.height = 50;
        
        World.add (world, this.body);
        
    }

    display(){
        
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;


        push(); //saves the previous setting

        //changes the origin
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill ("red");
        rect(0, 0, this.width, this.height);
        
        pop();  //goes back to previous setting
    }
}