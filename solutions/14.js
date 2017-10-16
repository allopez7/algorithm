const isPrime = (num, i=2)=>{
  if(i === num){
    return true;
  }
  if(num%i === 0){
    return false;
  }
  return isPrime(num, i+1);
}
module.exports = isPrime;
