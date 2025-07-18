$(window).on("load", function() {
    $("#thumbnail-image_1img").click(function() {
        console.log('click');
        let img_src = $(this).attr("src");
        $("#slideshow-image_1 img").attr("src", img_src);
    });
});
