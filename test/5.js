const solution = require('../solutions/5.js');

const tester = (call, tes)=>{
  let i = 0;
  const funct = ()=>{
    i = i + 1 ;
  }
  solution(funct, call);

  if(tes === i){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}

tester(8,6);
tester(10, 10);
tester(3,3);

