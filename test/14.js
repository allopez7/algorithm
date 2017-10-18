const solution = require('../solutions/14.js');

const tester = (upTo, result, i=0)=>{
  if(i >= upTo){
    console.log('correct');
    return true;
  }
  if(solution(upTo)[i] != result[i]){
    console.log('incorrect');
    return false;
  }
  return tester(upTo, result, i+1); 
}

tester(7, [2,3,5,7]);
tester(17, [2,3,5,7,9,11,13,17]);
tester(13, [2,3,5,7,11,13]);
