function MulGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }

}
let greet = function () {
    console.log("hello");
}
// MulGreet(greet, 100);
MulGreet(function () { console.log("Hi ARKO") }, 10);