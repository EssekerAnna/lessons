let money = prompt("Ваш бюджет на месяц?");
let name = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

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


if (time < 0) {
	console.log("Такого просто не может быть");
} else if (time > 8 && time < 20) {
	console.log("Время работать!");
} else if (time < 24) {
	console.log("Уже слишком поздно!");
} else {
	console.log("В сутках только 24 часа!");
};

alert("Ваш бюджет на один день: " + (mainList.budget / 30));

console.log(mainList);