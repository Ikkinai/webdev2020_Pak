function minDigit(x){
	let x_temp=x;
	let min= x%10;
	x_temp/=10;
	x_temp=Math.floor(x_temp);
	
	while(x_temp/10>1)
	{
		if(x_temp%10<min)
		{min=x_temp%10;}
	x_temp/=10;
	x_temp=Math.floor(x_temp);
		
	}
	if(x_temp<min)
		{min=x_temp;}
	 return min;
	 	
}

alert(minDigit(276636));
alert(minDigit(576636));