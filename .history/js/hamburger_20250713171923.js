
document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.getElementById("nav-button");
  const menu = document.querySelector(".hamburger-sp-nav");
  const body = document.body;

  navButton.addEventListener("click", function () {
    menu.classList.toggle("open");
    body.classList.toggle("open");
  });
});
