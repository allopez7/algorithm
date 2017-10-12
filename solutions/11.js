const nextDivisibleSeven = (input, number=0, i=0)=>{
  if(i === input){
    return number;
  }
  if(input > number){
    number= number + 7;
  }
  return nextDivisibleSeven(input, number, i+1);

}
module.exports = nextDivisibleSeven;
