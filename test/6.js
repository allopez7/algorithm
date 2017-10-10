const solution = require('../solutions/6.js');

//test function
const tester = (call) =>{
  let i = 0;
  let passing = true;

  //function to pass in
  const funct = (a)=>{
    i = i + 1;
    if(a != i){
      passing = false;
    }
    
  }
  //call solution function, pass in funct and how many times you want to call it. 
  solution(funct, call);
  if(passing && i === call){
    console.log('correct');
  }else{
    console.log('incorrect');
  }
}

tester(2);
tester(10);
tester(9);
