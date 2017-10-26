const solution = require('../solutions/mostCommon.js');

const mostComm = (ar, result)=>{
  if(solution(ar) == result){
    console.log('Most common number');
  }else{
    console.log('Not most common number');
  }
}

mostComm([2,21,2,3,3,3,1],3);
mostComm([1,0,2,2,4,4,4],4);
mostComm([3,3,3,5,9,9,0,0], 0);
