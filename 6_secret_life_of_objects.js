// the core idea in OOP is to divide programs into smaller pieces and make each piece responsible
// for managing its own state
// this way , some knowledge about the way a piece of program works can be kept local to that piece
// someone working on the rest of the program does not have to remember or even be aware of that knowledge
// code changes are local

// differen pieces of a program interact with each other through interfaces, limited sets of functions or bindings that provide useful functionality
// at a more abstract level, hiding their preceis implementation

// objects inferface consists of mehtods and properties
// properties that are part of the interface with other objects are public
// properties which outside code should not touch, are private

// js does not give a way to distinguish between public and private
// typical to use an underscore to name properties that are private

// seprating interface from implementation is a great idea - called encapsulation

// methods are nothing more than properties that hold function values.

// create empty object
let rabbit = {};

// assign method
rabbit.speak = function(line) {
    console.log(`The rabbit says ${line}`);
};

// you can create a function then add it as a method, it will look up the properties needed
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak}

whiteRabbit.speak("howdy");

// prototypes
// another object that is used as a fallback source of properties
// when an object gets a request for the property it does not have, its protottype will get searched

// Object.prototype is behind almost all objects
// empty object's prototype is Object.prototype
Object.getPrototypeOf({}) == Object.prototype

// many objects don't directly inherit from Object.prototype but another object
// functions derive from Function.prototype, arrays from Array.prototype
// these prototypes might have a prototoype as well

// JS's prototype system can be interpreted as a somewhat informal take on an OOP concept called classes
// a class defines the shape of a type object, what methods and properties it has.
// an object is an instance of the class 

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} says '${line}'`);
    }
}

// constructor function
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

// new keyword in front of a function call the function will bet treated as a constructor
function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("howdy");

// constructor function Rabbit - will have function prototype
// when we use new to create a new rabbit object it will have object prototype


// use this way to construct classes
class Rabbit {

    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// class declorations currently only allow methods
// to get properties in there you can manipulate the prototype after you've defined the class

// you can use class keyword in staements and in expressions
let object = new class {getWord() {return "hello";}};
console.log(object.getWord());

// overriding derived properties
// when you specify a property on the object it will create it if it is not present or overwrite the existing one
Rabbit.prototype.teeth = "small";

// blackRabbit and killerRabbit will both have small teeth from the prototype

// give killerRabbit object the teeth property
killerRabbit.teeth = "long, sharp, and bloody";

Rabbit.prototype.teeth // still small


// Maps
// holds data in object much like python dictionary
// using plain objects as maps is dangerous

let ages = {
    Boris: 39,
    Julia: 62
};

ages["Julia"]; //62
ages.Julia // 62

"Julia" in ages; // true
"Jack" in ages; // false
"toString" in ages; // true but we don't want this here

// how to correct
// use Object.create(null) as it does not derive from Object.prototype
let ages1 = Object.create(null);
ages1.Boris = 39;
ages1.Julia = 62;

// or you can use the class called Map that is meant for this
// Maps have set, get, and has methods

let ages = new Map();
ages.set("Boris", 39);
ages.set("Julia", 62);

ages.get("Julia");

ages.has("Jack");

// can use hasOwnProperty to check to see if property is in a normal object

// Polymorphism
// when a piece of code is written to work with objects that have a certain interface. any kind of object
// that supports this interface can be plugged inot the code and it will work
// polymorphic code can work with values ofdifferent shapes as long as they support the interface it expects

// the string function will call the toString method of an object to produce a string of the value

// you can change the toString method in the prototype if you want to change what it returns
Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
};


// symbols
// a way to have unique properties in an object
// not private
let sym = Symbol("name");
sym == Symbol("name"); // flase
Rabbit.prototype[sym] = 55;
blackRabbit[sym];

// iterator interface
// an object that is given to a loop has a method named with the Symbol.iterator
let OkIterator = "OK"[Symbol.iterator](); // returns iterator
OkIterator.next() // next method to get 

// matrix class
// stores content in a single array of w x h
class Matrix {
    constructor(width, height, element = (x,y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for ( let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true};

        let value = {x: this.x,
                     y: this.y,
                     value: this.matrix.get(this.x, this.y)};
        this.x++;

        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

Matrix.prototype.[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

// Getters, Setters, and statics
// it's ok to include properties that hold non-function values to interfaces
// map objects have a size property that tells you how many keys are stored in them

//  getters - properties that are accessed directly but hide the method call
let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

varyingSize.size // call property but runs size method
varyingSize.size() // does not work

// setters - same thing but used when writing

class Temperature {

    // takes celsius when creating
    constructor(celsius) {
        this.celsius = celsius;
    }

    // gets the degrees fahrenheit of current celsius value
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    // takes degrees in F then converts to C and stores in object
    set fahrenheit(value) {
        this.celsius = ( value-32 ) / 1.8;
    }

    // attached to the constructor
    // allows user to create new object using F value
    static fromFahrenheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}


let temp = new Temperature(32);
temp.celsius // 32
temp.fahrenheit // 89.6
temp.fahrenheit = 212; 
temp.celsius // 100 - since we used setter
Temperature.fromFahrenheit(100); // returns a new Temperature
let newF = Temperature.fromFahrenheit(100);

// The static keyword defines a static method for a class.
// Static methods are called without instantiating their class and cannot
// be called through a class instance. Static methods are often used to create utility functions for an application.

// Inheritance
// you can create a new class that has the methods and properties from the parent class
// would add a new method for get and sets
class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x,y) => {
            if (x < y ) return element(y, x);
            else return element(x,y);
        });
    }

    set(x, y, value) {
        super.set(x,y,value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let matrix = new SymmetricMatrix(5, (x,y) => `${x}, ${y}`);
console.log(matrix.get(2,3));

// instanceof can tell you what an object was derived from