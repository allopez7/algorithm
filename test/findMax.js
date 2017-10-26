const solution = require('../solutions/findMax.js');

const linkedList1 = {
  value:-1,
  next:{
    value:-2,
    next:{
      value:-100,
      next: null
    }
  }
}

const linkedList2 = {
  value:5,
  next:{
    value:2,
    next:{
      value:100,
      next: null
    }
  }
}

const linkedList3 = {
  value:-10,
  next:{
    value:20,
    next:{
      value:30,
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
findMax(linkedList1,-1);
findMax(linkedList2,100);
findMax(linkedList3,-10);
