//var is outdated 
{
    var x = 5;
    var y = 10;
}
console.log(x);
console.log(y);

{
    let a = 10;
    let b = 30;
}
//console.log(a);  give referennce error because a canot be accesseble out of the socpe.
//hoisting --> in javascript preopare memories before the running code. it  moves all declaritons to the top . this is called javascript

// var is hoisted but gives result undefiend.
console.log(m);
var m = 30;

//can not use  n before initilizations
console.log(n);
let n = 40;