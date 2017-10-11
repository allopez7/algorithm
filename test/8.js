const solution = require('../solutions/8.js');

const testPrime = (num, result)=>{
  if(solution(num) === result){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
testPrime(1, false);
testPrime(2, true);
testPrime(3, true);
testPrime(4, false);
testPrime(5, true);
testPrime(6, false);
testPrime(7, true);
testPrime(8, false);
testPrime(9, false);
testPrime(10, false);
