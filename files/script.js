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
function hoverEffect(isHovering, element) {
	if (isHovering) {
		element.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.6)';
		element.style.transform = 'translateZ(50px)';
	} else {
		element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
		element.style.transform = 'translateZ(0)';
	}
}
