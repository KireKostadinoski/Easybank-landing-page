const hamburgerBtn = document.getElementById('hamburgerBtn');
const mockups = document.getElementById('mockups');
const mobileMenu = document.getElementById('mobileMenu');
const section1Div = document.getElementById('section1Div');

function openMenu() {
    mobileMenu.classList.remove('hidden');
    hamburgerBtn.src = "./images/icon-close.svg";
    mockups.classList.add('hidden');
    section1Div.classList.add('opacity-65')
}

function closeMenu() {
    mobileMenu.classList.add('hidden');
    hamburgerBtn.src = "./images/icon-hamburger.svg";
    mockups.classList.remove('hidden');
    section1Div.classList.remove('opacity-65')
}

hamburgerBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        openMenu();
    } else {
        closeMenu();
    }
});
