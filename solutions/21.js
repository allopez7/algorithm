const maxArrArr = (arr, max=arr[0][0], mArr=[], i=0, j=0)=>{
  if(i === arr.length){
    return mArr;
  }
  if(i < arr.length){
    if(j < arr[i].length){
      if(arr[i][j] > max){
        max = arr[i][j];
      }
      return maxArrArr(arr, max, mArr, i, j+1)
    }
  }
  mArr.push(max);
  return maxArrArr(arr,max=0, mArr, i+1, j=0)
}
module.exports = maxArrArr;
