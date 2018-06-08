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

let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
let date = new Date();
let result = ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear() + ' ' + days[date.getDay()];
document.write(result);

function addZero(i) {
	return (i < 10) ? '0' + i : i;
}




function my_day() {
	let firstDate = new Date(document.getElementById('date1').value);
	let secondDate = new Date(document.getElementById('date2').value);
	let rez = (secondDate - firstDate);
	let endRez = Math.abs(rez/(1000*60*60*24));
	document.getElementById('raz').value = endRez;
}