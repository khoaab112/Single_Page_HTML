// "use strict";

// var fullHeight = function() {
//     var fullheightElements = document.querySelectorAll('.js-fullheight');
//     var resizeHandler = function() {
//         fullheightElements.forEach(function(element) {
//             element.style.height = window.innerHeight + 'px';
//         });
//     };

//     resizeHandler();
//     window.addEventListener('resize', resizeHandler);
// };

// fullHeight();

// addEventListener('touchstart', this.callPassedFuntion, {
//     passive: false
// });




// var togglePassword = function() {
//     var toggleButtons = document.querySelectorAll('.toggle-password');
//     toggleButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             this.classList.toggle('fa-eye');
//             this.classList.toggle('fa-eye-slash');

//             var input = document.querySelector(button.getAttribute('toggle'));
//             if (input.getAttribute('type') === 'password') {
//                 input.setAttribute('type', 'text');
//             } else {
//                 input.setAttribute('type', 'password');
//             }
//         });
//     });
// };

// togglePassword();