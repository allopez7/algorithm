const solution = require('../solutions/11.js');

const findNextDivSeven = (number, result)=>{
  if(solution(number) === result){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}

findNextDivSeven(45, 49);
findNextDivSeven(12, 14);
findNextDivSeven(22, 28);
findNextDivSeven(15, 21);
