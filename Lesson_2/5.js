'use strict'
/**
 * [Сложение 2х чисел]
 * @param  {num} a Переменная 1
 * @param  {num} b Переменная 2
 * @return {num}   Результат
 */
function addition(a, b){
  return a+b;
}
/**
 * [Разность 2х чисел]
 * @param  {num} a Переменная 1
 * @param  {num} b Переменная 2
 * @return {num}   Результат
 */
function subtraction(a, b){
  return a-b;
}
/**
 * [Произведение 2х чисел]
 * @param  {num} a Переменная 1
 * @param  {num} b Переменная 2
 * @return {num}   Результат
 */
function multiplication(a, b){
  return a*b;
}
/**
 * [Частное 2х чисел]
 * @param  {num} a Переменная 1
 * @param  {num} b Переменная 2
 * @return {num}   Результат
 */
function division(a, b){
  return a/b;
}
/**
 * Арефмитическая функция. Принимает 2 переменные и действие (строка) в виде +,-,*,/ и возвращает результат вычисления
 * @param  {num} arg1      Переменная 1
 * @param  {num} arg2      Переменная 2
 * @param  {string} operation Арифметическое действие
 * @return {num}           результат вычисления
 */
function mathOperation(arg1, arg2, operation){
  switch (operation){
    case "+":
      return addition(arg1, arg2);
    case "-":
      return subtraction(arg1, arg2);
    case "*":
      return multiplication(arg1, arg2);
    case "/":
      return division(arg1, arg2);
    default:
      console.log('Введены некорректные значения ')
  }
}

console.log(mathOperation(7, 8, "-"));