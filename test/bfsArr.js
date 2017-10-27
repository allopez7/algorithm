const solution = require('../solutions/bfsArr.js');

let a = {v:1};
let b = {v:2};
let c = {v:3};
let d = {v:4};
a['children']=[b,c];
b['children']=[];
c['children']=[d];
d['children']=[];

let e = {val:1};
let f = {val:2};
let g = {val:3};
let h = {val:4};
e['children']=[f,g];
g['children']=[];
f['children']=[h];
h['children']=[];

let i = {val:1};
let j = {val:2};
let k = {val:3};
let l = {val:4};
i['children']=[j,k];
j['children']=[];
k['children']=[l];
l['children']=[];

const helperFunct = (c, r, i=0, j=0)=>{
  if(c.length === i){
    return true;
  }
  if(j < c[i].length){
  if(c[i][j] === r[i][j]){
    return helperFunct(c, r, i, j+1);
  }else{
    return false;
  }
  }
  return helperFunct(c, r, i+1,j=0);
}

const test = (current, result)=>{
  if(helperFunct(current,result)){
    console.log('objects are equal ');
  }else{
    console.log('objects are not equal ');
  }
}
test(solution([a]), [[a],[b,c],[d]]);
test(solution([e]), [[e],[f,g],[h]]);
test(solution([i]), [[i],[{val:10,children:[]},k],[0]]);
