//longest word find in javasscript
let str = "hi i am javascript i from computer";
const findWords = (str) => {
    if (str.trim() === 0) {
        return false;
    }
    word = str.split(" ");
    word = word.sort();
    console.log(word);
}
console.log(findWords(str));