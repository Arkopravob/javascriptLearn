console.log(document.title);
//get elementby id
console.log(document.getElementById('one'));
console.log(document.getElementsByClassName('learn-more'));

const newHeader = document.getElementsByTagName('h1');
newHeader[0].textContent = "Hi";
