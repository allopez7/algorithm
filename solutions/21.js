const biggestNum = (arr, max=arr[0], i=0)=>{
  if(arr.length === i){
    return max; 
  }
  if(arr[i+1] > max){
    max = arr[i+1];
  }
  return biggestNum(arr, max, i+1);
}
module.exports = biggestNum;
