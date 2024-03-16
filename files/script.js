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
		center: true, // Center the active item
		items: 3, // The number of items you want to see on the screen
		loop: true, // Loop the items
		margin: 10, // Margin between each item
		nav: true, // Show next/prev buttons
		navText: [
			'<i class="fas fa-chevron-left"></i>', // Replace with your own previous icon
			'<i class="fas fa-chevron-right"></i>', // Replace with your own next icon
		],
		responsive: {
			0: {
				items: 1, // On small screens, show one item
			},
			600: {
				items: 3, // On medium screens, show three items
			},
			1000: {
				items: 5, // On large screens, show five items
			},
		},
	});

	// Custom Button Event Handling
	$('.customNextBtn').click(function () {
		$('.owl-carousel').trigger('next.owl.carousel');
	});

	$('.customPrevBtn').click(function () {
		$('.owl-carousel').trigger('prev.owl.carousel');
	});

	// Listen to owl events:
	$('.owl-carousel').on('changed.owl.carousel', function (event) {
		// You can trigger some action here if needed when the carousel changes
	});
});
