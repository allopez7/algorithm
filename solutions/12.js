const factorialFunct = (num)=>{
  if(num <= 1){
    return 1;
  }
  return num*factorialFunct(num-1);
}
module.exports = factorialFunct;
