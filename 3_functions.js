/*functions give us a way to structure larger programs, to reduce repetition,
to associate names with subprograms, and to isolate these subprograms from each other */

// defining
// regular binding where the bvalue is a function
const square = function(x) {
    return x * x;
};

// functions have a set of parameters(x above) and a body which
// contains statements that are executed when the functio gets called

// some functions return a value and some produce a
// side effect (console.log) - change to application state

// without a return value a function will return undefined

// scope - part of the program where the binind is visible
// if a variable is defined outside of any function or block the scope is the whole program(global)
// variables within a block are local
// let and const are always local
// var is global even when defined in function
// each scope can look out into the scope around it
// if there are naming conflicts the most local one will be used

// functions as values
// function binding ususally acts as a name for a specific piece of the program
// makes it easy to confuse the function and its name
// a function value can do all the things that other values can do - use it in expressions, pass it as an argument to another function

// declaration Notation
// shorter way to create a function binding

function square(x) {
    return x * x;
}

// defines binding square and points it to the given function
// function declarations are not part of the regular top-to-bottom flow of control
// so it can be called before it is defined

// arrow functions
// uses => instead of function keyword
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

// if there is only one parameter you can omit the parentheses
// if body is sing expression you can omit the braces and the return
const square = x => x * x;

// no real reason to have arrow functions and function expressions in the language, they do the same thing

// the call stack
// the computer remembers the context from which the call happens, stores this info in the call stack

// optional arguements
// functions ignore optional arguments
// if you don't supply a required argument the value will be passed as undefined
// to assign a default value use = after the parameter

const square = x => x * x;
square(4, true, "hi"); // returns 16

const minus = (a, b) => {
    if (b === undefined) return -a;
    else return a-b;
};

const power = (base, exponent = 2) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

// closure
// the ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called
// you can define a function that creates a local binding, it then returns a function that accesses and returns this local binding

const wrapValue = n => {
    let local = n;
    return () => local;
};

// being able to reference a specific instance of a local binding in an enclosing scrope is called closure. A fgunction that references bindings from local scopes around it is called a closure

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// a good mental model is to think of function values as containing  both the code in their body and the environment in which they are created.
// when called, the function body sees the environment in which tit was created, not the enviroment in which it is called

// recursion - when a function calls itself
// a recursive function

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent-1);
    }
}

// looping is generally faster than recursion
// think about what is most correct and easy to read not speed, unless there is a large difference

// growing functions
// two more or less natural ways for functions to be introduced into programs
// if you find yourself writing similar code multiple times
// if you find you need some functionality that you haven't written yet and that sounds like it deserbves its own function.
// how difficult it is to find a good name for a function is a good indication of how clear a concept it is that you're trying to wrap

// write a function that prints two numbers: numbers of cows and chickens on a farm, followed by a label
// as well as padding zeros so they are always 3 digits long

// first attempt
// what happens if we want to also print pigs?

function printFarmInventory(cows, chickens) {

    let cowString = String(cows);
    while (cowString.length > 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    while (chickenString.length > 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

// second attempt, include pigs
// it works but printZeroPaddedWithLabel is awkward - it does three things, printing, zero-padding, and adding a label
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length > 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {

    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");

}

printFarmInventory(3,11,7);

// third attempt
// let's try to pick out a single concept
// zeroPad makes it easier to understand and is more useful in other situations

function zeroPad(number, width) {

    let string = String(number);
    while (string.length > width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {

    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

// Do not add cleverness unless you are absolutely sure you're going to need it

// Functions and side effects
// functions can be divided into those that are called for their side effects and those that arec called for their return value
// side effects - printing a line
// zeroPad - for value returned

// a pure function is a specific kind of value-producing function that not only has no side effects but it also doesn't rely on side effects from other code


// Exercises
// minimum function
const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// even or odd use recursion
const evenOrOdd = n => {
    if (n == 0) return "even";
    else if (n == 1) return "odd";
    else return evenOrOdd(n-2);
}

// bean counting
const countBs = string => {
    counter = 0;
    bCount = 0;
    while (counter < string.length) {
        if (string[counter] == "B") {
            bCount++
        }
        counter++
    }
    return bCount;
};

const countChars = (string, character) => {
    counter = 0;
    charCount = 0;
    while (counter < string.length) {
        if (string[counter] == character) {
            charCount++
        }
        counter++
    }
    return charCount;
};
