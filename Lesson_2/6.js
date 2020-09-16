'use strict'
/**
 * Функция возвращает правильное окончание слова рубль исходя из полученного числа.
 * @param  {num} nam количество денег
 * @return {string} слово рубль с правильным окончанием
 */
function getRublesCase(num){
  let preLastDigit = getPreLastDigit(num);
  if (preLastDigit == 1){
    return "рублей";
  }
  num = String(num);
  let lastDigit = Number(num.charAt(num.length - 1));
  switch(lastDigit){
    case 1:
      return "рубль";
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return "рублей";
    case 2:
    case 3:
    case 4:
      return "рубля";
  }
}
/**
 * Функция возвращает предпоследнюю цифру числа или null если данной цифры нет
 * @param  {num} num - параметр
 * @return {num|null}
 */
function getPreLastDigit(num){
  num = String(num);
  let digit = num.charAt(num.length - 2);
  if (digit !==""){
    return Number(digit);
  }
  return null;
}

let money = parseInt(prompt("Какую сумму вы хотите положить на счет "));
alert("Ваша сумма " + money + getRublesCase(money) + " успешно зачислена на счет.");