window.addEventListener('DOMContentLoaded', () => {
	let tab = document.getElementsByClassName('info-header-tab'),
					tabContent = document.getElementsByClassName('info-tabcontent'),
					info = document.getElementsByClassName('info-header')[0],
					timeInterval;

let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}

	}

	hideTabContent(1);

let showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

//Timer
let deadline = '2018-06-23';
let getTimeRemaining = (endtime) => {
	let t = Date.parse(endtime) - Date.parse(new Date()),
					seconds = Math.floor((t / 1000) % 60),
					minutes = Math.floor ((t / 1000 / 60) % 60),
					hours = Math.floor((t / (1000 * 60 * 60)));

					return {
						'total': t,
						'hours': hours,
						'minutes': minutes,
						'seconds': seconds
					};
};

let addZero = (i) => {
	return (i < 10) ? '0' + i : i;
}

let setClock = (id, endtime) => {
	let timer = document.getElementById(id),
					hours = timer.querySelector('.hours'),
					minutes = timer.querySelector('.minutes'),
					seconds = timer.querySelector('.seconds');

let updateClock = () => {
		let t = getTimeRemaining(endtime);
		hours.innerHTML = addZero(t.hours);
		minutes.innerHTML = addZero(t.minutes);
		seconds.innerHTML = addZero(t.seconds);


		if (t.total <= 0) {
			clearInterval(timeInterval);
			hours.innerHTML = '00';
			minutes.innerHTML = '00';
			seconds.innerHTML = '00';
		}


	};

	updateClock();
	timeInterval = setInterval(updateClock, 1000);

};

setClock('timer', deadline);

//Modal
let  more = document.querySelector('.more'),
					descr = document.querySelectorAll('.description-btn'),
					overlay = document.querySelector('.overlay'),
					close = document.querySelector('.popup-close');

more.addEventListener('click', () => {
	more.classList.add('more-splash');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
	overlay.style.display = 'none';
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
});

for (let i = 0; i < descr.length; i++) {
	descr[i].addEventListener('click', () => {
		more.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
}

// Form
let message = new Object();
message.loading = 'Загрузка...';
message.success = 'Спасибо! Скоро мы с вами свяжемся';
message.failure = 'Что-то пошло не так...';

let form = document.getElementsByClassName('main-form')[0],
				input = document.getElementsByTagName('input'),
				statusMessage = document.createElement('div');

statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	form.appendChild(statusMessage);

	// AJAX
	let request = new XMLHttpRequest();
	request.open('POST', '../server.php');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	let formData = new FormData(form);

	request.send(formData);

	request.onreadystatechange = function() {
		if (request.readyState < 4) {
			statusMessage.innerHTML = message.loading;
		} else if (request.readyState === 4) {
			if (request.status == 200 && request.status < 300) {
				statusMessage.innerHTML = message.success;
				// Добавляем контент на страницу
			}
			else {
				statusMessage.innerHTML = message.failure;
			}
		}
	}
	for (let i = 0; i < input.length; i++) {
		input[i].value = '';
		// Очищаем поля ввода
	}
});


// FormContacts

let formCont = document.getElementsByClassName('contact-form')[0],
				inputCont = document.getElementsByTagName('input'),
				statusMessageCont = document.createElement('div');

statusMessageCont.classList.add('status-cont');

formCont.addEventListener('submit', function(event) {
	event.preventDefault();
	formCont.appendChild(statusMessageCont);

	// AJAX
	let request = new XMLHttpRequest();
	request.open('POST', '../server.php');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	let formDataCont = new FormData(formCont);

	request.send(formDataCont);

	request.onreadystatechange = function() {
		if (request.readyState < 4) {
			statusMessageCont.innerHTML = message.loading;
		} else if (request.readyState === 4) {
			if (request.status == 200 && request.status < 300) {
				statusMessageCont.innerHTML = message.success;
				// Добавляем контент на страницу
			}
			else {
				statusMessageCont.innerHTML = message.failure;
			}
		}
	}
	for (let i = 0; i < inputCont.length; i++) {
		inputCont[i].value = '';
		// Очищаем поля ввода
	}
});


});