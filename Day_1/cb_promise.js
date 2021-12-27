const students = [
    { name: "Meghnad", teckstack: "Nodejs" },
    { name: "Anu", teckstack: "Nodejs" }
]

function enrollStudent(student) {

    return new Promise(function(resolve, reject) {
        students.push(student);
        let error = false;
        if (!error) {
            console.log("Student has been enrolled");
            resolve("Request Fulfilled");
        } else {
            reject("Request Denied");
        }
    })
}

function getStudent() {
    console.log("Students List Fetched");
    console.log(students);
}

let newStudent = { name: "Ms", teckstack: "MEAN" }
enrollStudent(newStudent).then(getStudent).catch(function(error) {
    console.log("Some Error Occured.." + error);
})