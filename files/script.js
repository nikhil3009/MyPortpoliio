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
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
console.log(fullName);
console.log(email);
console.log(message);

function sendEmail() {
	if (!fullName.value || !email.value || !message.value) {
		Swal.fire({
			title: 'Error',
			text: 'Please fill in all required fields.',
			icon: 'error',
		});
		return;
	}
	const bodyMessage = `Full Name: ${fullName.value} <br> Email:${email.value} Message:${message.value}`;
	Email.send({
		Host: 'smtp.elasticemail.com',
		Username: 'sainikhil3009@gmail.com',
		Password: 'E923E880B11D7C98E497E9095A5D19229F82',
		To: 'sainikhil3009@gmail.com',
		From: 'sainikhil3009@gmail.com',
		Subject: subject.value || 'No Subject',
		Body: bodyMessage,
	})
		.then((message) => {
			if (message == 'OK') {
				Swal.fire({
					title: 'Success',
					text: 'Thankyou for contacting, Message sent Successfully',
					icon: 'success',
				});
			} else {
				Swal.fire({
					title: 'Error',
					text: 'Your message could not be sent. Please try again later.',
					icon: 'error',
				});
			}
		})
		.catch((error) => {
			Swal.fire({
				title: 'Error',
				text: 'There was an error sending your message. Please try again later.',
				icon: 'error',
			});
			console.error('Email sending error:', error);
		});
}
form.addEventListener('submit', (e) => {
	e.preventDefault();
	sendEmail();
});
