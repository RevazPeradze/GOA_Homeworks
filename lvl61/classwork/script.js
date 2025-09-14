// 1) Person object
let person = {
    name: "Revaz",
    surname: "Giorgadze",
    age: 14,
    academy: "176 School",
    hobby: "Coding",
    sports: "Basketball"
};
console.log(person);

// 2) Get elements by ID and log them
let h1Element = document.getElementById("mainTitle");
let pElement = document.getElementById("mainParagraph");
let buttonElement = document.getElementById("mainButton");

console.log(h1Element);
console.log(pElement);
console.log(buttonElement);

// 3) Change first paragraph content and style
let firstPara = document.getElementById("firstParagraph");
firstPara.textContent = "This paragraph has been changed!";
firstPara.style.color = "blue";
firstPara.style.fontWeight = "bold";
