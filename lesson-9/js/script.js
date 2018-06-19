let age = document.getElementById('age'),
				user = {
					name: 'Анна',
					surname: 'Щанова'
				}
 
function showUser(surname, name) {
	alert("Пользователь " + user.surname + " " + user.name + ", его возраст " + this.age.value);
}
 
showUser();