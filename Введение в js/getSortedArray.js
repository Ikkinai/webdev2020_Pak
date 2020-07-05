function getSortedArray(array, key) {
  
   let arr2=array;
   
   
   if(key=="name"){
	    for(let i=0; i<(arr2.length-1); i++)
	   {
		   for(let j=0; j<(arr2.length-1); j++)
		   {
			   if(arr2[j].name.charAt(0)>arr2[j+1].name.charAt(0)) 
			   {
				   let temp =arr2[j+1]; 
				   arr2[j+1]= arr2[j];
				   arr2[j] = temp;
			   } 
		   }
	   }
   }
   else if(key=="age"){

	   for(let i=0; i<(arr2.length-1); i++)
	   {
		   for(let j=0; j<(arr2.length-1); j++)
		   {
			   if(arr2[j].age>arr2[j+1].age) 
			   {
				   let temp =arr2[j+1]; 
				   arr2[j+1]= arr2[j];
				   arr2[j] = temp;
			   } 
		   }
	   }
	   
   }
   return arr2;
}

// Пример работы функции.
let array = [{name: 'Макар', age: 20}, 
{name: 'Роберт', age: 32}, 
{name: 'Екатерина', age: 50}, 
{name: 'Оксана', age: 24}, 
{name: 'Святослав', age: 43}];
 array = getSortedArray(array, "age");
console.log(array); 
console.log('next \n');
array=[{name: 'Макар', age: 20}, 
{name: 'Роберт', age: 32}, 
{name: 'Екатерина', age: 50}, 
{name: 'Оксана', age: 24}, 
{name: 'Святослав', age: 43}];
 array = getSortedArray(array, "name");
 console.log(array);
