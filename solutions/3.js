const sayHelloTimes = (string, times, str='') => {
  if(0 === times){
    return str;
  }
  if(times != 0){
    str = str + string + ' ';
  }
  return sayHelloTimes(string, times-1, str);

};
console.log(sayHelloTimes('hello', 3));
module.exports = sayHelloTimes;
