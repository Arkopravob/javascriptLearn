const books = { bName: "RICH DAD POOR DAD", price: 300, author: "jack" };

//object destructure method
const { bName, price, author } = books;
console.log(bName);

//function destructure method

function bookinfo(bName, price, author) {
    console.log(`Book name is ${bName} and price is ${price} author by ${author}`);
}
bookinfo('homes', 400, 'jk rowling');