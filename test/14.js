const solution = require('../solutions/14.js');

const tester = (num, result)=>{
  if(solution(num).toString() === result.toString()){
    console.log('prime');
  }else{
    console.log('not prime');
  }
}

tester(7, [2,3,5,7]);
tester(17, [2,3,5,7,9,11,13,17]);
tester(13, [2,3,5,7,11,13]);
