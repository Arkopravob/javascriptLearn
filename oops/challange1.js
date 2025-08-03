function vehicale(brand, wheels, color) {
    this.brand = brand;
    this.wheels = wheels;
    this.color = color;
}
vehicale.prototype.getDetails = function () {
    console.log(
        `Brand: ${this.brand} wheels: ${this.wheels} color: ${this.color}`
    );

};

function car(brand, color, engine, seats) {
    this.brand = brand;
    this.color = color;
    this.engine = engine;
    this.seats = seats;
}
car.prototype.getDetails = 