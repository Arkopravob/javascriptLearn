// scope
// global scope
//functional scope (local)
//block scope
var varNum = 10;
var letNum = 20;
const constNum = 30;

function print() {
    var varLocal = 10;
    let letLocal = 20;
    const constLocal = 30;

    console.log(varLocal, letLocal, constLocal);
    console.log(varNum, letNum, constNum);
}
console.log(varNum, letNum, constNum);
print();
