function gcd(a,b){
	let x= 1;
	if(a==0||b==0) return 0;
	for(let i=1; (i<=((a<b)?a:b)); i++)
	{
			if(a%i==0&&b%i==0){x=i;}
		
	}
	
	
	return x;
}

alert(gcd(25, 625));
alert(gcd(625, 25));
alert(gcd(625, 625));
alert(gcd(600, 625));
alert(gcd(0, 625));