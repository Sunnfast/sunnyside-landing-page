const mobileNav = document.querySelector("#hamburger-nav");
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

mobileNav.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
