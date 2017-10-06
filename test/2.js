const solution = require('../solutions/2.js');

const test = (num1, num2, num3, max)=>{
  if(solution(num1, num2, num3) === max){
    console.log(solution(num1, num2, num3));
    console.log('This is max: ' + max);
  }else{
    console.log('This is not max: ' + max);
  }
}

test(1, 7, 10, 10);
test(1, 7, 10, 7);
