"use strict";
let totalEmployeeSalary = 0;
const countTotalSalary = function (employees) {
  const values = Object.values(employees);

  for (let salary of values) {
    totalEmployeeSalary += salary;
  }
  return totalEmployeeSalary;
};
/*


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
