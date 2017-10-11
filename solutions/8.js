const isPrime = (number, i=2)=>{
  if(number === 0 || number === 1){
    return false;
  } 
  if(number%i === 0){
    if(number%2 === 0){
      return true;
    }
    return false;
  }
    if(number%i != 0 && number%i != 1){
      return true;
    }

  return isPrime(number, i+1);
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(10));
