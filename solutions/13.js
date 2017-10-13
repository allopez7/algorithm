const customInterval = (funct, seconds, times, i=0)=>{
  if(i === times){
    return;
  }
  if(i < times){
    setTimeout(()=>{
      funct();
      customInterval(funct, seconds, times, i+1)}, seconds*1000);
  }
}
module.exports = customInterval;
