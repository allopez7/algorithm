const solution = require('../solutions/21.js');

const tester = (ar, res1, res2)=>{
  if(solution(ar)[0] === res1 && solution(ar)[1] === res2){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester([[2,6,7],[3,4,5]], 7, 5);
tester([[13,9,3], [5,28,9]], 13, 5);
tester([[2,3,3,4,5],[1,42,5]], 5, 42);
tester([[1],[2,3,45,10]], 1, 45);
tester([[1,5,6,2],[30]], 6, 30);
