const tree = {
  val:10,
  children:[{val:2,children:[]},{val:3,children:[]}]
}

const bfs = (lev=[],printLev=0)=>{
  if(!lev.length){
    return printLev;
  }
  n = lev.shift();
  console.log(n.val);
  return bfs(lev.concat(n.children),printLev);
}
bfs([tree]);
