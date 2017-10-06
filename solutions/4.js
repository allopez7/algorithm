const printAppleFive = (string, times, str='') =>{
  if(times === 0){
    return str;
  }
    str = str + string + ' ';
  return printAppleFive(string, times-1, str);
}

module.exports = printAppleFive;
