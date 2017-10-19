const buildMap = (arr, obj = {}, i = 0)=>{
  if(i === arr.length){
    return obj;
  }
  const val = arr[i];
  if(!obj[val]){
    obj[val] = 0;
  }
  obj[val] = obj[val] + 1;
  return buildMap(arr, obj, i+1);
}

const maxVal = (obj, keys, i=0, max=0)=>{
  if(i === keys.length){
    return commonKey;
  }
  const key = keys[i];
  if(obj[key] > max){
    max = obj[key];
    commonKey = key;
  }
  return maxVal(obj, keys, i+1, max);
}

const common = (arr)=>{
  const obj = buildMap(arr);
  return maxVal(obj, Object.keys(obj));
}

console.log(common([2,3,3]));
console.log(common([1,1,1,2,2,2,2]));
