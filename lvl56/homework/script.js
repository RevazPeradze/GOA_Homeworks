window.onload = () => {
  console.log(6 + 4);
  console.log(15 - 3);
  console.log(3 * 5);
  console.log(40 / 8);
};

function modifyButton() {
  const btn = document.getElementById("changeButton");
  btn.style.color = "yellow";
  btn.style.background = "purple";
  btn.style.borderRadius = "16px";
  btn.style.width = "180px";
}

document.getElementById("changeButton").addEventListener("click", modifyButton);