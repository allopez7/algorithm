const node = (linkedList, max=Number.NEGATIVE_INFINITY)=>{
  if(linkedList === null){
    return max;
  }
  if(linkedList.value > max){
    max = linkedList.value;
  }
  return node(linkedList.next, max);
}
module.exports = node;
