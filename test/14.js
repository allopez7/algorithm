const solution = require('../solutions/14.js');

const helper = (ar, ar1, i=0)=>{
  if(i === ar.length){
    return true;
  }
  if(ar[i] != ar1[i]){
    return false;
  }
  return helper(ar, ar1, i+1);
}
const tester = (upTo, result)=>{
  const newArr = solution(upTo);
  if(helper(newArr,result)){
    console.log('prime');
  }else{
    console.log('not prime');
  }
}

tester(7, [2,3,5,7]);
tester(17, [2,3,5,7,9,11,13,17]);
tester(13, [2,3,5,7,11,13]);
