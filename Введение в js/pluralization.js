function pluralizeRecords(n){
	let perem = "";
	
	
	switch (n%10){
	
		case 1: 
			perem =`Здесь ${n} запись!`;
			break;
		case 2: 
			
		case 3: 
			
		case 4: 
			perem =`Здесь ${n} записи!`;
			break;
		case 5: 
			
		case 6: 
			
		case 7: 
			
		case 8: 
			
		case 9: 
			
		case 0: 
			perem =`Здесь ${n} записей!`;			
			break;
	}
	return perem;
}

alert(pluralizeRecords(10));
alert(pluralizeRecords(110));
alert(pluralizeRecords(111));
alert(pluralizeRecords(112));
alert(pluralizeRecords(115));