function myFunction() {
    menu = document.getElementById("navigation-menu");

    if (menu.style.display == "none") {
        menu.style.display = "block"
        menu.style.transform = "translateX(0)";
    }
    else {
        menu.style.display = "none";
        menu.style.transform = "translateX(-100%)";
    }
}
