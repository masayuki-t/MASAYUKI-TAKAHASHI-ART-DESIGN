document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.getElementById("nav-button");
  const menu = document.querySelector(".hamburger-sp-nav");
  const body = document.body;

  navButton.addEventListener("click", function () {
    menu.classList.toggle("open");   // メニューの開閉
    body.classList.toggle("open");   // バツ印への変形にも必要
  });
});