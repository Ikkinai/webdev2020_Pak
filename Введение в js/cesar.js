function cesar(str, shift, action){
	let azb="абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
	let temp="";
	let flag=false;
	let  shift2 = shift%33;
	if(action == 'encode')
	{
		for(let i=0; i<str.length;i++){
			for(let j=0; j<azb.length;){
				if(str[i]==azb[j])
				{
					temp+= azb[((j+shift2>32)?((j+shift2)%33):(j+shift2))];
					flag=true;
					break;
				}
				j++
			}
		if(flag){flag=false; continue;}
		else {temp+=str[i];}
		flag=false;
		}	
	}
	else if(action == 'decode')
	{
		for(let i=0; i<str.length;i++){
			for(let j=0; j<azb.length;){
				if(str[i]==azb[j])
				{
					temp+= azb[((j-shift2<0)?(33+(j-shift2)):(j-shift2))];
					flag=true;
					break;
				}
				j++;
			}
		if(flag){flag=false; continue;}
		else {temp+=str[i];}
		flag=false;
		}	
	}		
	
	return temp;
	
}

let uwu=cesar("хакуна матата", 8, 'encode');
alert(uwu);
let uwu2=cesar("эзтыхз фзъзъз", 8, 'decode');
alert(uwu2);

//хакуна матата