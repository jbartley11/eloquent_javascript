// online coding sandbox: https://eloquentjavascript.net/code

// array - data type specifically for storing sequences of values
let listOfNumbers = [2,3,4,5];
let firstOfList = listOfNumbers[0]; // zero-based indexing

let arrayLength = listOfNumbers.length;

// properties
// Math.max // max property of Math object
// null and undefined are the only JS objects that do not have properties
null.length; // will error

// access properties using dot or square brackets
// dot gets the property literal
// square brackets evaluates to get the property name
// property names are strings, but to use dot notation you need to have ones that look like valid binding names

let value = {
    x : "cheese",
    "John Doe": "meat",
    3 : "wind", // can't use number
    // "3" : "wind"
}

value.x; // "cheese"
value["x"]; // "cheese"
value.John Doe; // errors
value["John Doe"]; // "meat"
value.3; // error
value[3]; // wind
value["3"]; // wind

// get an array's length
array.length;

// methods
// properties that hold function values
// every string has a toUpperCase property, and toLowerCase
let doh = "Doh";
console.log(doh.toUpperCase());

// array methods
// push adds value to end
// pop removes last value
let sequence = [1,2,3,4];
sequence.push(5) // adds 5
sequence.pop() // removes 5

// objects - arbitrary collections of properties
// properties whose names aren't valid binding names or valid numbers must be quoted
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza"]
};
day1.squirrel // returns false
day1.wolf = false; // assign new property
day1.wolf // false
day1.events[0] // work
delete day1.wolf // deletes property

// braces have two meanings in JS {}
// they start a block of statements
// they describe an object

// in operator
// applies to string and objects
'squirrel' in day1; // true

// return all properties in an object
Object.keys(day1);

// assign function copies all properties form one object into another
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b:3, c:4});
console.log(objectA) // {a: 1, b:3, c:4}

// typeof array equals object

// array can hold objects
let journal = [
    {events: ["footbal", "work", "cheese"],
     squirrel = false},
    {events: ["hockey", "beach", "burger"],
     squirrel = true}
    // so on   
];

// mutability
// immutable - impossible to change values of strings, numbers, booleans
// objects are different, you can change their properties
// there is a difference between having two references to the same object and having two different objects

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

object1 == object2; // true
object1 == object3; // false

object1.value = 15;
object2.value // 15
object3.value // 10

// bindings are mutable - you point it to a new value
// const will always point to the same object, but the contents of that object might change

const score = {visitors: 0, home: 0};
score.visitors = 1; // works
score = {visitors: 1, home: 1}; // not allowed

// lycanthrope's log
let journal = []; // create empty array to hold objects

// create function to add values to list
// if a property name in brace notation isn't followed by a value its value is taken from the binding with the same name
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

// add to journal
addEntry(["work", "cheese", "tv"], false)

// array looping
for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    // do something
}

// use this way
for (let entry of journal) {
    console.log(`{entry.events.length} events.`);
}

// use shift and unshift
// shift returns and removes first value in array
// unshift places value at beginning of array

// indexOf - searches array for specific value
// returns the index if found, or -1 if not found
// lastIndexOf searches from the end to the start of the array

// slice - takes start and end indices and returns the characters between them
// start is inclusive, end is exclusive
[2,3,4,5].slice(1,3) // [3,4]
[2,3,4,5].slice(1) // [3,4, 5]

// concat method combines two arrays
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

// use indexOf and slice to pull characters out of string

// trim removes whitespace from beginning and end of string
// padStart method adds 0's
String(6).padStart(3,"0")

// split breaks string into array
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
words.join(". ");

// a string can be repeated with the repeat method
"LA".repeat(3);

// rest parameters
// a function can accept any number of arguments when you put three dots before the function's last parameter
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

// math object
let numbers = [1,3,5,2];
Math.max(numbers);
Math.min(numbers);
Math.sqrt(numbers);

// Math provides a namespace so that all these functions do not have to be global bindings
// cos, sin, tan, acos, asin, atan, Math.PI
// Math.random() - returns number between 0 and 1
// want random whole number use Math.floor
Math.floor(Math.random() * 10);

// Destructuring
// instead of passing an a row and have one parameter for the function it's best to have bindings for each element of the array
// if you know the value you are binding is an array you can use square brackets to look inside the array, providing bindings for each value
/*function phi(table)...
to 
function phi([n00, n01, n10, n11])... */

// JSON - Javascript Object Notation
// if you want to save data in a file for later or send it to someone else you need to convert how the data is represented in memory
// serialize the data - convert it to a flat description
// object in JSON
{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza"]
}
JSON.stringify // takes js value and returns json string
JSON.parse // takes json and creates js object


// exercises 

// function that takes two arguments, start and end and retns an array containing the numbers from start up to and including the end
let returnArray = (start, end, step=1) => {
    let array = [];
    counter = start;
    while ( counter < end + 1) {
        array.push(counter);
        counter += step;
    }
    return array;
}

// write a sum function that takes an array of numbers and returns the sum of these numbers
let sumArray = (...numbers) => {
    sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

let sumArray = (numbers) => {
    sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

let reverseArray = array => {
    let newArray = [];
    counter = array.length - 1;
    while (counter >= 0) {
        newArray.push(array[counter]);
        counter -= 1;
    }
    return newArray;
}

let reverseArrayInPlace = array => {
    
}
// open process automation