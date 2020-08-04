let hamburger = document.querySelector(".hamburger")
let navLinks = document.querySelector(".nav-links")
let links = document.querySelectorAll(".nav-links li")

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
});