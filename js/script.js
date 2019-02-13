$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    console.log(positionY)

    if (positionY > 800){
        $("#scrollToTop").css("opacity", 1);
    }
    if (positionY < 800){
        $("#scrollToTop").css("opacity", 0);
    }
    if (positionY => 100){
        console.log("menu")
        $("ul").css("height", 50);
        $("ul").css("position", "fixed");

    }
    // $(window).height() //
     // lorsque positionY est supérieur à 100
        // réduire height de la nav 
        // positionner la nav en fixe en haut de la page
})