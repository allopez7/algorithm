const check = (num, newArr=[], i=2, j=2)=>{
  if(i > num){
    return newArr;
  }
  if(i === j){
    newArr.push(i);
    return check(num, newArr, i+1, j=2);
  }
  if(i%j === 0){
    return check(num, newArr, i+1, j=2);
  }
  return check(num, newArr, i, j+1);
}
module.exports = check;
