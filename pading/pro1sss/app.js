const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector('#toggle'),
    // searchBtn = body.querySelector(".search-box"),
    // modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
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