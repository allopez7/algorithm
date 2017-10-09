const solution = require('../solutions/5.js');

let i = 0;
const funct = ()=>{
  i = i + 1 ;
}

solution(funct, 5);

if(i === 5){
  console.log('correct');
}else{
  console.log('incorrect');
}

i=0;
solution(funct, 10);

if(i === 10){
  console.log('correct');
}else{
  console.log('incorrect');
}

i=0;
solution(funct, 15);

if(i === 15){
  console.log('correct');
}else{
  console.log('incorrect');
}
