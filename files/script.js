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

document.addEventListener('DOMContentLoaded', function () {
	var ul = document.querySelector('.about-text  .icons-list');
	for (var i = ul.children.length; i >= 0; i--) {
		ul.appendChild(ul.children[(Math.random() * i) | 0]);
	}
});
document.addEventListener('DOMContentLoaded', function () {
	var items = document.querySelectorAll('.about-text .icons-list li');
	var container = document.querySelector('.about-text');

	// Function to check if two items overlap
	function isOverlapping(item1, item2) {
		const rect1 = item1.getBoundingClientRect();
		const rect2 = item2.getBoundingClientRect();

		return !(
			rect1.right < rect2.left ||
			rect1.left > rect2.right ||
			rect1.bottom < rect2.top ||
			rect1.top > rect2.bottom
		);
	}

	// Place each item in a non-overlapping position
	items.forEach(function (item, index) {
		let overlap = true;
		let attempts = 0;

		while (overlap && attempts < 100) {
			// Limit attempts to avoid infinite loop
			overlap = false;
			var posX = Math.floor(
				Math.random() * (container.offsetWidth - item.offsetWidth)
			);
			var posY = Math.floor(
				Math.random() * (container.offsetHeight - item.offsetHeight)
			);

			item.style.left = posX + 'px';
			item.style.top = posY + 'px';

			// Check against all other items placed before this one
			for (let j = 0; j < index; j++) {
				if (isOverlapping(item, items[j])) {
					overlap = true;
					attempts++;
					break;
				}
			}
		}
	});
});
