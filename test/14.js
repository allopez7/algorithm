const solution = require('../solutions/14.js');

const tester = (upTo, i=2)=>{
  if(i > upTo){
    return;
  }
  if(solution(i)){
    console.log(i+' is prime');
  }else{
    console.log(i+' is not prime');
  }
  return tester(upTo, i+1);
}

tester(100);
tester(50);
tester(20);
