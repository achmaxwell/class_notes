// Asynchonous JS Function
/* - return a Promise 
    - async returns Promise
    -await makes function wait for a Promise
*/
// if your using a var or let that is an expression, not a standard function.

// function standardFunction (){
//     return console.log('This is a standard function.')
// }

// standardFunction();

// async function asyncFunction(){
//         return console.log('This returns an Async Function');
// }

// asyncFunction();

// async function asyncFunction(){
//     return Promise.resolve ('This is resolved')
// }

// asyncFunction();

// async function asyncAction(){
//     setTimeout(() => {
//         console.log('Async finally hit yo!')
//     }, 3000);
// }

// asyncAction();

// Promise
/*
COmmit to something
    - complete -> resolved
    - rejected
 */

let p = new Promise((resolve, reject) => {
    // Promise object with one function with resolve & reject parameters
    let a = 1 + 1
    if (a === 2) {
        resolve('Promise successful and Resolved')
    } else {
        reject('Promise rejected')
    }
})

p.then((message) => {
    // anything inside .then is a resolve. Takes a fx with single parameters
    console.log(`This is the .then(). ${message}`)
}).catch((message) => {
    // anything inside .catch is a reject statement
    console.log(`This is the .catch(). ${message}`)
})

// Try, Catch, Throw, and Finally
// try/catch only handles runtime errors

try {
    // tests a block of code
    callingSomeBSFunctionTheDoesntExist()
    console.log('Start of the try')
} catch(err) {
    // handles the error
    console.log('Error has occurred' + err)
    // err.name logs the name of the array; err.message logs the message
} finally {
    // executes the code after try/catch regardless of the result
    console.log('Finally ALWAYS runs')
}
console.log('The execution continues')

// Custom Errors

// let json = '{"age": 30}'

// try {
//     let user = JSON.parse(json)
//     if (!user.age) {
//         throw new SyntaxError('Incomplete data: no name')
//     }
// } catch (e) {
//     console.log(`JSON Error: ${e}`) // e.name or e.message for to be specific
// }

function upperCase(name) {
    if (typeof name === 'string') {
        throw new TypeError('name must be a string')
    }
    return name.toUppercase
}
console.log(upperCase (`amelia`))
