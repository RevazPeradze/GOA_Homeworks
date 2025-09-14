let num1 = 10;
let num2 = 5;
let text = "Hello";
let isActive = true;
let arr = [1, 2, 3];
let obj = {name: "Revaz", age: 14};

let sum = num1 + num2;
let product = num1 * num2;
let concat = text + " World!";
let toggle = !isActive;

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Concat:", concat);
console.log("Toggle:", toggle);
console.log("Array:", arr);
console.log("Object:", obj);

console.log("== :", num1 == num2);
console.log("!= :", num1 != num2);
console.log(">  :", num1 > num2);
console.log("<  :", num1 < num2);
console.log(">= :", num1 >= num2);
console.log("<= :", num1 <= num2);
console.log("===:", num1 === num2);
console.log("!==:", num1 !== num2);

let leave = confirm("Do you want to leave the site?");
if (leave) {
  console.log("you will live the site soon");
} else {
  console.log("you are staying on the site");
}
