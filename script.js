function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.querySelectorAll('.navbar a');

    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener('click', function(event) {
            var targetSectionId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                event.preventDefault();
                var currentSlide = document.querySelector('.current');
                currentSlide.classList.remove('current');
                targetSection.classList.add('current');
            }
        });
    }
});

function nextSlide() {
    var currentSlide = document.querySelector('.current');
    currentSlide.classList.remove('current');
    var nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        nextSlide.classList.add('current');
    }
}

function PrevSlide() {
    var currentSlide = document.querySelector('.current');
    currentSlide.classList.remove('current');
    var PrevSlide = currentSlide.previousElementSibling;
    if (PrevSlide) {
        PrevSlide.classList.add('current');
    }
}
