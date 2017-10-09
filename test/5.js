const solution = require('../solutions/5.js');
let i = 0;
const funct = ()=>{
  i = i + 1 ;
}

const tester = (call, tes)=>{
  solution(funct, call);
  if(tes === i){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
  i=0;
}

tester(8,6);
tester(10, 10);
tester(3,3);

