/** @format */

var typed = new Typed('.text', {
	strings: ['Full-Stack Web Development.', 'Cloud Engineering.'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true,
});

const toTop = document.querySelector('.top');
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add('active');
	} else {
		toTop.classList.remove('active');
	}
});
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	});
});
