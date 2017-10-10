const isPrime = (number, i=1)=>{
  if(number === 0 || number === 1 || number%2 === 0){
    console.log(number, i);
    return false;
  } 
    if((number%i != 0 && number%i != 1) || number === 2){
      console.log(number, i);
      return true;
    }

  return isPrime(number, i+1);
}
console.log(isPrime(8));
console.log(isPrime(7));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(11));
