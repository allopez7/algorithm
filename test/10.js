const solution = require('../solutions/10.js');

const biggerFunction = (numOne, numTwo)=>{
  let i = 0;
  let passing = true;
  let bigger = 0;

  if(numOne > numTwo){
    bigger = numOne;
  }else if(numTwo > numOne){
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
biggerFunction(10, 13);
biggerFunction(24, 40);

