/*Asynchronous or non-Blocking in Nodejs*/
const fs = require('fs')
fs.readFile("Hello.txt", 'utf8', (err, data) => {
    console.log(data);
})

console.log("This is Asynchronous");

/*Synchronous or Blocking in Nodejs*/
// const fs = require('fs')
// const file = fs.readFileSync("Hello.txt", 'utf-8');
// console.log(file);

// console.log("This is Synchronous");