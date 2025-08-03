class VehicleCL {
    name;
    catagory;
    engine;
    constructor(name, catagory, engine) {
        this.name = name;
        this.catagory = catagory;
        this.engine = engine;
    }
    getDetails() {
        console.log(`the vehicale ${this.name} is which belongs ${this.catagory} and there engine is ${this.engine}`);
    }
}
const veh1 = new VehicleCL('Honda', 'bike', 400);
console.log(veh1);