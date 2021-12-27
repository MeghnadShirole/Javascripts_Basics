function sum(a, b, callback) {
    console.log(a + b);

    setTimeout(() => {
        console.log(a - b);
        console.log("Numbers were subtracted");
    }, 3000);

    callback();
}

function message() {
    console.log("Numbers were added");
}

sum(15, 6, message)