var money = +prompt("Ваш бюджет на месяц?", "10000");
var nameShop = prompt("Название вашего магазина?", "Фиалка");

var first = prompt("Какой тип товаров будем продавать?", "Овощи");
var second = prompt("Какой тип товаров будем продавать?", "Овощи");
var third = prompt("Какой тип товаров будем продавать?", "Овощи");

var mainList = {
	money,
	nameShop,
	shopGoods: [first, second, third],
	employers: {name: "Вася, Петя"},
	open: true
};

console.log(mainList);

var oneDay = money / 30;
alert("Ваш бюджет на один день: " + (oneDay));
console.log("Ваш бюджет на один день: ", oneDay);