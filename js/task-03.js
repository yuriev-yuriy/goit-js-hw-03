"use strict";

const findBestEmployee = function (employees) {
  const values = Object.keys(employees);
  for (let i = 0; i < values.length; i++) {
    if (employees[values[i]] > employees[values[0]]) {
      values[0] = values[i];
    }
  }
  return values[0];
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
