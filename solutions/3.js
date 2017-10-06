const sayHelloTimes = (times, str='') => {
  if(0 === times){
    return str;
  }
  if(times != 0){
    str = str + 'hello ';
  }
  return sayHelloTimes(times-1,str);
}
console.log(sayHelloTimes(3));
module.exports = sayHelloTimes;
