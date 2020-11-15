class Drops {

    constructor(x, y){

        this.drops = null
        this.drops.velocityY = 80;
        this.x = x;
        this.y = y;
    }

    update(){
        if (this.drops.y = 800){
            this.drops.y = 50;
        }
    }

    makeEllipse(){
        
    }

    display (){

        this.x.positition.x(30);
        this.y.positition.y(50);
        this.drops.display();
        update();
        makeEllipse();

    }

};