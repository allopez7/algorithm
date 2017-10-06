const sayHelloTimes = (string, times, str='', count=0, i=0) => {
  if(i === times){
    return count;
  }
  if(i != times){
    count = count + i;
    str = str + string + ' ';
  }
  return sayHelloTimes(string, times, str, count, i+1);

};
module.exports = sayHelloTimes;
