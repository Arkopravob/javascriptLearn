// To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the var, let, or const keywords






const uiD = "jshsbbr";
var fullName = "John Doe";
var email = "jhon.doe@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var country = "India";
var course = "javascriptBootcamp";
var isLoggedFromGoogle = false;

//take input from user
// fullName = prompt("Enter your name");
// console.log(fullName);

// console.log("Full Name: ", fullName);
// console.log("Email: ", email);
// console.log(uiD);

console.log(`with unique ID: ${uiD},
User Full Name: ${fullName},
User Email: ${email},
User Password: ${password},
User Country: ${country},
User Course: ${course},
User Logged from Google: ${isLoggedFromGoogle}
`);

const button_A = document.querySelector("#btn_a");
const button_b = document.querySelector("#head3");

let count = 1;
const colors = ['#ff5733', '#33ff57', '#3357ff', '#f0f0f0', '#ff33a1', '#a133ff', '#33fff0'];
let colorIndex = 0;
button_A.onclick = () => {
    button_A.textContent = "Try again!";
    button_b.textContent = `${count} Click so far! ${colorIndex}`;
    button_b.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;

    count += 1;

};
//let keyword 


