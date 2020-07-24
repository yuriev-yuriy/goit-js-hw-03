"use strict";

const findBestEmployee = function (employees) {
  const solveProblem = Object.values(employees);
  for (let i = 1; i < solveProblem.length; i += 1) {
    if (solveProblem[0] < solveProblem[i]) {
      solveProblem[0] = solveProblem[i];
    }
  }
  return (Object.keys = solveProblem[0]);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
