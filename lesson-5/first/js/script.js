let menuItem = document.querySelectorAll('.menu-item'),
				menu = document.querySelector('.menu'),
				appleTitle = document.getElementById('title'),
				promptDiv = document.getElementById('prompt'),
				adv = document.querySelector('.adv');

menu.insertBefore(menuItem[1], menuItem[3]);

let li = document.createElement('li');
li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

appleTitle.innerHTML = appleTitle.innerHTML.replace('Мы продаем только технику Apple', 'Мы продаем только подлинную технику Apple');

adv = adv.remove();

let opinion = prompt('Как вы относитесь к технике Aplle?');
promptDiv.appendChild(document.createTextNode(opinion));