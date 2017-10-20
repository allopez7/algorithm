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
//console.log(findLoop({val:2,next:{val:3,next:{val:4,next:{val:5,next: null}}}}));
