const navbar = document.getElementById('navbar');
const navbarNav = document.getElementById('navbar-nav');
const navbarToggler = document.getElementById('navbar-toggler');
const navbarBtn = document.getElementById('navbar-btn');

function navbarShow() {
    if (Modernizr.mq(MQ.up)) {
        navbarNav.setAttribute('style', 'transform: translateX(' + (navbarBtn.offsetWidth + 30) + 'px)');
    }

    setTimeout(function() {
        navbar.setAttribute('style', 'opacity: 1; visibility: visible;');
    }, 450); // .navbar-nav translateX transition duration
}

function navbarToggle() {
    if (navbarToggler.getAttribute('aria-expanded') === 'false') {
        if (window.scrollY > navbar.offsetHeight) {
            navbar.classList.add('navbar-light', 'bg-white');
            navbar.classList.remove('navbar-dark');
        } else {
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('navbar-light', 'bg-white');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    navbarToggle();
});

window.addEventListener('scroll', function() {
    navbarToggle();
});

window.addEventListener('load', function() {
    navbarShow();
});

window.addEventListener('optimizedResize', function() {
    navbar.setAttribute('style', 'opacity: 0; visibility: hidden;');

    navbarShow();
});

navbarToggler.addEventListener('touchend', function() {
    const icon = this.querySelector('.mdi');

    if (this.getAttribute('aria-expanded') === 'false') {
        navbar.classList.add('navbar-light', 'bg-white');
        navbar.classList.remove('navbar-dark');

        icon.classList.remove('mdi-menu');
        icon.classList.add('mdi-close');
    } else {
        setTimeout(function() {
            if (document.documentElement.scrollTop <= navbar.offsetHeight) {
                navbar.classList.add('navbar-dark');
                navbar.classList.remove('navbar-light', 'bg-white');
            }

            icon.classList.remove('mdi-close');
            icon.classList.add('mdi-menu');
        }, 250); // Bootstrap $transition-collapse transition duration .35s - (substract) .1s
    }
});
