const tree = {
  val:10,
  children:[{val:2,children:[]},{val:3,children:[]}]
}

const bfs = (lev=[])=>{
  if(!lev.length){
    return;
  }
  n = lev.shift();
  console.log(n.val);
  return bfs(lev.concat(n.children));
}
bfs([tree]);
