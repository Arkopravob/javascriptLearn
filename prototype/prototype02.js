// function add(a, b) {
//     return a + b;
// }
// var x = add(1, 2);
// console.log(x);
// x = add(3.90, 4.50);
// console.log(x);
// x = add("hello", "world");
// console.log(x);

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getName = function () {
        return this.make + ' ' + this.model + ' ' + this.year;
    }
}
var c = new Car("Audi", r7, 2012);
