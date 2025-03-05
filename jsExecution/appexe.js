var UserName = "Tom";
var age = 29;
console.log(`username : ${UserName}`);
console.log(`userAge: ${age}`);

function greetUser(name) {
    var greet = "i hope you are doing fine";
    console.log(`hello ${name} ${greet}`);
    var currentYear = 2025;
    const year = currentYear - age;
    return (`your birthYear is ${year}`);

}
const birthYear = greetUser(UserName);
console.log(birthYear);