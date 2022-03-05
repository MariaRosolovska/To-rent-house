


$(function(){

    $('.slider').slick({
        
        prevArrow: '<button type="button" class="slick-prev"><img src="images/Slider/left.png" alt="" style="width: 40px; height: 40px;"></button>',
        nextArrow: '<button type="button" class="slick-next">  <img src="images/Slider/right.png" alt="" style="width: 40px; height: 40px;"></button>',

        fade: true,
        responsive: [
                {
                    breakpoint: 441,
                    settings:{
                        arrows: false
                }
            }
        ]
    });

});