const solution = require('../solutions/21.js');

const tester = (ar)=>{
  if(solution(ar) === res1){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester([[2,6,7],[3,4,5]], 7, 5);
