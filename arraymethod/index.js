const historMarks = [10, 20, 30, 40, 50];
console.log(historMarks);
const studentDetails = ['array', 73838, 'arko', 'data'];
console.log(studentDetails);// 10
const arr = new Array('simran', 'rahul', 'rohit', 'mohit');
console.log(arr);
//arays in js are dynamic in nature
// we can add or remove elements from array
const cites = ['delhi', 'mumbai', 'kolkata', 'chennai'];
console.log(cites);

// cites[2] = 'bangalore';
// console.log(cites);

/*method of array */
//1. length
console.log(cites.length)
//2. push method
const teams = ['india', 'australia', 'england', 'newzeland'];
console.log(teams);
teams.push('kkr');
console.log(teams);


//unshift method
teams.unshift('rcb');
console.log(teams);
//removing an element from the end of an array
teams.pop();
console.log(teams);
//loop over an array
const Student = ['simran', 'rahul', 'rohit', 'mohit'];
for (let i = 0; i < Student.length; i++) {
    console.log(`Roll no ${i + 1}: ${Student}`);
}

//shift an array uses  Remove the first element from the array.

const fruit = ['banana', 'mango', 'litchi'];
fruit.shift();
console.log(fruit);

//splice in an array ->Add or remove elements at a specific index
const teams1 = ['kkr', 'rcb', 'mi', 'dc'];
// teams1.splice(2, 3);

// console.log(teams1);
teams1.splice(3, 0, 'csk');
console.log(teams1);

//slice
//for of loop
// duplicate of an array
// let arr = [4, 2, 34, 4, 1, 12, 1, 4];

// function findDuplicate(arr) {
//     let dup = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {

//                 if (dup.indexOf(arr[i]) === -1) {
//                     dup.push(arr[i]);
//                 }
//                 break;
//             }
//         }
//     }

//     return dup;
// }
// console.log(findDuplicate(arr));
// console.log(findDuplicate([4, 56, 54, 3, 56, 36, 54]));

