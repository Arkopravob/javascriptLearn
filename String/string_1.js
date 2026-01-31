const button_a = document.querySelector("#button1");

function greet() {
    const name = prompt("What is your name");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name} how goes your javascript coding?`;
}
button_a.addEventListener("click", greet());