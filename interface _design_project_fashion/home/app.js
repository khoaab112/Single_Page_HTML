// document.addEventListener("DOMContentLoaded", function() {
//     "use strict";

//     var dropdowns = document.querySelectorAll('nav .dropdown');

//     dropdowns.forEach(function(dropdown) {
//         dropdown.addEventListener('mouseenter', function() {
//             this.classList.add('show');
//             this.querySelector('> a').setAttribute('aria-expanded', true);
//             this.querySelector('.dropdown-menu').classList.add('show');
//         });

//         dropdown.addEventListener('mouseleave', function() {
//             this.classList.remove('show');
//             this.querySelector('> a').setAttribute('aria-expanded', false);
//             this.querySelector('.dropdown-menu').classList.remove('show');
//         });
//     });
// });
function clickMunuMb() {
    var ul = document.getElementById('ftco-nav');
    console.log(ul.classList);
    if (ul.classList.contains('show')) {
        ul.classList.remove("show");
    } else {
        ul.classList.add("show");
    }
}
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)