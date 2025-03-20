
//block scope
// let age = 24;
// if (age <= 26) {
//     let str = "hey lets go for party!"; //block scope.
// }
// console.log(str);

// {
//     const a = 2;
// }
// console.log(a);

//lexical scope
function outerFunction() {
    let x = 5;
    let y = 6;
    function innerFunction() {
        console.log(x);
    }
    innerFunction();
}