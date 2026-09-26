/*============================================
HEADER JAVASCRIPT
====================================== */

// OPENING THE HUMBURGER MENU

const menuToggle = document.querySelector(".menu-toggle");

const mainNav = document.querySelector(".main-nav");

const menuClose = document.querySelector(".menu-close");

menuToggle.addEventListener("click", () => {

    mainNav.classList.add("menu-open");
    
});

menuClose.addEventListener("click", () => {

    mainNav.classList.remove("menu-open");
});

// ADDING AND REMOVING ACTIVE CLASS

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {

    link.addEventListener("click", () => {

        navLinks.forEach(function(item) {

            
            item.classList.remove("active");
        });

        link.classList.add("active");
    })
})