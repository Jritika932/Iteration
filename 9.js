// Write a program which takes a number from user and print the table.


const Print_Table = (N) => 
{
let result=''
  let i
  for(i=1;i<=10;i++){
    result=N+' '+'*'+' '+i+' '+ '=' +' '+ N*i

    console.log(result);
  }
};

let Numbers = Print_Table(3)
console.log(Numbers);