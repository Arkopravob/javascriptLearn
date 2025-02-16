// let color = "white";

// switch (color) {
//     case "red":
//         console.log("Color is red");
//         break;
//     case "blue":
//         console.log("color is blue");
//         break;
//     case "yellow":
//         console.log("color is yellow");
//         break;
//     default:
//         console.log("color is not red, blue or yellow");
// }

//coffee macchine example
// function coffeeMachine(coffeeType) {
//     let answer;
//     coffeeType.toLowerCase();
//     switch (answer) {
//         case "regular":
//             answer = "$2.50";
//             break;
//         case "Latte":
//             answer = "$3.50";
//             break;
//         case "Cappuccino":
//             answer = "$4.00";
//             break;
//         case "Espresso":
//             answer = "$5.00";
//             break;

//     }
//     return answer;
// }

//ternary operator
// let age = 18;
// let beverage = (age >= 21) ? "Beer" : "Juice";
// console.log(beverage);

// let num1 = 29;
// let num2 = 26;
// let answer = (num1 > num2) ? num1 : num2;
// console.log(answer);

// sum of prime number between 1 to n;
let n = 10;
let sum = 0;
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sum += i;
        console.log(sum);
    } else {
        console.log("not a prime number");
    }
}