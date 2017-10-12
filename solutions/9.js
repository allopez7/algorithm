const greatCommDenom = (num1, num2, gcd, i=0)=>{  
  if(i > num1 && i > num2){
    return gcd;
  }
  if(num1%i === 0 &&  num2%i === 0){
    gcd = i;
  }
  return greatCommDenom(num1, num1, gcd, i+1);
}
module.exports = greatCommDenom;
