function sum(a, b, callback) {
    add = a + b;
    console.log(add);
    callback();
}

function msg() {
    console.log("Numbers were added");
}
sum(4, 5, msg)