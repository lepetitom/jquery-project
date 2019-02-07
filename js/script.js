$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    console.log(positionY)

    if ($(window).height()) {
        $("#scrollToTop").css("display","flex");
        console.log("bouton")
    }
    // $(window).height() //
})