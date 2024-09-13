//  import {apiKey} from "./utils.js";
// you can only have one default import and export.

// import apiKey from "./utils.js";

// import {apiKey, abc as content} from ".utils.js";

// import * as util from "./utils.js";
// every thing imported as object and can be accessed using the dot operator.

// console.log(util.apiKey);


// Javascripts Datasets.
// variables are created using the let keyword.
// constants are created using the const keyword. * they cannot be reassigned.

// difference between "==" and "==="
// The == allows for type coersion whereas "===" does not allow for type coersion and evaluation is done in strict mode.

// functions.
// function greetUser(userName, message = "Default Greeting!") {
//     console.log(userName)
//     console.log(message)
// }

// anonymous function or arrow functions.


// Arrays

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies);

// // Finding the index of an item in js
// const index = hobbies.findIndex((item) => item === "Cookiing");


// // using the map function in js to transform elements.
// const editHobbies = hobbies.map((item) => ({name: item}));
// console.log(editHobbies);


// // Array destructuring 
// const userNameData = ["Max", "Schwarzmuller"];
// const [firstName, lastName] = ["Max", "Schwarzmuller"];
// console.log(firstName);
// console.log(lastName);


// // Object Destructuring
// const {name:userName, age} = {
//     name: "Max",
//     age: 34
// }
// console.log(userName)
// console.log(age)


// function destructureData({content, data}){
//     console.log(data)
//     console.log(content)
// }

// let test_data = {
//     data: "Hello there, test data here..............",
//     content: "Hello there, this is the test content here....."
// }
// destructureData(test_data)


// spread operator
 
// For loop in Js 
// let elements = ["there", "hello"]
// for (const value of elements){
//     console.log(value)
// }

// let data = [1, 2,3,4,5,6,7,8,9,]

// console.log(data.reduce((acc, curr) => acc + curr, 10));

