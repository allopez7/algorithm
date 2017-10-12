const factorialFunct =  (number, factorial=1, i=1)=>{
  if(number === 0){
    return 1;
  }
  if(number < 0){
    return;
  }
  if(number < i){
    return factorial*number;
  }
  if(i != number){
    factorial = factorial*i;
  }
  return factorialFunct(number, factorial, i+1);
}
module.exports = factorialFunct;
