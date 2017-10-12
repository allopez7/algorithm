const solution = require('../solutions/10.js');

const biggerFunction = (numOne, numTwo)=>{
  let i = 0;
  let passing = true;
  let bigger = 0;

  if(numOne > bigger){
    bigger = numOne;
  }
  if(numTwo > bigger){
    bigger = numTwo;
  }

  const funct = (a)=>{
    i = i + 1;
    if(a != i){
      passing = false;
    }
  }
  solution(funct, numOne, numTwo);

  if(passing && (bigger === i)){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
biggerFunction(4,5);


