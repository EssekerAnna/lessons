let money, name, time, price

function start() {
	money = prompt("Ваш бюджет на месяц?");
	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?");
	};
	name = prompt("Название вашего магазина?").toUpperCase();
}
start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {

		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
		} else {
			alert('Некорректно заполнена строка!');
			i--;
		}
	}
}
chooseGoods();

/*let i = 0;
while (i < 4) {
	let a = prompt("Какой тип товаров будем продавать?");
	i++;
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Всё верно!');
		mainList.shopGoods[i] = a;
	} else {
		alert('Некорректно заполнена строка!');
		i--;
	}
}*/

/*let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	i++;
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Всё верно!');
		mainList.shopGoods[i] = a;
	} else {
		alert('Некорректно заполнена строка!');
		i--;
	}
}
while (i < 4);*/

function workTime(time) {
	if (time < 0) {
		console.log("Такого просто не может быть");
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
	} else if (time < 24) {
		console.log("Уже слишком поздно!");
	} else {
		console.log("В сутках только 24 часа!");
	}
}
workTime(18);

function budgetDay() {
	alert("Ваш бюджет на один день: " + (mainList.budget / 30));
}
budgetDay();

function discountSystem(price) {
	if (mainList.discount == true) {
		alert("Цена со скидкой: " + (price / 100 * 80));
	} else {
		alert("Цена без скидки: " + price);
	}
}
discountSystem(1000);

function employers() {
	for (let i = 0; i < 4; i++) {

		let a = prompt("Введите имя сотрудника:");

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		mainList.employers[i] = i + " - " + a;
		} else {
			alert('Некорректно заполнена строка!');
			i--;
		}
	}
}
employers();

console.log(mainList);