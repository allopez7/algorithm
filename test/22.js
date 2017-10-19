const solution = require('../solutions/22.js');

const tester = (ar, nu, result)=>{
  if(solution(ar, nu).toString() === result.toString()){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester([12,4,5,56,9,0],56, [12,4,5,9,0]);
tester([3,4,5,2], 4, [3,4,5,2])
tester([4,4,4,2],4,[2]);
