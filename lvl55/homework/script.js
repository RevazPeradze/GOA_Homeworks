window.onload = function () {
  console.log("5 + 3 =", 5 + 3);
  console.log("10 - 2 =", 10 - 2);
  console.log("4 * 7 =", 4 * 7);
  console.log("20 / 5 =", 20 / 5);
};

function styleButton() {
  const button = document.getElementById("myButton");
  button.style.color = "white";
  button.style.backgroundColor = "green";
  button.style.borderRadius = "12px";
  button.style.width = "150px";
}

document.getElementById("myButton").addEventListener("click", styleButton);