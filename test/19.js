const solution = require('../solutions/19.js');

const tester = (ar, result)=>{
  if(solution(ar).toString() === result.toString()){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester([2,4,5], [5,4,2]);
tester([3,2,5],[9,0,0]);
tester([4,1,0],[8,6,9]);
tester([5,4,2], [2,4,5]);
