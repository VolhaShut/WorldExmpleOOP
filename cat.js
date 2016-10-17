// function Cat(data){
//     this.paws=data.paws||"4";
//     this.tail=data.tail||"long and fluffy";
    
// }

// Cat.prototype.hunt=function(){
//     console.log("I hunt when I'm hungry. I can catch mouse!");
// }
var mammals=require('./mammals.js');
var extendDeep=require('./inheritance.js');
var Animal=require('./animal.js');

var cat=extendDeep(Animal);

cat.hunt= function(){ 
        console.log("I hunt when I'm hungry. I can catch mouse!");
    }

cat.tail="long and fluffy";
cat.paws="4";

module.exports=cat;