let todo = [];
let req = prompt("please enter your task");

while (true) {
    if (req == "quit") {
        console.log("quitting  app");
        break;
    }
}
if (req == "list") {
    for (task of todo) {
        console.log(task);
    }
} else if (req == "add") {
    let task = prompt("please eneter ");
}