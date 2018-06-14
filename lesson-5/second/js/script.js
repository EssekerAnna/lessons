let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');


let money, price;

open.addEventListener('click', () => {
	do {
		money = prompt("Ваш бюджет на месяц?", "");
	}
	while (isNaN(money) || money == "" || money == null);
	budget_value.textContent = money;
	name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase();

	price = confirm("Будем активировать систему скидок?");

	if (price === true) {
		mainList.discount = true;
		discount_value.style.backgroundColor = 'green';
	} else {
		mainList.discount = false;
		discount_value.style.backgroundColor = 'red';
	}

});


choose_item.addEventListener('change', () => {
	let items = choose_item.value;
	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();
		items_value.textContent = mainList.shopItems;
	}
});

// блокируем кнопки
goods_btn.disabled = true;
budget_btn.disabled = true;
employers_btn.disabled = true;

// пишем функцию блокировки инпутов
function disabledInp (bool){
	
	choose_item.disabled = bool;
	count_budget_value.disabled = bool;
	for(let i = 0; i < goods_item.length; i++){
		goods_item[i].disabled = bool;
	}

	for(let i = 0; i < hire_employers_item.length; i++){
		hire_employers_item[i].disabled = bool;
	}
}
disabledInp (true);
// пишем функцию блокировки инпутов

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0 || time == '') {
		console.log("Такого просто не может быть");
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
		mainList.open = true;
	} else if (time < 24) {
		console.log("Уже слишком поздно!");
		mainList.open = false;
	} else {
		console.log("В сутках только 24 часа!");
		mainList.open = false;
	}

	if (mainList.open === true) {
		isopen_value.style.backgroundColor = 'green';
	} else {
		isopen_value.style.backgroundColor = 'red';
	}
		
// по инпутам
	if (mainList.open === true) {
		// вызываем функцию с значением ложь
		disabledInp (false);
		budget_btn.disabled = false;
		count_budget_value.disabled = true;
	} 
});

// по кнопкам
for (let i = 0; i < goods_item.length; i++) {
	 goods_item[i].addEventListener('change', ()=>{
		
			if (goods_item[0].value === "" || goods_item[1].value === "" || goods_item[2].value === "" ||goods_item[3].value === "") {
				goods_btn.disabled = true;
			} else {
				goods_btn.disabled = false;
			}
		
	});
}

for (let i = 0; i < hire_employers_item.length; i++) {
	 hire_employers_item[i].addEventListener('change', ()=>{
		
			if (hire_employers_item[0].value === "" || hire_employers_item[1].value === "" || hire_employers_item[2].value === "") {
				employers_btn.disabled = true;
			} else {
				employers_btn.disabled = false;
			}
		
	});
}

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: [],
	open: false,
	discount: true,
	shopItems: []
};

budget_btn.addEventListener('click', () => {
	count_budget_value.value = money / 30;
});


goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;
		if ((typeof(a)) === 'string' && (typeof(a)) != null &&  a.length < 50) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		} else {
			alert('Некорректно заполнена строка!');
			i--;
		}
	}
});

employers_btn.addEventListener ('click', () => {
	for (let i = 0; i < hire_employers_item.length; i++) {
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;
		employers_value.textContent = mainList.employers;
	}
});

for (let i = 0; i < 3; i++) {
	hire_employers_item[i].addEventListener("change", () => {
		let pattern = /[^а-яА-ЯёЁ]/;

		if (pattern.test(hire_employers_item[i].value)) hire_employers_item[i].value = "";
	});
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

/*for (let key in mainList) {
	alert("Наш магазин включает в себя: " + key);
}*/

console.log(mainList);