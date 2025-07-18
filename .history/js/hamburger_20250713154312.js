

document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.getElementById("nav-button");
  const menu = document.querySelector(".hamburger-sp-nav-container");

  navButton.addEventListener("click", function () {
    menu.classList.toggle("open"); // `open` クラスを追加・削除
  });
});