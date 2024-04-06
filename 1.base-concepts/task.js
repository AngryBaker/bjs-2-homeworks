"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else if (discriminant >= 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent *= 0.01) / 12;
  let creditBody = amount - contribution;
  let payment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let allPayamont = +((payment * countMonths).toFixed(2));
  return allPayamont;
}
