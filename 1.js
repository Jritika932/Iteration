// Take a number from the user and print the count of digits in that number.


const Find_Digits = (N) => 
{
	  let count=0;
  while(N!==0){
    count=count+1;
    N=parseInt(N/10)
    
  }
  return count;
 
};

let Numbers = Find_Digits(1234)
console.log(Numbers);