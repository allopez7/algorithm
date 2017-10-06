const funct = ()=>{
  console.log('calling function');
}

const recursionFunct = (funct, num, f='') =>{
  if(num === 0){
    return f;
  }
  f = f + funct();
  return recursionFunct(funct, num-1);
}
recursionFunct(funct, 2);  
