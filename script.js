const burgerMenu = document.getElementById('burger-menu');
const mobileNavigation = document.getElementById('mobile-navigation');

burgerMenu.addEventListener('click', () => {
    mobileNavigation.classList.toggle('active');
});

