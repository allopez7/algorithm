const recursionFunct = (funct, num, fun='') =>{
  if(num === 0){
    return fun;
  }
  return recursionFunct(funct, num-1, fun + funct());
}
module.exports = recursionFunct;

