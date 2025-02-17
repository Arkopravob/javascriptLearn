//rest operator
const aprilBatch = ["tina", "ritu"];
const mayBatch = ["sita", "gita"];
const juneBatch = ["rita", "sita", "RAM", "SHYAM"];
const julyBatch = [];

//Rest operator
function addStudents(batch, ...students) {
    for (let i of students) {
        batch.push(i);
    }
    console.log(batch);
}
addStudents(aprilBatch, 'sunny', 'ritu', 'shema');

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
const result = console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));