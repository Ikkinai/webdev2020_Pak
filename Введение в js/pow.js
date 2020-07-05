let x=BigInt(prompt('Введите число число'));
let n=BigInt(prompt('Введите число степень'));
let temp=x;
let num=1n;
for(let i=1n; i<n; i++){
	x*=temp;
}
alert(temp +' в степени '+n+' = '+x );