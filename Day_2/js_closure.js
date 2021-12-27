const outerFunction = (a) => {
    let b = 10;
    const innerFunction = () => {
        let sum = a + b;
        console.log(`Sime is ${sum}`);
    }
    return innerFunction;
}

let mainFunction = outerFunction(5);
console.dir(mainFunction);