var extendDeep=require('./inheritance.js');
var Animal=require('./animal.js');

var dog=extendDeep(Animal);

dog.play= function(){ 
        console.log("I like playing with people. They give me a ball.");
    }
dog.tail="long and fluffy";
dog.collar="black";

module.exports=dog;