var cat=require('./cat.js');
var dog=require('./dog.js');
var reptile=require('./reptile.js');

var lizard=reptile;
    lizard.species="lizard";
    lizard.color="green";
    lizard.introduce();
    lizard.feature();

var kitten=cat;
    kitten.species="cat";
    kitten.color="brown";
    kitten.sound="meow";
    kitten.introduce();
    kitten.hunt();

var puppy=dog;
    puppy.species="dog";
    puppy.color="white";
    puppy.sound="woof";
    puppy.introduce();
    puppy.play();


