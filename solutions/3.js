const sayHelloTimes = (string, times, str='', i=0) => {
  if(i === times){
    return str;
  }
  if(i != times){
    str = str + string + ' ';
  }
  return sayHelloTimes(string, times, str, i+1);

};
console.log(sayHelloTimes('hello', 3));
module.exports = sayHelloTimes;
