// const animateCSS = (element, animation, prefix = 'animate__') =>
// 	// We create a Promise and return it
// 	new Promise((resolve, reject) => {
// 	const animationName = `${prefix}${animation}`;
// 	const node = document.querySelector(element);

// 	node.classList.add(`${prefix}animated`, animationName);

// 	// When the animation ends, we clean the classes and resolve the Promise
// 	function handleAnimationEnd(event) {
// 		event.stopPropagation();
// 		node.classList.remove(`${prefix}animated`, animationName);
// 		resolve('Animation ended');
// 	}

// 	node.addEventListener('animationend', handleAnimationEnd, {once: true});
// });

// state1 = false;
// list1 = document.querySelectorAll('.hero-item');

// window.addEventListener('scroll', (w, e) => {
// 	console.log('check');

// 	if (!state1 && scrollY > window.innerHeight - 200) {
// 		state1 = true;
// 		list1.forEach(element => {
// 			animateCSS(element, 'slideOutLeft');
// 		});
// 	}
// 	else if (state1) {
// 		list1.forEach(element => {
// 			animateCSS(element, 'slideInRight');
// 		});
// 	}
// })