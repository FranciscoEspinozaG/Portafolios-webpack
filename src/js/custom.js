import $ from 'jquery';

$('.owl-theme').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:1000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})