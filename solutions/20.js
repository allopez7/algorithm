const reverseArray = (arr, revArr=[], i=arr.length-1)=>{
  if(i < 0){
    return revArr;
  }
  if(i >= 0){
    revArr.push(arr[i]);
  }
  return reverseArray(arr, revArr, i-1);
}
console.log(reverseArray([1,2,3]));
