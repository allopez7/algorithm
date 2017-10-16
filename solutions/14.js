
const check = (num, newArr=[], i=2, j=2)=>{
  if(i > num){
    return newArr;
  }
  if(i === j){
    newArr.push(i);
    return check(num, newArr, i+1, j+1);
  }
  if(num%i === 0){
    return check(num, newArr, i, j+1);
  }
  return check(num, newArr, i+1, j+1);
}
console.log(check(100));
//module.exports = isPrime;
