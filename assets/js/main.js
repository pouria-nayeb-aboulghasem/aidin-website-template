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

homeSlides.forEach(homeSlide => {
    homeSlide.addEventListener("click", (e) => {
        const homeTitle = document.querySelector(".home__title");
        const homeImg = document.querySelector(".home__img");
        const homeSubTitle = document.querySelector(".home__subtitle");
        const directorValue = document.querySelector("#director-value");
        const producerValue = document.querySelector("#producer-value");
        const yearValue = document.querySelector("#year-value");


        homeImg.src = `assets/imgs/showcases/${e.currentTarget.dataset.img}`;
        homeTitle.textContent = e.currentTarget.dataset.title;
        homeSubTitle.textContent = e.currentTarget.dataset.subtitle;
        directorValue.textContent = e.currentTarget.dataset.director;
        producerValue.textContent = e.currentTarget.dataset.producer;
        yearValue.textContent = e.currentTarget.dataset.year;
    });
});;

// swiper

let homeSwiper = new Swiper(".home__swiper", {
    slidesPerView: 1.1,
    spaceBetween: 24,
    grabCursor: true,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 48
        }
    }
});

let recentSwiper = new Swiper(".recent__swiper", {
    slidesPerView: 1.2,
    spaceBetween: 24,
    grabCursor: true,
    breakpoints: {
        576: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 48
        }
    }
});

let newsSwiper = new Swiper(".news__swiper", {
    slidesPerView: 1.5,
    spaceBetween: 24,
    grabCursor: true,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 48
        }
    }
});