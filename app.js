document.addEventListener("DOMContentLoaded", (e) => {
  const navbarContainer2 = document.querySelector(
    ".navbar .navbar-container-2"
  );

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
  const searchNav = document.querySelector("#nav_2 .nav-btn label");
  const detailsDropdown = document.querySelectorAll("details.dropdown");
  const navDrop = document.querySelectorAll(
    'details.dropdown summary + ul[role="nav-drop"]'
  );

  searchNav?.addEventListener("click", () => {
    overlay?.classList.add("activate");
  });

  cross?.addEventListener("click", () => {
    overlay?.classList.remove("activate");
  });

  console.log("I AM THE MAIN SCRIPT FILE!");
  console.log(searchNav);
  console.log(cross);

  detailsDropdown.forEach((detailDropd) => {
    // if (detailDropdown.hasAttribute("open")) {
    //   detailDropdown.style.color = "orange";
    // }
    detailDropd.addEventListener("click", (e) => {
      detailDropd.classList.toggle("active");
      // document.querySelector("details.dropdown")?.classList.remove("active");
      // detailDropd.classList.add("active");
    });
  });
});

// const navbarContainer2 = document.querySelector(".navbar .navbar-container-2");

// window.addEventListener("scroll", fixNav);

// function fixNav() {
//   if (window.scrollY > 0) {
//     navbarContainer2.classList.add("scrolling");
//   } else {
//     navbarContainer2.classList.remove("scrolling");
//   }
// }

// // overlay
// const overlay = document.querySelector(".overlay");
// const cross = document.querySelector(".overlay span");
// const searchNav = document.querySelector("#nav_2 .nav-btn label");

// searchNav?.addEventListener("click", () => {
//   overlay?.classList.add("activate");
// });

// cross?.addEventListener("click", () => {
//   overlay?.classList.remove("activate");
// });

// console.log("I AM THE MAIN SCRIPT FILE!");
// console.log(searchNav);
// console.log(cross);
