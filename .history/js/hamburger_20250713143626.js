document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.getElementById("nav-button");
  const menu = document.querySelector(".hamburger-navigation-container");

  navButton.addEventListener("click", function () {
    menu.classList.toggle("open"); // `open` クラスを追加・削除
  });
});