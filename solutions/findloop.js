const obj ={val:2,next:{val:3,next:{val:4,next:{val:5}}}};  
const findLoop = (obj, current=obj)=>{
  if(obj.next === current){
    return true;
  }
  if(!obj.next){
    return false;
  }else{
    return findLoop(obj.next, current);
  }
}
console.log(findLoop(obj.next.next.next.next = obj));
//console.log(findLoop({val:2,next:{val:3,next:{val:4,next:{val:5,next: null}}}}));
