// function hello() {
//     console.log("Hello Arko!");

// }
// hello();

// function greet() {
//     console.log("Hey Developer!");
// }
// greet();

// //print 1 to 5
// function numToFive() {
//     for (let i = 1; i < 5; i++) {
//         console.log(i);
//     }
// }
// numToFive();
// function printName() {
//     const name = prompt("enter your name:");

//     console.log(`my name is, ${name}`);
// }
// printName();


function rollDice() {
    let rand = (Math.floor(Math.random() * 6) + 1);
    console.log(rand);
}
rollDice();

function PrintNAme(name, age) {
    console.log(`My name is ${name}, and my age is${age}`);
}
PrintNAme("arko", 30);

function CalAvg(a, b, c) {
    let avg = ((a + b + c) / 3);
    console.log(avg);
}
CalAvg(3, 5, 9);

//multipliction table
function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}
printTable(5);

//return keyword

function add(a, b) {
    return a + b;
}
console.log(add(7, 11));