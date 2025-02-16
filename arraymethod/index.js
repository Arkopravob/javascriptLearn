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