const isPrime = (number, i=2)=>{
  if(number === 0 || number === 1){
    return false;
  } 
  if(number%i === 0){
    if(number === 2){
      return true;
    }
    return false;
  }
  if(number%3 === 0){
    if(number === 3){
      return true;
    }
    return false;
  }
    return true;
  return isPrime(number, i+1);
}
module.exports = isPrime;

