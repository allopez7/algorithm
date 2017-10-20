const findLoop = (obj, current)=>{
  if(obj.next === current){
    return true;
  }
  if(!obj.next){
    return false;
  }else{
    return findLoop(obj.next, current);
  }
}
module.exports = findLoop;
