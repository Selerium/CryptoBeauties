list = document.querySelectorAll(".text-section");

function selectSection(num) {
	list.forEach(element => {
		element.style.color = 'white';
	});

	list[num].style.color = 'var(--pink)';
}