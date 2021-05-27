import { String } from "core-js";

export const isArmstrongNumber = (number) => {
  
  let numbers = String(number).split('');
  let acumulator = 0;

  for(let i = 0; i< numbers.length; i++){
    numbers[i] = parseInt(numbers[i]);
  }

  for(let i = 0; i < numbers.length; i++) {
    acumulator += numbers[i]**numbers.length;
  }

  return acumulator == number;
};
