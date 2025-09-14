const btn = document.getElementById("myBtn");
const img = document.getElementById("myImg");
const showBtn = document.getElementById("showBtn");
const input = document.getElementById("myInput");

btn.addEventListener("click", function() {
  console.log(5);
  btn.classList.add("clicked");
  img.src = "pic2.jpg";
});

showBtn.addEventListener("click", function() {
  console.log(input.value);
});
