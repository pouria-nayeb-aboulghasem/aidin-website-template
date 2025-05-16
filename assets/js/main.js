/* menu active section */

const sections = document.querySelectorAll('[data-section]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive);

const homeSlides = document.querySelectorAll(".home__figure");
const homeTitle = document.querySelector(".home__title");
const homeImg = document.querySelector(".home__img");
const homeSubTitle = document.querySelector(".home__subtitle");
const directorValue = document.querySelector("#director-value");
const producerValue = document.querySelector("#producer-value");
const yearValue = document.querySelector("#year-value");

homeSlides.forEach(homeSlide => {
    homeSlide.addEventListener("click", (e) => {
        homeImg.src = `assets/imgs/showcases/${e.currentTarget.dataset.img}`;
        homeTitle.textContent = e.currentTarget.dataset.title;
        homeSubTitle.textContent = e.currentTarget.dataset.subtitle;
        directorValue.textContent = e.currentTarget.dataset.director;
        producerValue.textContent = e.currentTarget.dataset.producer;
        yearValue.textContent = e.currentTarget.dataset.year;
    });
});

// menuNav
const menuRowLg = document.querySelector(".menu__row--lg"),
    menuRowSm = document.querySelector(".menu__row--sm"),
    menuToggle = document.querySelector(".nav__button--rotate"),
    menuIcon = document.querySelector("#menu-icon"),
    menuNav = document.querySelector(".menu__nav");

let toggleClose = false;
menuToggle.addEventListener("click", () => {
    menuRowLg.classList.toggle("active");
    menuNav.classList.toggle("active");
    menuRowSm.classList.toggle("active");
    menuToggle.classList.toggle("active");

    menuIcon.className = toggleClose ? "ri-menu-2-line" : "ri-close-large-line";
    toggleClose = !toggleClose;
});