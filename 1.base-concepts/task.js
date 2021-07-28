"use strict";

function solveEquation(a, b, c) {
  const D = b ** 2 - 4 * a * c;
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);

  if (D < 0) {
    return [];
  } else if (D === 0) {
    return [x1];
  } else if (D > 0) {
    return [x1, x2];
  }
}

function getMonthsBetween(date1, date2, roundUpFractionalMonths) {
  let startDate = date1;
  let endDate = date2;

  if (date1 > date2) {
    startDate = date2;
    endDate = date1;
  }

  const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
  const monthsDifference = endDate.getMonth() - startDate.getMonth();
  const daysDifference = endDate.getDate() - startDate.getDate();

  let monthCorrection = 0;
  // if (roundUpFractionalMonths === true && daysDifference > 0) {
  //   monthCorrection = 1;
  // }
  // else if (roundUpFractionalMonths !== true && daysDifference < 0) {
  //   monthCorrection = -1;
  // }

  return yearsDifference * 12 + monthsDifference + monthCorrection;
}


// contribution - первоначальный взнос
// amount - сумма кредита
// date - дата окончания кредита
function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(Number(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (isNaN(Number(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (isNaN(Number(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
  }
  
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);

  const percentRate = percent / 100; // процентная ставка от 0 до 1
  const P = percentRate / 12; // 1/12 процентной ставки (от 0 до 1)
  const S = amount - contribution; // тело кредита
  const currentDate = new Date();
  const n = getMonthsBetween(currentDate, date); // на какой срок был выдан кредит в месяцах
  const monthlyFee = S * (P + P / (((1 + P)**n) - 1)); // ежемесячная оплата
  const totalAmount = monthlyFee * n;

  return Number(totalAmount.toFixed(2));
}
