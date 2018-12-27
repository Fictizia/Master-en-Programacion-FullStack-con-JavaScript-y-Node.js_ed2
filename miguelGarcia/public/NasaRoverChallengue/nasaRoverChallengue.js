
function calcule(value){

    if (value === "M"){rover.obtainPosition(1)};
    if (value === "R"){rover.obtainDir(1)};
    if (value === "L"){rover.obtainDir(-1)};

}

class Position {

    constructor(x,y,dir,max){
        this.x = x ;
        this.y = y;
        this.dir = dir;
        this.sum = 0;
        this.directions  = ['N','E','S','W'];
        this.max = max;
    }
    obtainDir(turn) {   
        this.sum += turn;
        
        if (this.sum === 4){this.sum = 0};
        if (this.sum === -1) {this.sum = 3};
        
        
        this.dir = this.directions[this.sum];
      
    }
    obtainPosition(avance){

        if (this.dir === "N") {this.y += avance;}
        if (this.dir === "S") {this.y -= avance;}
        if (this.dir === "W") {this.x -= avance;}
        if (this.dir === "E") {this.x += avance;}
        if ((this.x > this.max) || (this.x < 0)) {console.log("the Rover is out of plateau")};
        if ((this.y > this.max) || (this.y < 0)) {console.log("the Rover is out of plateau")};
        
        
    }
}


function setup(size,init,moves){

x = init.split(" ")[0];
y = init.split(" ")[1];
dir = init.split(" ")[2];
rover = new Position(x,y,dir,size);
rover.sum = rover.directions.indexOf(init.split(" ")[2]);    
moves.forEach(calcule);

console.log(`${rover.x} ${rover.y} ${rover.dir}`);
}







