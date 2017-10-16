const kababCase = (string, kabab='', i=0)=>{
  if(string.length === i){
    return kabab;
  }
  if(string[i].toLowerCase() !== string[i]){
    kabab = kabab + '-' + string[i].toLowerCase();
  }else{
    kabab = kabab + string[i];
  }

  return kababCase(string, kabab, i+1);
}
module.exports = kababCase;
