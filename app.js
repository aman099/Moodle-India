const navbarContainer2 = document.querySelector(".navbar .navbar-container-2");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > 0) {
    navbarContainer2.classList.add("scrolling");
  } else {
    navbarContainer2.classList.remove("scrolling");
  }
}

// overlay
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".overlay span");
const searchNav = document.querySelector("nav > .nav-btn > label");

searchNav?.addEventListener("click", () => {
  overlay?.classList.add("activate");
});

cross?.addEventListener("click", () => {
  overlay?.classList.remove("activate");
});

console.log("I AM THE MAIN SCRIPT FILE!");
