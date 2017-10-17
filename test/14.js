const solution = require('../solutions/14.js');

const tester = (upTo, i=0)=>{
  if(i > upTo){
    return;
  }
  console.log(solution(upTo)[i]);
    /*
  if(solution(upTo) === i){
    console.log(i+' correct');
  }else{
    console.log(i+' incorrect');
  }
  */
  return tester(upTo, i+1); 
}

tester(17);
