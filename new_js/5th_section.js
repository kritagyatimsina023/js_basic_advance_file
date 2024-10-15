'use strict';

// const conversion = function (ounces) {
//   if (ounces < 0) {
//     return 'incorrect mass';
//   } else {
//     return ounces / 35.275;
//   }
// };

// const conversionToGram = function (calculatedKilo) {
//   return calculatedKilo / 1000;
// };

// const price = function (calculatedKilo) {
//   return calculatedKilo * 136;
// };
// const details = function (ounces, calculatedKilo, inGram, totalPrice) {
//   const Total = `You have bought about ${ounces} ounces of potatoes , which is exactly ${calculatedKilo} ,and ${inGram}. Hence you have to pay $Rs ${totalPrice}`;
//   return Total;
// };

// const ounces = prompt('enter the amount in ounces for buying potatos');
// const calculatedKilo = conversion(ounces);
// const totalPrice = price(calculatedKilo);
// const inGram = conversionToGram(calculatedKilo);
// console.log(details(ounces, calculatedKilo, inGram, totalPrice));

// const shyam = {
//   fullName: 'shyam',
//   science: 55, //80
//   english: 60, //80
//   nepali: 70, //80
//   mathematics: 68, //80
//   vocation_eduction: 70, //80
//   social_studies: 35, //80
//   computer: 68, //80
//   instrumentation: 65, //80
//   calcPercentage: function (sum, overall) {
//     if (sum > 0) {
//       return ((sum / overall) * 100).toFixed(2);
//     }
//   },
// };

// const OverallMarks = {
//   science: 75,
//   english: 100,
//   nepali: 100,
//   mathematics: 100,
//   vocation_eduction: 75,
//   social_studies: 75,
//   computer: 75,
//   instrumentation: 75,
// };

// let newSum = 0;
// let sum = 0;
// let new_arr = [];
// let overall_arr = [];
// let j = 0;
// let l = 0;

// for (let k in OverallMarks) {
//   // console.log(OverallMarks[k]);
//   overall_arr[l] = OverallMarks[k];
//   newSum = newSum + overall_arr[l];
//   l++;
// }

// for (let i in shyam) {
//   if (typeof shyam[i] !== 'string' && typeof shyam[i] !== 'function') {
//     sum = sum + shyam[i];
//     new_arr[j] = shyam[i];
//     j++;
//   } else {
//     continue;
//   }
// }

// console.log(
//   `Mr ${shyam.fullName} has acheived ${shyam.calcPercentage(sum, newSum)}%`
// );

// const arrGpsCoordinate = [90, 100, 180, 117];
// const sortarr = arrGpsCoordinate.sort((a, b) => a - b);
// for (let i = 0; i < sortarr.length; i++) {
//   for (let j = 1; j <= sortarr.length; j++) {
//     if (sortarr[j] - sortarr[i] <= 35 && sortarr[j] - sortarr[i] > 0) {
//       console.log(`${sortarr[i]} and ${sortarr[j]} are the closest points`);
//     } else {
//       continue;
//     }
//   }
// }
//apple
//elppa
//25
//52
// const input = prompt(
//   'enter any thing for reverse either string,number,boolean'
// );
// const numbers = Number(input);
// const trueFalse = Boolean(input);
// let new_arr = [];
// let j = 0;

// const reverse = function (input, trueFalse, numbers) {
//   if (typeof input == 'string') {
//     // for (let i in input) {
//     //   new_arr[j] = input[i];
//     //   j++;
//     // }
//     const arr = input.split('');
//     const reversearr = arr.reverse();
//     return reversearr.join('');
//   } else if (typeof numbers == 'number') {
//     const toString = input.toString();
//     const toArr = toString.split('');
//     const result = toArr.reverse();
//     return result.join('');
//   } else if (typeof trueFalse == 'boolean') {
//     if (trueFalse == true) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     return 'invalid';
//   }
// };
// console.log(reverse(input, trueFalse, numbers));
// let arr = [17, 21, 23];
// let j = 1;
// let str = '';
// const printFunction = function () {
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}°C in ${j} days . ..`;
//   }
//   console.log(str);
// };
// printFunction();
