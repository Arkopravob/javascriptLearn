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

//for each 
// arr.forEach(double);
// arr.forEach(display);
// function double(element ,index , arr){
//     arr[index] = element *2 ;
// }

arr.forEach(square);
arr.forEach(display);
function square(element , index , arr){
    arr[index] = Math.pow(element,2);
}
function display(element){
    console.log(element);
}