// Arrays & Objects

// Array
/* High-level, list-like object used to be traversed and mutated. 
    - uses integers as element index
    - can be assessed by bracket notation [index] or dot notation (method)
    - arrays are 0 index
        - first object at zero (0)
        - last object at object.length - 1
*/

// Create an array

let british = ["Rolls Royce", "Bentley", "Caterham", "Ashton Martin"];

console.log(british[0]); // logs first element "Rolls Royce"
console.log(british[1]); // logs second element "Bentley"
console.log(british[british.length -1]);  // logs the last element, "Ashton Martin"

// Array Methods

console.log(british.length); // Returns the length of an array

british.push("MINI"); // push element to the end of an array
// console.log(british) 

british.splice(0, 1, "Jaguar") /* index to remove, how many to remove and what to 
replace it with */
console.log(british);

let bReturn = british.pop(); /* removes the last index of an array, 
'MINI' and returns it for brief moment */
console.log(bReturn); // Shows .pop() holding onto that item
// console.log(british); // Removes last element

british.unshift("Bentley", "Land Rover"); // adds elements to array start and returns array length
//console.log(british);

british.shift(); // removes start element of an array
console.log(british);

console.log(british.indexOf("Land Rover")); // searches an array for an index of element. Can add second param to select index

console.log(british.includes("Land Rover")); /* determines whether array has specific element. 
Can add second param to select start index. Returns true/ false */

// Advanced array manipulations

let german = [`BMW`, `Mercedes`, `Audi`, `Porsche`, `Alpina`, `VW`];

//for (cars of german) {
//    console.log(cars)
//};

// array.forEach() runs a function for each element in an array - Most Powerful!!! Will be tested probably in interviews!!
// takes a callback function inside as one if its parameters

german.forEach(car => console.log(car))
// Same as     (funtion(car) { console.log(car) })

// array.map () --> transforms elements in original array by callback function and returns a new modified array.

console.log(german.map(car => car.toUpperCase()))

// array.filer() --> creates a new array with elements that pass the test in a given function

// creates an array with car elements that start with letter "a"
console.log(german.filter(car => car.startsWith(`A`)));

// Objects
/* Containers for values in a JSON format (Javascript Object Notation).
    - exists as a string
    - it has properties and methods
    - .property
    - .method()
    - associative arrays (each property is associated with a string value)
*/

// define JS object with an object literal

let car = {
    // key : value pair (properties) that are comma separated
    make: "Porsche",
    model: "911",
    country: "Germany",
    driver: "Walter Rohl",
    association: {
        name: 'Jeff',
        lastName: 'Brown',
    }
};

// Accessing object values

console.log(car.make); // access using key
console.log(car[`model`]) // access using object key
let returnKeys = Object.keys(car); // returns keys in an array
console.log(returnKeys);
console.table(car); // console logs a table of an object

// Object property reassignment
car.make = "Maserati";
car[`model`] = `GranTurismo S`;
console.log(car);
console.log(car.association.name); // to access nested objects within an object (think of a ladder)

// Object Constructor

let client = new Object; // creates an empty object
console.log(client)

client.firstName = `Paul`;
client.lastName = `Niemczyk`;
client.birthYear = 1990;

console.log(client);

let manager = {
    firstName: `Brad`,
    lastName: `Titus`,
    birthYear: 1990,
    // First way that requires parameter of birthYear from outside
    // setAge: function(birthYear) {
        // return 2021 - birthYear
    // }

    // Second way takes property from this.birthYear
    // setAge: function() {
    //     return 2021 - this.birthYear
    // }

    setAge: function () {
        this.age = 2021 - this.birthYear // this creates new age property with value of function calculation once it has been called
    }

}
// console.log(manager.setAge())
// console.log(manager.setAge())
console.log (this) // is a global object
manager.setAge() // resets property
console.log(manager);

//function setAge(){
    // do something
//}
