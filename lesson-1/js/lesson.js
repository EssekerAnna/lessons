let money, name, time, price;

function start() {
	do {
		money = prompt("Ваш бюджет на месяц?", "");
	}
	while (isNaN(money) || money == "" || money == null);
	name = prompt("Название вашего магазина?", "").toUpperCase();
	time = 18;
}
start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "");
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
			} else {
				alert('Некорректно заполнена строка!');
				i--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log("Такого просто не может быть");
		} else if (time > 8 && time < 20) {
			console.log("Время работать!");
			mainList.open = true;
		} else if (time < 24) {
			console.log("Уже слишком поздно!");
		} else {
			console.log("В сутках только 24 часа!");
		}
	},
	budgetDay: function budgetDay() {
		alert("Ваш бюджет на один день: " + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount(price) {
		if (mainList.discount == true) {
			alert("Цена со скидкой: " + (price / 100 * 80));
		} else {
			alert("Цена без скидки: " + price);
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; i++) {
			let a = prompt("Введите имя сотрудника:", "");
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			mainList.employers[i] = i + " - " + a;
			} else {
				alert('Некорректно заполнена строка!');
				i--;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Перечислите через запятую товары", "");
			if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '' && items.length < 50) {
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt("Подождите, еще", ""));
				mainList.shopItems.sort();
			} else {
				alert('Некорректно заполнена строка!');
				i--;
			}
			mainList.shopItems.forEach(function(item,i,arr) {
				i++;
				console.log("У нас вы можете купить: " + i + " - " + item);
			})
		}
	}
}

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

for (let key in mainList) {
	alert("Наш магазин включает в себя: " + key);
}

console.log(mainList);