const recursion = (funct, num, j=1, i=0)=>{
  if(i != num){
  funct(j);
  recursion(funct, num, j+1, i+1);
  }
}
module.exports = recursion;
