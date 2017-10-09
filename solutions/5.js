const recursionFunct = (funct, num, fun='') =>{
  if(num === 0){
    return fun;
  }
  fun = fun + funct();
  return recursionFunct(funct, num-1);
}
module.exports = recursionFunct;

