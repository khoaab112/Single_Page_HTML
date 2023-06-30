const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector('#toggle'),
    btnDark = body.querySelector('.btn-dark'),
    modeText = body.querySelector(".mode-text");
const titleMenu = document.querySelectorAll('.menu-title-sidebar');

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    for (var value of titleMenu) {
        if (value.style.display === "block") {
            value.style.display = "none";
        }
        else
            value.style.display = "block";
    }
})
btnDark.addEventListener("click", () => {
    body.classList.toggle("dark");

})

//
const listMenu = document.querySelector(".list-menu");
const submenuItems = document.querySelectorAll(".submenu_item");
listMenu.addEventListener("mouseenter", () => {
    if (listMenu.classList.contains("hoverable")) {
        listMenu.classList.remove("close");
    }
});
listMenu.addEventListener("mouseleave", () => {
    if (listMenu.classList.contains("hoverable")) {
        listMenu.classList.add("close");
    }
});
submenuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.toggle("show_submenu");
        submenuItems.forEach((item2, index2) => {
            if (index !== index2) {
                item2.classList.remove("show_submenu");
            }
        });
    });
});

if (window.innerWidth < 768) {
    listMenu.classList.add("close");
} else {
    listMenu.classList.remove("close");
}
//footer back-on-top
//nó hoạt động khi cuộn xuống 300px
var btnOnTop = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnOnTop.addClass('show');
  } else {
    btnOnTop.removeClass('show');
  }
});

btnOnTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});