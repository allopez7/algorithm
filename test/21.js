const solution = require('../solutions/20.js');

const tester = (ar, result)=>{
  if(solution(ar) === result){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}

tester([3,80,2],80);
tester([100,2,10],100);
tester([10,20,30], 30);
