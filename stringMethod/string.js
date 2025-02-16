let str = " Hi i Javascript ";
//trim method => remove aditonal white space last and first
let str1 = "  hello";
let print = str.trim();
console.log(str1.trim());
console.log(print);
//to upper case method
let str2 = "hi javascript learn";
let ans = str2.toUpperCase();
console.log(ans);
console.log(ans.toLowerCase());

let strName = "hi this is learning school";
let ans2 = strName.indexOf("this");
console.log(ans2)
//
let answer = 0;
let num = 6;
for (let i = 1; i < num; i++) {
    if (num % i == 0) {
        answer = answer + i;

    }
    console.log(answer);
}
let msg = "   hello   ";
// let newMsg = msg.trim();
// console.log("after trim: " , newMsg);
//method chaning  is multiple method in same line
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);
//slice method
//return a part of the orginal string as a new string
let strr = "loveCoding";
console.log(strr.slice(0, 4));