var extendDeep=require('./inheritance.js');
var Animal=require('./animal.js');

var reptile=extendDeep(Animal);

reptile.feature= function(){ 
        console.log("I like  to laying in the sun.");
    }

module.exports=reptile;