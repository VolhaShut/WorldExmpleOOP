var Animal={
    genus:"Animal",
    species:"none",
    color:"none",
    sound:"silent",
    introduce: function(){
        console.log("Hello. I am "+this.species+".");
        console.log("I belong to "+this.genus+".");
        console.log("I have "+this.color+"color and I like it:)");
        console.log("Also I can make sound: "+ this.sound+".");
    },
    move: function(move){
        console.log("This animal moves something like this "+move);
    }
};



module.exports=Animal;