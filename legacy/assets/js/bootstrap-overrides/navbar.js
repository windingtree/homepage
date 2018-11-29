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
    }, 900); // .navbar-nav translateX transition duration * 2
}

function navbarToggle() {
    if (navbarToggler.getAttribute('aria-expanded') === 'false') {
        if (window.pageYOffset > navbar.offsetHeight) {
            navbar.classList.add('navbar-light');
            navbar.classList.add('bg-white');
            navbar.classList.remove('navbar-dark');
        } else {
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('navbar-light');
            navbar.classList.remove('bg-white');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    navbarToggle();

    navbarShow();
});

window.addEventListener('scroll', function() {
    navbarToggle();
});

window.addEventListener('optimizedResize', function() {
    if (Modernizr.mq(MQ.up)) {
        navbar.setAttribute('style', 'opacity: 0; visibility: hidden;');

        navbarShow();
    }
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
