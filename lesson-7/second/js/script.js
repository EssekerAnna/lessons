let clock = document.getElementById('clock');

function myClock() {
	let time = new Date();
	let h = time.getHours().toString();
	let m = time.getMinutes().toString();
	let s = time.getSeconds().toString();

	if (h.length < 2) {
		h = '0' + h;
	}

	if (m.length < 2) {
		m = '0' + m;
	}

	if (s.length < 2) {
		s = '0' + s;
	}

	let clockString = h + ':' + m + ':' + s;
	clock.textContent = clockString;

}

myClock();
setInterval(myClock, 1000);