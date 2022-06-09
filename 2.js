// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.


const Find_Five = (N) => 
{
  let count=0
  let digit
  while(N!=0){
    digit=N%10;
    N=parseInt(N/10)
    if(digit==5){
      count=count+1;
    }
    
  }
  return count;
	 
	 
};

let Numbers =   Find_Five(345654)
console.log(Numbers);