//select DOM items
const menu_button = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menu_nav = document.querySelector('.menu-nav');
const menu_branding = document.querySelector('.menu-branding');
const nav_items = document.querySelectorAll('.nav-item');

let show_menu = false;
menu_button.addEventListener('click', toggle_menu);

function toggle_menu() {
    if(!show_menu) {
        menu_button.classList.add('close');
        menu.classList.add('show');
        menu_nav.classList.add('show');
        menu_branding.classList.add('show');
        nav_items.forEach(item => item.classList.add('show'));

        show_menu = true;
    } else {
        menu_button.classList.remove('close');
        menu.classList.remove('show');
        menu_nav.classList.remove('show');
        menu_branding.classList.remove('show');
        nav_items.forEach(item => item.classList.remove('show'));

        show_menu = false;
    }
}

// add selectors slide effect 
var acc = document.getElementsByClassName("travel-sector");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var sector = this.nextElementSibling;
    if (sector.style.display === "block") {
      sector.style.display = "none";
    } else {
        sector.style.display = "block";
    } 
  });
}

