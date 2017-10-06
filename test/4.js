const solution = require('../solutions/4.js');

const test = (string, number, tester) =>{
  if(solution(string, number) === tester){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
test('Apple', 3, 'Apple Apple Apple ');
test('Yay', 2, 'Yay Yay ');
test('Lol', 4, 'Lol Lol Lol Lol ');

