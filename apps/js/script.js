const menuBtns = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".mobile-menu")
const header = document.querySelector(".header")

menuBtns.addEventListener('click', function() {
    if (mobileMenu.classList.contains('hide')){
        menuBtns.classList.add('burger')
        mobileMenu.classList.remove('hide')
        mobileMenu.classList.add('open')
    } else {
        mobileMenu.classList.remove('open')
        mobileMenu.classList.add('hide')
        menuBtns.classList.remove('burger')
    }
})