const p = document.getElementById('para');
console.log(p.innerText);

const sect = document.querySelector("Bg-black");
const para = document.createElement("p");
para.textContent = "i love india and its my country";
sect.appendChild(para);
const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);