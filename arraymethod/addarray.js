const country = ["india", "usa", "russia", "Uk"];
console.log(country);
//use push method to add an element last of an array.
country.push("sweden");
console.log(country);

//finding index item of an array
console.log(country.indexOf("usa"));
console.log(country.indexOf("iran")); //return -1 because not present in an array

//add an element last of an array.
(country.unshift("london"));
console.log(country);