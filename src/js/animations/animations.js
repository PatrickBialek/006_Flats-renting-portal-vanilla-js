const nav = document.querySelector('#header-nav');

if (nav) {
	function navScrollAnimation(e) {
		if (window.scrollY > 0) {
			document.body.classList.add('active-scroll');
		} else {
			document.body.classList.remove('active-scroll');
		}
	}

	document.addEventListener('scroll', navScrollAnimation);
}