const solution = require('../solutions/17.js');

const tester = (arr, result)=>{
  if(solution(arr) === result){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester([2,9,9,5,9,3], 3);
tester([13,3,9,2,9,4,9], 4);
tester([9,9,9,9,9,9], 6);
