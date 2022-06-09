// Write a program that takes a number from the user and get the sum of the digits present in the number.


const Number_Sum = (N) => 
{
	  let sum=0
  while(N!=0){
    let digit=N%10
    N=parseInt(N/10)
    sum=sum+digit;
  }
  return sum;

};

let Numbers = Number_Sum(1234)
console.log(Numbers);