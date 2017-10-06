const solution = require('../solutions/4.js');

const test = (a, n) =>{
  if(solution(a, n) === `${a} ${a} ${a} ${a} ${a} `){
    console.log('correct');
    console.log(solution(a,n));
  }else{
    console.log('incorrect');
  }
}
test('Apple', 5)
