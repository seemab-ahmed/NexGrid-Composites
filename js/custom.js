$(document).ready(function () {
    var s = $(".header");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if ((windowpos >= pos.top) & (windowpos >= 30)) {
            $("header").addClass("top");
        } else {
            $(".header").removeClass("top");
        }
    });
});
// document.querySelector('.menu-icon').addEventListener('click', function () {
//     document.querySelector('nav').classList.toggle('show');
// });

// Load Btn js Here
document.addEventListener('DOMContentLoaded', () => {
    const loadBtn = document.getElementById('load-btn');
    const allCards = document.querySelectorAll('.news-card');
    const initialVisibleCount = 3; // Number of cards to show initially
    const loadMoreCount = 3; // Number of cards to reveal on each click

    // Function to initialize the visibility of cards
    function initializeCards() {
        allCards.forEach((card, index) => {
            if (index >= initialVisibleCount) {
                card.classList.add('hidden');
            }
        });
    }

    // Function to show more cards
    function showMoreCards() {
        const hiddenCards = document.querySelectorAll('.news-card.hidden');
        hiddenCards.forEach((card, index) => {
            if (index < loadMoreCount) {
                card.classList.remove('hidden');
            }
        });

        // Hide the button if there are no more hidden cards
        if (document.querySelectorAll('.news-card.hidden').length === 0) {
            loadBtn.style.display = 'none';
        }
    }

    // Initialize card visibility on page load
    initializeCards();

    // Event listener for the 'Load More' button
    loadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showMoreCards();
    });
});
//   testimonial slider js here 

$('.testi-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    fade: true, // Enable fade effect
    cssEase: 'linear', // Optional: Ensures a smooth linear fade transition
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>', // Custom left arrow
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>'  // Custom right arrow
});
// resoonsive nav
function myFunction() {
    let navElement = document.querySelector("nav");
    navElement.classList.toggle("nav-show");
    let toggleBtnElement = document.querySelector(".toggle-btn");
    toggleBtnElement.classList.toggle("toggle-open");
  }
  document.querySelector(".toggle-btn").addEventListener("click", myFunction);
  