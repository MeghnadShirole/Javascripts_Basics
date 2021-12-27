// let greet = function() {
//     console.log("SayHello");
// };

// greet();

// hello = () => {
//     return "Say Hello";
// }
// console.log(hello())


//Scope for var
// function func1() {
//     var x = 1;

//     function func2() {
//         let y = 2;
//         console.log(x);
//         console.log(y);
//     }
//     func2();
//     console.log(x);
//     console.log(y);
// }

// func1();


//scope of let
// function letScope() {

//     {
//         let a = 5;
//         // let a= 6;// reassigment
//         console.log("inside blk", a)
//     }

//     // console.log("inside function it self", a)

// }

// letScope();

//scope of const=block scope
function letScope() {

    {
        const a = 5;
        // const a= 6;// reassigment
        //console.log("inside blk", a)
    }

    console.log("inside function it self", a)

}

letScope();