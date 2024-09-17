list = document.querySelectorAll(".text-section");

function selectSection(num) {
	list.forEach(element => {
		element.style.color = 'white';
		element.style.fontWeight = 'normal';
	});

	if (num >= 0) {
		list[num].style.color = 'var(--primary)';
		list[num].style.fontWeight = 'bold';
	}
}