const solution = require('../solutions');

const functionCall = (funky, numb, tester)=>{
 if(solution(funky, numb) === tester){
  console.log('correct'); 
 }else{
   console.log('incorrect');
 }
}

functionCall(funct, 2);
