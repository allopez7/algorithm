const solution = require('../solutions/13.js');

let counting = 0;

const func = ()=>{
  counting = counting +1;
  console.log(counting);
}
setTimeout(()=>{
if(counting === 5){
  console.log('correct');
}else{
  console.log('incorrect');
}
}, 6000);

solution(func, 1, 5);
