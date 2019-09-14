// expression - fragment of code that produces a value
// 22 or "psychoanalysis"
// expressions can contain other expressions

// expression is sentance fragment where statement is full sentence
// statement ends in semicolin
1;
!false;

// side effects - changes to the internal state of the machine in a way that will affect the statements that come after it

// bindings or variables - catch and holds values
let caught = 5 * 5;
// let indicates that this sentence defines a binding 
// binding can then be used as an expression to reference the values
console.log(caught);

// = is assignment operator
// can point binding to a new value
let mood = "light";
mood = "dark";

// bindings are like tentacles, not boxes, they do not contain values they grasp them

// use one let statement to define multiple bindings
let one = 1, two = 2;

// can use var and const to create bindings as well
// var used in pre-2015 JS
// const defines a constant which will not change for its lifetime

// binding names must not start with a digit, can contain _ and $ but no other characters
// avoid reserved words

// environment - collection of bindings and their values that exist at any given time
// when a program starts it always contains the launguage standard bindings

// function - piece of code wrapped in a value, they are applied to run the program
prompt("Enter passcode");
// functions are called, invoked, applied
// values given to functions are called arguments

// console.log();
// writes out arguments to some text ouput device - js console

// return values
// functions produce side effects - writing text, values, etc...

// control flow - statements are executed from top to bottom

// Conditional execution - if
let theNumber = Number(prompt("pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
}

// braces group a number of statements into a block 
// else can be added to give alternative path

let num = Number(prompt("Pick a number"));
if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}

// loop - control flow that runs a piece of code multiple times
// while evaluates expression then runs loop
// do executes at least once, then evaluates expression
let number = 0;
while (number <= 12) {
    console.log(number);
    number += 2;
}

let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// indentation makes code organized and easy to read, spaces are not required in JS
// for loops
// initialize, check, update state of loop
for (let num = 0; num <= 12; num ++) {
    console.log(num);
}

// breaking out of loop
// for loop does not have test expression so it will run forever
// % is remainder operator, modulo
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

// continue jumps out of the body and continues with the next loop iteration

// updating bindings succintly
counter = counter + 1;
counter += 1;
counter++;
// also use -=, %=, *=

// switch - reduces lots of if, else if's
switch (prompt("what's the weather like?")) {
    case "rainy":
        console.log("get an umbrella");
        break;
    case "sunny":
            console.log("wear shorts");
            break;
    case "cloudy":
            console.log("go outside");
            break;
    default: 
        console.log("Unknown weather type!");
        break;
}

// use camel case for binding names - fuzzyLittleTurtle
// constructors should be pascal case - FuzzyLittleTurtle

// comments
// single line
/* multiple line
comment */

// Exercises 

// looping a triangle
let string_length = 0;
let string = "";
while (string_length <= 7) {
    console.log(string);
    string = string + "#";
    string_length += 1;
}

let string = "#######";
let counter = 0;
while (counter <= string.length) {
    console.log(string.slice(0,counter));
    counter += 1;
}

// fizzbuzz
counter = 0;
while(counter <= 100) {
    let string = "";
    if (counter % 3 == 0) {
        string = string + "Fizz";
    }
    if (counter % 5 == 0) {
        string = string + "Buzz";
    }
    if (!string) {
        console.log(counter);
    } else {
        console.log(string);
    }
    counter += 1;
}

let size = 4;
let chessboard = function(size) {
    let counter = 0;
    let string = "";
    while (counter < size) {
        
        insideCounter = 0;

        if (counter % 2 == 0) {
            while (insideCounter < size) {
                string = string + "# ";
                insideCounter += 1;
            }
            string = string + "\n";
        } else {
            while (insideCounter < size) {
                string = string + " #";
                insideCounter += 1;
            }
            string = string + "\n";
        }

        counter += 1;
    }
    return string;
}

console.log(string);
