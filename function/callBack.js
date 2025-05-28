//when we call function inside another function.
function findSquare(n) {
    return n * n;
}

function sumOfSquare(a, b) {
    const val1 = findSquare(a);
    const val2 = findSquare(b);
    return val1 + val2;
}

console.log(sumOfSquare(3, 5));