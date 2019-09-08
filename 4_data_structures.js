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



