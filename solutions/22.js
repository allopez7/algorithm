const removeExtra = (arr, num,newArr=[], i=0)=>{
  console.log(i);
  if(i === arr.length){
    return newArr;
  }
  if(arr[i] != num){
    newArr.push(arr[i]);
  }
  return removeExtra(arr, num, newArr, i+1);
}

module.exports = removeExtra;
