function findSum(n) {
    let ans = 0;
    for (let i = 1; i < n; i++) {
        ans = ans + i;
    }
    return ans;
}
// let ans = findSum(100);
// console.log(ans);
let ans2 = findSum(200);
console.log(ans2);

