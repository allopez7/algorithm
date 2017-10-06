const solution = require('../solutions/3.js');

const test = (string, times, result) => {
  if(solution(string, times) === result) {
    console.log(`Correct`);
  } else {
    console.log(`Incorrect`);
  }
};

test('hello', 3, 3);
test('hello', 4, 3);
