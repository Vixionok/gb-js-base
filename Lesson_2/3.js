'use strict'

let a = -7;
let b = -9;
/**
 * [Функция вычисления. Если a и b не отрицательные, но вычесть из a b, если отрицательные, то умножить a на b, если разных знаков то сложить a и b]
 * @param  {[num]} a [Значение 1]
 * @param  {[num]} b [Значение 2]
 * @return {[num]}   [результат вычисления]
 */
function calculation(a, b){
  if (a>=0 && b>=0){
    return a-b;
  }else if(a<0 && b<0){
    return a*b;
  }else if (a*b<0){
    return a+b;
  }
}
console.log(calculation(a, b));