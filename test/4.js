const solution = require('../solutions/4.js');

const test = (a, n) =>{
  if(solution(a, n) === `${a} ${a} ${a} ${a} ${a} `){
    console.log('correct');
  }else if(solution(a, n) === `${a} ${a} ${a} ${a} `){
    console.log('correct');
  }else if(solution(a, n) === `${a} ${a} ${a} `){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
test('Apple', 5)
test('Apple', 4);
test('Apple', 3);
test('Apple', 10);
