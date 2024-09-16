menu = document.querySelector('.menu');
navbar = document.querySelector('.nav-bar');
prevY = 0;

nav1 = document.querySelector('#nav-1');
nav2 = document.querySelector('#nav-2');
nav3 = document.querySelector('#nav-3');

function openMenu() {
	menu.classList.toggle('hidden')
}

document.addEventListener('scroll', () => {
	if (scrollY > window.innerHeight - 200 && scrollY > prevY)
		navbar.style.opacity = 0;
	else
		navbar.style.opacity = 1;
	prevY = scrollY;

	if (scrollY > window.innerHeight * 3 - 200)
		selectSection(2);
	else if (scrollY > window.innerHeight * 2 - 200)
		selectSection(1);
	else if (scrollY > window.innerHeight - 200)
		selectSection(0);
	else
		selectSection(-1);
});
