const factorialFunct =  (number, factorial=1, i=1)=>{
  if(number < i){
    return factorial*number;
  }
  if(i != number){
    factorial = factorial*i;
  }
  return factorialFunct(number, factorial, i+1);
}
module.exports = factorialFunct;
