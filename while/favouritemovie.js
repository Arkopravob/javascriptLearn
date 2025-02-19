let favMovie = "rock";
let guess = prompt("enter the movie name: ");
// let movie = guess;
while ((guess != favMovie) && (guess != "quite")) {
    guess = prompt("please enter movie: ");
}
if (guess == favMovie) {
    console.log("congrats!!");
}
else {
    console.log("yes quite");
}