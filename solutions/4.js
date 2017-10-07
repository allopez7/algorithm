const printAppleFive = (string, times, str='') =>{
  if(times === 0){
    return str;
  }
  return printAppleFive(string, times-1, str + string + ' ');
}

module.exports = printAppleFive;
