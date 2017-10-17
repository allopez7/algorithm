const solution = require('../solutions/18.js');

const tester = (ar1, ar2, result)=>{
  if(solution(ar1,ar2).toString() === result.toString()){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}

tester([2,3,4],[5,2,1], [2,3,4,5,2,1]);
tester([1,2,3],[4,5,6], [5,6,2,5,4,2]);
tester([4,0,8],[6,6,1], [4,0,8,6,6,1]);
