// slideshow.js

$(window).on("load", function () {
  const $thumbnails = $("#thumbnail-image_1 img");
  const $mainImage = $("#slideshow-image_1 img");
  const $title = $(".cover-title");

  $thumbnails.click(function () {
    const imgSrc = $(this).attr("src");
    const index = $thumbnails.index(this); // クリックされた画像のインデックス

    // メイン画像を先に切り替え
  $mainImage.attr("src", imgSrc);
    // タイトルの色切り替え
    $title
      .removeClass("color-1 color-2 color-3")
      .addClass(`color-${index + 1}`);
  });
});
