console.log("hi scope");
//scope : -- when variable can be accessed

//Reassignment: Whether the variable can be reassigned.

//Hoisting: How the variable is initialized.
console.log(x);
var x = 10;

console.log(m);
let m = 3;

// using const for value not changable
const pi = 22.7
pi = 13.7
console.log(pi); //TypeError: Assignment to constant variable

// let use for change the variable value & let are block scoped
let a;
a = 12;
console.log(a); //a = 12
a = 13;
console.log(a);

if (true) {
    let x = 12;
    console.log(x);
}
console.log(x); // can not be accessble  outside the scope

function ap() {
    var y = 23;
    console.log(y);
}

ap();

//y  is used as a global scope
var y = 1;
function test() {
    console.log(y);
}
test();
