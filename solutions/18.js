const concat = (arr1, arr2, newArr=[], i=0)=>{
  if(i === arr1.length + arr2.length){
    return newArr;
  }
  if(i < arr1.length){
    newArr.push(arr1[i]);
  }
  if(i >= arr1.length){
    newArr.push(arr2[i-arr1.length]);
  }
  return concat(arr1, arr2, newArr, i+1);
}
module.exports = concat;
