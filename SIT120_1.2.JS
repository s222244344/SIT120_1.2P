
// Array methods
const Array = ["Tamir", "Atzmon", "SIT120", "JavaScript"]; 
const Array1 = ["1", "3", "5", "7", "9"]; 
console.log(Array); 
console.log(Array.length); 
console.log(Array1.length); 
Array.splice(2, 1); 
console.log(Array); 

const removedElement = Array1.pop(); 
console.log(removedElement);
console.log(Array1); 

// string methods
const greetings = "Hello how are you welcome to my website"; 
console.log(greetings); 
console.log(greetings.length); 
console.log(greetings.slice(1, 17)); 
console.log(greetings.toUpperCase()); 
console.log(greetings.toLowerCase()); 
console.log(greetings[0].concat(" ", greetings[1])); 

// Number methods
let num = 66; 
console.log(num); 
console.log(num.toString()); 
console.log(num.toExponential()); 
console.log(num.toFixed()); 
console.log(num.toPrecision()); 
console.log(num.valueOf()); 

// Date methods
const day = new Date(); 
console.log(day.getFullYear()); 
console.log(day.getMonth()); 
console.log(day.getHours());
console.log(day.getMinutes()); 
console.log(day.getSeconds()); 

// function
function hello(name) {
    console.log(`Hello, ${name}!`); 
}

hello("Tamir"); 

function addition(a, b) {
    return a + b; 
}

const num1 = 88; 
const num2 = 97; 
const sum = addition(num1, num2); 

console.log(`The sum of ${num1} and ${num2} is ${sum}`); 
addition(num1, num2); 
