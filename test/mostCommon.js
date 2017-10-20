const solution = require('../solutions/mostCommon.js');

const mostComm = (ar, result)=>{
  if(solution(ar) == result){
    console.log('Most common number');
  }else{
    console.log('Not most common number');
  }
}
mostComm([2,21,2,3,3,3,1],3);
