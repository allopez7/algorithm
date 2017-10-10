const solution = require('../solutions/7.js');

  const getDivisor = (numb, result)=>{
    if(solution(numb) === result){
      console.log('correct');
    }else{
      console.log('incorrect');
      console.log(solution(numb));

    }
}
getDivisor(10, 5);
getDivisor(9, 3);
getDivisor(6, 3);
