const check = (num, newArr=[], i=2, j=2)=>{
  if(j > num){
    return newArr;
  }
  if(i === j){
    newArr.push(i);
    return check(num, newArr, i+1, j);
  }
  if(j%i === 0){
    return check(num, newArr, i);
  }
  return check(num, newArr, i, j+1);
}
console.log(check(100));
//module.exports = isPrime;
