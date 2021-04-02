// DAY 04 FUNCTIONS; SCOPE, HOISTING; AND LITERALS

//LITERALS
// They represent values in JS that have been hardcoded

let butlerMascot = `Bulldog` // Fixed value
let myAge = 30 // Also fixed value
let arr = [] // Also fixed values

// HOISTING
/* 
- General way of thinking about how code creation and execution works in JS
- JS puts [var]iable declarations and functions declarations into memory during compile 
phase of the code. This makes it feel that those are "on top" of loaded first.
*/

console.log(myName);
// variable declaration = variable value
var myName = 'Amelia' // let or const are NOT hoisted, only functions and var[iables]


sayHello(); // Calling a function

function sayHello(){ // Creating the function - function declaration is hoisted
    console.log(`This is a function`)

}
// func () // cannot access func() before initialization
let func = function(){ //  Function expression is NOT hoisted
    console.log(`This is a function expression`)
}

// SCOPE
/* Hierarchy of variables in our code - commonly referred to as global scope, local scope,
parent scope, and child scope 
*/
let coffeeOrigin = `Ethiopia - global scope` // global scope

function exampleFunction() {
    let x = `local scope - declare inside function` // local scope
    //console.log(x)
    //console.log(coffeeOrigin)
}
exampleFunction();
console.log(x)

// Global scope can be accessed by local function scope
// Local scope cannot be accessed by global scope

// MDN Docs https://developer.mozilla.org/en-US/docs/Glossary/Scope


// FUNCTIONS
// block of code designed to perform a particular task
// TBD


function addNums = function (x, y) {
    let result = x = y;
    return result
}

let mystuff = addNums(5,6) // let mystuff = 11 <<-- inside memory location

console.log(mystuff)

