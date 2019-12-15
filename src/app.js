import "./estilo.scss";
import "bootstrap";
import "./owl-carosuel"
import $ from 'jquery';

$('#btn-alert').click(() => alert('click con jquery'));

console.log('Desarrollado por Francisco Espinoza 💩')

$('.owl-foto').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})