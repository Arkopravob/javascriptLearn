let iteration = 0;
while (iteration < 4) {
    console.log("iteration");
    iteration++;
}



//for loop in js

for(let i = 0 ; i < 5; i++){
    console.log(i);
}

//for each loop
const arr = [114, 67,90,80];
// arr.forEach((element) =>console.log(element));
arr.forEach(display);
function display(element){
    console.log(element);
}
//for each with call back
