/* A “higher-order function” is a function that accepts 
 functions as parameters and/or returns a function.*/

const techStack = (name) => {
    if (name === "Meghnad") {
        return function(tech) {
            console.log(`Hi ${name}, Your TechStack is ${tech}.`);
        }
    }
    if (name === "Anu") {
        return function(tech) {
            console.log(`Hi ${name}, Your TechStack is ${tech}.`);
        }
    }
    if (name === "Rohan") {
        return function(tech) {
            console.log(`Hi ${name}, Your TechStack is ${tech}.`);
        }
    }
}

techStack("Meghnad")("NodeJs");
techStack("Anu")("ReactJs");
techStack("Rohan")("Python");