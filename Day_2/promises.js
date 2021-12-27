const prompt = require('prompt-sync')();

function oddEven() {
    return new Promise(function(resolve, reject) {
        let n = prompt('Enter the Number: ');
        if (n % 2 == 0) {
            console.log('number is even');
            resolve();
        } else {
            console.log('number is odd');
            reject();
        }
    })
}

oddEven().then(function() {
    console.log("Task resolved");
}).catch(function() {
    console.log("Oops!!Task rejected");
})