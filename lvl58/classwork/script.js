const form = document.getElementById("myForm");
const input = document.getElementById("textInput");
const output = document.getElementById("output");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log(input.value);
  output.textContent = input.value;
});

const promptBtn = document.getElementById("promptBtn");
promptBtn.addEventListener("click", function() {
  let name = prompt("What is your name?");
  alert("Hello, " + name + "!");
  
  let confirmChoice = confirm("Do you like coding?");
  console.log("User choice:", confirmChoice);
  
  if (confirmChoice == true) {
    console.log(name + " likes coding!");
  } else {
    console.log(name + " does not like coding!");
  }
});

const checkBtn = document.getElementById("checkBtn");
const maleCheck = document.getElementById("maleCheck");

checkBtn.addEventListener("click", function() {
  if (maleCheck.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
});
