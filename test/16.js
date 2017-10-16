const solution = require('../solutions/16.js');

const tester = (stringy, result) =>{
  if(solution(stringy) === result){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}

tester('tempTime');
tester('restMime');
tester('windowsAppleMac');
