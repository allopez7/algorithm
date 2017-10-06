const funct = ()=>{
  console.log('calling function');
}

const recursionFunct = (funct, num, fu='') =>{
  if(num === 0){
    return f;
  }
  fun = fun + funct();
  return recursionFunct(funct, num-1);
}
//recursionFunct(funct, 2);  
module.exports = recursionFunct;
