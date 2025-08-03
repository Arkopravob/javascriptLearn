const MyHonda = {
    color: "red",
    wheels: 4,
    engine: { cylender: 4, size: 2.2 }
};
console.log(MyHonda);

function Car(make, model, year) {
    this.make = "honda";
    this.model = model;
    this.year = year;
}

const Mycar = new Car("Honda", "civic", 2011);
console.log(Mycar);