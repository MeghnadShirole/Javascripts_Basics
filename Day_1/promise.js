const students = [
    { name: "Vishal", technology: "NodeJs" },
    { name: "Meghnad", technology: "NodeJs" },
]

function enrollStudent(student) {
    console.log(students);
    students.push(student);
    return new Promise(function(resolve, reject) {
        let error = false;
        if (!error) {
            console.log("Student has been added");
            resolve();
        } else {
            reject();
        }
    })
}

function getStudent() {
    console.log("Student list has been updated");
    console.log(students);
}

let newStudent = { name: "Anu", technology: "mean" }
enrollStudent(newStudent)
    .then("Promise is Resolved")
    .catch(function(error) {
        console.log("Some error occured" + error);
    })