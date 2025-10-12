let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
let index = 0

function nextPhoto() {
  index = (index + 1) % photos.length
  document.getElementById("photo").src = photos[index]
}

function prevPhoto() {
  index = (index - 1 + photos.length) % photos.length
  document.getElementById("photo").src = photos[index]
}

function bigger() {
  let img = document.getElementById("photo")
  img.style.width = parseInt(img.style.width || 300) + 50 + "px"
}

function smaller() {
  let img = document.getElementById("photo")
  img.style.width = parseInt(img.style.width || 300) - 50 + "px"
}

function round() {
  let img = document.getElementById("photo")
  img.style.borderRadius = img.style.borderRadius === "50px" ? "0px" : "50px"
}