list = document.querySelectorAll(".text-section");

function selectSection(num) {
	list.forEach(element => {
		element.style.color = 'white';
	});

	if (num >= 0)
		list[num].style.color = 'var(--pink)';
}