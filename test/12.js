const solution = require('../solutions/12.js');

const factorialFunky = (num, result)=>{
  if(solution(num) === result){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
factorialFunky(0, 1);
factorialFunky(5,120);
factorialFunky(6, 720);
factorialFunky(10, 3628800);
