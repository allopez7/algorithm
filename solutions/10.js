const callFunctionBigger = (funct, num1, num2, i=1)=>{
  if(i > num1 && i > num2){
    return; 
  }
    funct(i);
  return callFunctionBigger(funct, num1, num2, i+1);
}
module.exports = callFunctionBigger;
