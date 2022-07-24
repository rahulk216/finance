// particlesJS.load('particles-js', 'assets/particles.json', function() {
//     console.log('callback - particles.js config loaded');
// });
// Header
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {

        //toggle active class
        nav.classList.toggle('nav-active');
        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation=''
            }
            else{
                 link.style.animation = `navLinksSlide 0.5s ease forwards ${index / 7}s`;
            }
           
        });
        burger.classList.toggle('animate');
    });
}

navSlide();

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
