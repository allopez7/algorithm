const recursionFunct = (funct, num) =>{
  if(num > 0){
  funct();
  return recursionFunct(funct, num-1);
  }
}
module.exports = recursionFunct;
