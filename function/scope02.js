//blockscope js.
// {
//     let a = 4;
//     // console.log("a");
// }
// console.log(a);

//lexicalscope
//variable defined outside function can be accessible inside anther function defiend after varible declaration
// function outerFun() {
//     let x = 4;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//     }
//     innerFunc();
// }

let greet = "hello"; //global scope

function changeGreet() {
    let greet = "namaste";  // function scope
    console.log(greet);
    function InnerGreet() {
        console.log(greet); // lexical scope
    }
}
console.log(greet);
changeGreet();