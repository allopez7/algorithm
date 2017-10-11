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
/*
console.log('1: ' + isPrime(1));
console.log('2: ' + isPrime(2));
console.log('3: ' + isPrime(3));
console.log('4: ' + isPrime(4));
console.log('5: ' + isPrime(5));
console.log('6: ' + isPrime(6));
console.log('7: ' + isPrime(7));
console.log('8: ' + isPrime(8));
console.log('9: ' + isPrime(9));
console.log('10: ' + isPrime(10));
console.log('11: ' + isPrime(11));
console.log('12: ' + isPrime(12));
console.log('13: ' + isPrime(13));
console.log('14: ' + isPrime(14));
console.log('15: ' + isPrime(15));
console.log('16: ' + isPrime(16));
console.log('17: ' + isPrime(17));
console.log('18: ' + isPrime(18));
console.log('19: ' + isPrime(19));
console.log('20: ' + isPrime(20));
*/
