const solution = require('../solutions/4.js');

const test = (a, n, tester) =>{
  if(solution(a, n) === `${a} ${a} ${a} ${a} ${a} ` && tester === n){
    console.log('correct');
  }else if(solution(a, n) === `${a} ${a} ${a} ${a} ` && tester === n){
    console.log('correct');
  }else if(solution(a, n) === `${a} ${a} ${a} ` && tester === n){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
test('Apple', 5, 5)
test('Apple', 4, 5);
test('Apple', 3, 3);
test('Apple', 10);
