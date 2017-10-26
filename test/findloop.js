const solution = require('../solutions/findloop.js');

const d = {val:4, next: null};
const c = {val:3, next:d};
const b = {val:2, next:c};
const a = {val:1, next:b};

const h = {val:4};
const g = {val:3, next:h};
const f = {val:2, next:g};
const e = {val:1, next:f};
h.next = e;

const j = {val:4};
j.next = j;

const findIfLoops = (object)=>{
  if(solution(object)){
   console.log('does loop'); 
  }else{
   console.log('does not loop');
  }
}
findIfLoops(a);
findIfLoops(e);
findIfLoops(j);
