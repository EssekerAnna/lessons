let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
let date = new Date();
let result = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear() + ' ' + days[date.getDay()];
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