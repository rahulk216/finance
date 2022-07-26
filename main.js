const nav = document.querySelector('.nav');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

const navItems = document.querySelector('.nav-items');
const navLinks = document.getElementsByClassName('nav-links');
console.log(navLinks);
function navbar() {
	open.addEventListener('click', () => {
		navItems.classList.add('active-navbar');
	});
	close.addEventListener('click', () => {
		navItems.classList.remove('active-navbar');
	});
	for (var i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener('click', () => {
			navItems.classList.remove('active-navbar');
		});
	}
}
navbar();
document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('contact-slider') != null) {
		var sliderNew = new Splide('#contact-slider', {
			width: '100%',
			arrows: false,
		});
		sliderNew.mount();
		console.log('mounted');
	}
});
