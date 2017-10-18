const solution = require('../solutions/24.js');

const tester = (ar1, ar2, result, i=0)=>{
  if(solution(ar1, ar2) === result){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester([1,2,3],[1,2,3], true);
tester([2,1,3],[5,6,2], false);
tester([8,8,0],[9,0,3], true)
