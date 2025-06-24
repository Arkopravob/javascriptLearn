
let sayHello = () => {
    console.log("Hi arko");
}
const test = (callback) => {
    console.log("inside the function");
    callback();
}
test(sayHello);