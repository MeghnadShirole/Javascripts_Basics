const names = ["Anu", "Meghnad", "Rohan"];

//Length of Array
console.log(names.length);

//finding the element at particular index
let first = names[1]
console.log(first);

//index of particular element
let index = names.indexOf("Meghnad")
console.log(index);

//Adding element to end of an array
names.push("Gaurav");
console.log(names);

//The pop() method removes the last element from an array:
names.pop();
console.log(names);

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
names.shift();
console.log(names);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
names.unshift("Rahul");
console.log(names);

// The splice() method can be used to add new items to an array
names.splice(2, 0, "Sayli", "Raj");
console.log(names);

// The slice() method returns selected elements in an array, as a new array.
const arraySlice = names.slice(1, 3);
console.log(arraySlice);

//split method
let text = "Hello * Hi";
let afterSplit = text.split("*");
console.log(afterSplit[1]);

//Concating arrays
const girls = ["Riya", "Jiya"]
const boys = ["Ajay"]
const children = girls.concat(boys);

console.log(children);

//array sorting
names.sort();
console.log(names);