$(document) .ready(function(){
  /* ======= Este código sirve para que funcione la animación del Content Hero ======= */
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */

    $('#bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 6000
    });
})
