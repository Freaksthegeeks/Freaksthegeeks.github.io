/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// Smooth scroll for same-page anchors and simple project download counters (localStorage)
document.addEventListener('DOMContentLoaded', function () {
	// Smooth scroll for links that start with '#'
	document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
		anchor.addEventListener('click', function (e) {
			var href = anchor.getAttribute('href');
			if (!href || href.length <= 1) return;
			// Only handle same-page hashes
			if (href.startsWith('#')) {
				e.preventDefault();
				var target = document.querySelector(href);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
					// update the URL hash without jumping
					history.pushState(null, '', href);
				}
			}
		});
	});

	// No project counters — keep smooth-scroll only
});