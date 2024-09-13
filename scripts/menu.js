menu = document.querySelector('.menu');
navbar = document.querySelector('.nav-bar');
prevY = 0;

function openMenu() {
	menu.classList.toggle('hidden')
}

document.addEventListener('scroll', () => {
	console.log(scrollY + ' ' + prevY);
	
	if (scrollY > window.innerHeight - 200 && scrollY > prevY)
		navbar.style.opacity = 0;
	else
		navbar.style.opacity = 1;
	prevY = scrollY;
});
