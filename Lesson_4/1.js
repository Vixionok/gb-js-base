'use strict'
function getDigitOfNum (num){
  if(!Number.isInteger(num) || num < 0 || num > 999){
    console.log('Значение должно быть целым числом от 0 до 999');
    return{};
  }
  return{
    units: num % 10,

  }
}