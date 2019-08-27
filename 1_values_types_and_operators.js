//numbers
13
9.43
2.99e08

// arithmetic
5 + 6 * 11

(5+9) * 7

// special numbers
Infinity
-Infinity
NaN // not a number

// strings
// can use ' " `
'Down at the sea'
"Lie on the ocean"
`Float on the water`

// can newlines can be included without escaping when using backticks
`hi
friend`

// \ (backslash) is used to escape charaters 
// \n newline
// \t tab
// \\ to have one \ in string

// backtick strings are called template literals
// can embed values
`half of 100 is ${100 /2}`

// unary operators
// don't use symbols, written as words
typeof 4.5

// boolean
// binary, two values: on or off
3 > 2 // true
3 < 2 // false

// NaN does not equal itself
NaN = NaN // false

// logical operators
true && true // and true
true || false // or true

// not is !
!true // false

// ternary operator
// result of condition on left will return either true or false
true ? 1 : 2 // 1
false ? 1 : 2 // 2

// empty values - absence of a meaningful value
null 
undefined

// automatic type conversion
8 * null // 0 - null has numeric value of 0
'5' - 1 // 4 - 5 converted from string to number
"5" + 1 // 51 - concatenates
"five" * 2 // NaN
false == 0 // true

// precise equality
// use to prevent unexpected type conversion
// when both sides are definitely the same type use shorter operators
// === !==

// short circuiting of logical operators
// using && and ||
// left side we evaluate to a boolean and determine what to do
// will return the left value if true otherwise the right
// use this to provide a default value 
// null, 0 , NaN, and ""(empty string) will return false
null || "user" // returns user
"Agnes" || user // returns Agnes

// && is similar but will return the first value if it evaluates to false,
// if true it returns second
false && x // returns false
true && x // returns x