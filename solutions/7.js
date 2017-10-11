const getDivisors = (number, i=1, max=0) =>{
  if(i === number){
    return max;
  }
  if(number%i === 0 && i>max){
      max = i;
  }
  return getDivisors(number, i+1, max);
}

module.exports = getDivisors;
