function fibb(n){
	if(n>1000){alert('wrong'); return 0; }
	let fie = 1, emma=2; //меньше, больше 
	let i1=3;  i2=4; temp =emma;
	while(i2<=n)
	{
		emma+=fie; 
		fie=temp;
		temp=emma;
		i2++;  i1++;
	}

	return emma;
}

alert(fibb(5));
alert(fibb(4));
alert(fibb(18));