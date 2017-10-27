const bfs = (current, next=[], result=[current.slice()])=>{

  if(current.length === 0 && next.length === 0){
    return result;
  }
  if(current.length === 0){
    result.push(next.slice());
    return bfs(next, [], result);
  }
    n = current.shift();
    return bfs(current, next.concat(n.children), result);
}
module.exports = bfs;
