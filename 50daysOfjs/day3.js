var x;
console.log(x === undefined);
x = 3;
(function () {
    var x;
    console.log(x);
    x = 'local variable';
})