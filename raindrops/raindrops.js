export const convert = (number) => {
  let result = '';
  if(number % 3 == 0 || number % 5 == 0 || number % 7 == 0) {
    if(number % 3 == 0){
      result += 'Pling';
    }
    if(number % 5 == 0){
      result += 'Plang';
    }
    if(number % 7 == 0){
      result += 'Plong';
    }
  }else{
    return String(number);
  }

  return result;
};