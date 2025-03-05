`use strict`;

function greet(message) {
    return function (wish) {
        console.log(`${wish}, ${message}`);
    };
}
greet("welcome to js ")("hi");