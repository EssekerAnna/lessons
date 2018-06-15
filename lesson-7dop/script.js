let stepLeft = 0,
				startDate = Date.now(),
				el = document.getElementById('round'),
				elem = document.getElementById('square'),
				btn = document.querySelector('.btn');

function move() {
	let timeDuration = Date.now() - startDate;
	if (timeDuration > 2500) {
			return;
	};
	stepLeft += 5;
	el.style.left = stepLeft + 'px';
	elem.style.top = stepLeft + 'px';
	requestAnimationFrame(move);
}

btn.addEventListener('click', move);