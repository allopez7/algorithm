const countNine = (arr, count = 0, i=0)=>{
  if(i === arr.length){
    return count;
  }
  if(arr[i] === 9){
    count = count + 1;
  }
  return countNine(arr, count, i+1);
}
module.exports = countNine;
