const biggestValue = (obj,keys = Object.keys(obj), i=0, max=0)=>{  
  if(i === keys.length){ 
    return max;
  }
  const key = keys[i];
  if(obj[key] > max){
    max = obj[key];
  }
    return biggestValue(obj, keys, i+1, max);
}
module.exports = biggestValue;


