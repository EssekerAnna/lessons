let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < 7; i++) {

		if (i > 4) {
					document.write(week[i].bold() + "<br>");
				} else if (i > 3){
							document.write(week[i].italics() + "<br>");
				} else {
					document.write(week[i] + "<br>");
				}
	}

	let arr = ['32259', '445865', '775519', '3558745', '1125418', '2545458', '856625'];

for (let i = 0; i < 7; i++) {

	let a = arr[i].split('');

 if ((a[0] == 3) || (a[0] == 7)) {
 	console.log(arr[i]);
 } else {
 	console.log ();
 }

	}	

