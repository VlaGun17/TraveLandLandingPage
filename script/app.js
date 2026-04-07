"use strict";

const observerOptions = {
    threshold: 0.2,
    root: null
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animItems = document.querySelectorAll('.anim-item');
animItems.forEach(item => {
    observer.observe(item);
});

const animItemsZoom = document.querySelectorAll('.anim-item_zoom');
animItemsZoom.forEach(item => {
    observer.observe(item);
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenuIcon = document.querySelector(".burger_menu-icon");
    const burgerMenuNav = document.querySelector(".burger_menu-nav");
    const themeToggleButton = document.querySelector(".burger_theme-toggle");
    const htmlElement = document.documentElement;

    themeToggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
    }});

    burgerMenuIcon.addEventListener("click", function () {
        burgerMenuNav.classList.toggle("active");
    });
});
