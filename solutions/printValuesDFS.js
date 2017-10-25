const tree = {
  val: 1, 
  children:[{val:2,children:[]},{val:3,children:[]}]
}

const dfs = (lev=[]) => {
      if(!lev.length) return;
      const n = lev.pop();
      console.log(n.val);
      return dfs(lev.concat(n.children));
    }
dfs([tree]);

