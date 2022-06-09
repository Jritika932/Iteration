// You are given an integer 
// N
// , and your task is to print all the integers starting from 
// 1
//  till 
// N
//  (
// N
//  inclusive)


const printNumbers = (n) => {
    let result=''
    let i=1
    while(i<=n)
    {
      result=result+i+' '
      i++;
    }
    console.log(result);
};

let Numbers = printNumbers(4)
console.log(Numbers);