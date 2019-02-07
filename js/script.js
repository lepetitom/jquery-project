$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    console.log(positionY)

    if (positionY > 800){
        $("#scrollToTop").css("opacity", 1);
    }
    if (positionY < 800){
        $("#scrollToTop").css("opacity", 0);
    }
    // $(window).height() //
})