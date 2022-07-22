// particlesJS.load('particles-js', 'assets/particles.json', function() {
//     console.log('callback - particles.js config loaded');
// });

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
