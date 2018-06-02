let str = "урок-3-был слишком легким";

str = str.charAt(0).toUpperCase() + str.substr(1);
console.log(str);

str = str.replace(/\-/g, " ");
console.log(str);

str = str.slice(19,26);
console.log(str);

str = str.slice(0,4) + "о";
console.log(str);
alert(str);

// Пункт 4
let arr = [20,33,1,"Человек",2,3];
let newArr = [];
let sum = 0;

for (i = 0; i < arr.length; i++) {
	if (typeof(arr[i]) === "number") {
			let a = Math.pow(arr[i],3);
			newArr.push(a);
	} else {
		delete arr[i];
	}
}

for (let j = 0; j < newArr.length; j++) {
	sum += newArr[j];
}

sum = Math.sqrt(sum);
console.log(sum);

//  Пункт 5
let a;
function newFunction(a) {
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log(a.trim());
		} else if (a.length > 50) {
			a = a.trim();
			a = a.slice(0,50) + "...";
			console.log(a);
		} else {
			alert('Некорректно заполнена строка!');
		}
	}
newFunction("    СтрокаСтрокаСтрокаСтрокаСтрокаСтрокаСтрокаСтрокаСтрокаСтрокаСтрокаСтрока     ");