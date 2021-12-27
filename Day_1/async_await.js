global.fetch = require("node-fetch");

async function MyFunction() {
    console.log('Inside MyFunction function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;
}

console.log("Before calling MyFunction")
let a = MyFunction();
console.log("After calling MyFunction")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")