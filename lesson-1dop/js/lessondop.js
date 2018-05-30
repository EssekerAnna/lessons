var num = 33721;
var a = 1;


while (num > 0)
{
 a = a * (num % 10)
 num = Math.floor(num/10)
}
console.log(a);

//1способ
b = Math.pow(a,3);
console.log(b);

//2способ
b = a**3;
console.log(b);

b  = String(b);

console.log(b.split(''));
console.log(b.slice(0, 2));