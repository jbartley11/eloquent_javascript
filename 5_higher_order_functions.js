// a large program is complex, complexity confuses programmers
// confused programers make mistakes(bugs)
// a large program provides many places for bugs to hide, making them hard to find

// a solution is more likely to be correct if it is expressed in a vocabulary that corresponds to the problem being solved.

// abstraction - hide details and give us the ability to talk about problems at a higher level
// it is a useful skill in programming to notice when you are working at too low a level of abstraction

// abstracting repetition

// program needs to do something n times
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// abstract doing something n times as a function
const repeatLog = n => {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
};

// what if we want to repeat something else than logging
const repeat = (n, action) => {
    for (let i = 0; i < n; i++) {
        action(i);
    }
};

repeat(3, console.log);

// don't have to send a predefined function, can create one on the spot
// i is parameter from repeat function, anonymous arrow function

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
})
console.log(labels);

// higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them
// allow us to abstract over actions, not just values.

// function that creates a new function
// m is parameter for returned function
const greaterThan = n => {
    return m => m > n;
};

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// forEach loop
["A", "B"].forEach(l => console.log(l));

// Scripts data set
require('./scripts.js');  

exampleObject = { name: 'Phoenician',
                  ranges: [ [Array], [Array] ],
                  direction: 'rtl',
                  year: -1200,
                  living: false,
                  link: 'https://en.wikipedia.org/wiki/Phoenician_alphabet' }


// filtering arrays, find scripts that are still in use
// builds a new array so this function is pure, does not modify input array
const filter = (array, test) => {

    // array to hold objects that meet test
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// filter is a standard array method
// s parameter, return where s's direction is ttb
SCRIPTS.filter(s => s.direction == "ttb");

// map
// transforms an array by applying a function to all of its elements and building a new array from the returned values.
// will always have same length as the input array, but mapped to a new form

const map = (array, transform) => {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
};

// returns array of script name
SCRIPTS.map(s => s.name);

// reduce
// compute a single value by repeatedly taking a single element from the array and combining it with the current valve

const reduce = (array, combine, start) => {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
};

reduce([1,2,3,4], (a,b) => a + b, 0);

// if your array contains one element you can leave off start argument

// for each element in array add it to the next one and return value
[1,2,3,4].reduce((a, b) => a + b);

// use reduce twice to find the script with the most characters

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {

        console.log(`count: ${count}`);
        return count + (to - from);
    }, 0);
}

SCRIPTS.reduce((a,b) => {

    // for each object compare it to the next
    console.log(`comparing count of ${a.name} and ${b.name}`);
    console.log(`a ranges ${a.ranges}`);
    console.log(`b ranges ${b.ranges}`);
    console.log(`a ranges ${a.ranges}`);
    

    return characterCount(a) < characterCount(b) ? b : a;
})

// the code to do the above without higher order functions is not much more work
// Higher order functions start to shine when we use them together

// find average year of origin for living and dead scripts
function average(array) {

    // add all the values in the array together and divide by length
    return array.reduce((a,b) => a + b) / array.length;
}

// need to use filter to get array of all years of living and map to array
average(SCRIPTS.filter(s => s.living).map(s => s.year));

// average of dead
average(SCRIPTS.filter(s => !s.living).map(s => s.year));

// think of it as a pipeline
// we start with all scripts, filter out the living, take the years from those, then average them

// the two approaches are quite different
// map and filter produces new arrays
// the for loop is only focusing on the numbers, so it'll be quicker when it comes to large arrays


// some method - takes a test function and tells you whether that function returns true for any of the elements in the array
// function to test to see if character code is in a script

function characterScript(code) {
    // for each script in SCRIPTS
    for (let script of SCRIPTS) {

        // look at ranges array and test to see if code falls
        // in between any of the from and to arrays
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            // if it does add return script
            return script;
        }
    }
    // if code does not exist in any script return null
    return null;
}

// to get character code
// use codePointAt(0);