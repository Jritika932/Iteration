// Write a program which ask user for no of lines and print a pattern using an asterik .


const Print_pattern = (N) => 
{
  let i,j;

  for(i=0;i<N;i++){
     let result=''
    for(j=0;j<=i;j++){
      result=result+'*'
    }
    console.log(result)

  }

};

let Numbers = Print_pattern(5)
console.log(Numbers);