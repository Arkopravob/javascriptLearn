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