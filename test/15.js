const solution = require('../solutions/15.js');

const tester = (str, ch, test)=>{
  if(solution(str, ch) === test){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester('Hello', 'o', true);
tester('String', 'a', true);
tester('wings', 's', true);
