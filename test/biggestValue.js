const solution = require('../solutions/biggestValue.js');

const tester = (object, result) =>{
  if(solution(object) === result){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}
tester({one: 1, two: 2, three: 3}, 3);
tester({"key": 3, 'value': 40, 'word': 50}, 40);
tester({1:'Hi',2:3,4:"hey"}, 3);
