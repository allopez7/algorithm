const solution = require('../solutions/findMax.js');

const linkedList = {
  value:5,
  next:{
    value:2,
    next:{
      value:100,
      next: null
    }
  }
}

const findMax = (llst, result)=>{
  if(solution(llst) === result){
    console.log('is max value');
  }else{
    console.log('is not max value');
  }
}
findMax(linkedList,100);
findMax(linkedList,5);
findMax(linkedList,2);
