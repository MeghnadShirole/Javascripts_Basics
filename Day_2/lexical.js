// A lexical scope in JavaScript means that a variable defined outside a function 
// can be accessible inside another function defined after the variable declaration. 
// But the opposite is not true; 
// the variables defined inside a function will not be accessible outside that function.

let a = "Meghnad";
let b = "Hello";

function sayHello() {
    let b = "Good Mornimg";
    console.log(b, a);
}

sayHello();