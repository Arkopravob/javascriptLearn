function movie(title, year) {
    const movieObj = {
        title: title,
        year: year,
        getDetails() {
            console.log(
                `Title ${this.title},
                Year ${this.year}`
            )
        }
    };
    return movieObj;
}
let result = movie("avengers", 2012);
console.log(result);
result.getDetails();

//constructor function
function Movie(title, year) {
    this.title = title;
    this.year = year;
    this.getDetails = function () {
        console.log(
            `Title ${this.title},
                 Year ${this.year}`
        )
    }
}
const movie2 = new Movie("spiderman", 2017);
console.log(movie2);

