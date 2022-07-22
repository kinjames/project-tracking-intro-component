const menuBtns = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".mobile-menu")
const header = document.querySelector(".header")

menuBtns.addEventListener('click', function() {
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open')
    } else {
        mobileMenu.classList.add('open')
    }
})