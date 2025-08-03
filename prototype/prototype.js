function Movie(title) {
    this.title = title;
}
const Movie1 = new Movie("Avenger");
Movie1.year = 2012;
console.log(Movie1);
console.log(Movie1.__proto__);
const Movie2 = new Movie("The Dark knight");
Movie2.year = 2022;
console.log(Movie2);
console.log(Movie2.__proto__.__proto__);

function Game(name, platform) {
    this.name = name;
    this.platform = platform;
}
const fifa = new Game("Fifa14", "playstation");
console.log(fifa.__proto__ === Game.prototype);
console.log(fifa.__proto__.__proto__ === Object.prototype);

function Galaxy(name) {
    this.name = name;
}
const milkway = new Galaxy("Milkway");
console.log(milkway.__proto__.__proto__.__proto__);
function Person(name) {
    this.name = name;

}
Person.prototype = new Person("Jhon");

