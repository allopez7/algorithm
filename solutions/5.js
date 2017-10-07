const funct = ()=>{
  console.log('calling function');
}

const recursionFunct = (funct, num, fun='') =>{
  if(num === 0){
    return fun;
  }
  fun = fun + funct();
  return recursionFunct(funct, num-1);
}
//recursionFunct(funct, 2);  
module.exports = recursionFunct;
