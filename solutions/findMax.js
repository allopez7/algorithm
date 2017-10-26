const node = (linkedList, max=linkedList.value)=>{
  if(linkedList === null){
    return max;
  }
  if(linkedList.value > max){
    max = linkedList.value;
  }
  return node(linkedList.next, max);
}
module.exports = node;
