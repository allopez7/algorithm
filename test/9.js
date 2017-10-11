const solution = require('../solutions/9.js');

const gcd = (number1, number2, test)=>{
  if(solution(number1, number1) === test){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
gcd(3,6, 3);
gcd(10, 100, 10);
gcd(6, 18, 6);
