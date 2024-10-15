'use strict';
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (index1, index2) {
//     // return `${this.starterMenu[index1]}, ${this.mainMenu[index2]}`;// as a string
//     return [this.starterMenu[index1], this.mainMenu[index2]]; //as an array
//   },
// };

//destructuring in array
// let [first, , second] = restaurant.categories; // simply prints italian vegetarian
// console.log(first, second);
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);
// another method for array destructuring
// [second, first] = [first, second];
// console.log(first, second); //second = first and first = second

// destructuring an array
// const [first_one, second_one] = restaurant.order(0, 2);
// console.log(first_one, second_one);
// const nested_destructuring = [1, 2, 3, [4, 5]];
// const [i, j, , [k, l]] = nested_destructuring;
// console.log(i, j, k, l);

// missing value can be overwritten
// const [i, j = 8, k = 9, a, l, m, q = 23] = [1, 2, 3, 4, 5, 6];
// console.log(i, j, k, l, m, q);

// const books = ['maths', 'instrumentation', 'DSA', 'DS', 'Electric machine'];
// const [firstbook, , thirdbook] = books;
// console.log(firstbook, thirdbook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log('rating: ', rating);
// console.log('ratingCount: ', ratingsCount);
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, ThreeStarsRating = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, ThreeStarsRating);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (startindex, mainindex) {
//     return this.starterMenu[(startindex, this.mainMenu[mainindex])];
//   },
// };

// //object destructuring be assigining new variables name :
// const { name, openingHours, categories } = restaurant;
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: items,
// } = restaurant;
// console.log(restaurantName, hours, items);

// //default values
// const { menu = [], starterMenu: staters = [] } = restaurant;
// //default new property without any values startermanu with new var name starters and assigining new all the array of startermenu to starters array
// console.log(menu, staters);

//mutating varibales
// let a = 111;
// let b = 234;
// let c = 2345;
// const obj = { a: 23, b: 34, c: 67 };
// ({ a, b, c } = obj);
// console.log(a, b, c);
// let a;
// let b;
// let c;
// const obj = { a: 23, b: 34, c: 67 };
// ({ a, b, c } = obj);
// console.log(a, b, c);

//nested obj destructuring

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const {
//   fri: { open: opening_hours, close: closing_hours },
// } = openingHours;
// console.log(opening_hours, closing_hours);

//practicle example
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   //   order: function (startindex, mainindex) {
//   //     return this.starterMenu[startindex], this.mainMenu[mainindex];
//   //   },

//   //pasing object as an argument ({})
//   //order of argument is not necessary while passing object as an argument
//   orderDelivary: function ({
//     name,
//     location,
//     timeOfDelivary,
//     starterindex,
//     mainindex,
//   }) {
//     console.log(
//       `Mr ${name} has ordered ${this.starterMenu[starterindex]} ,and ${this.mainMenu[mainindex]}`
//     );
//   },
// };

// restaurant.orderDelivary({
//   name: 'kritagya timsina',
//   location: 'duwakot',
//   timeOfDelivary: '22:10',
//   starterindex: 1,
//   mainindex: 2,
// });

//spread operator
// without using spread operator
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderPizza: function (ingi1, ingi2, ingi3) {
//     console.log(ingi1, ingi2, ingi3);
//   },
// };

// const arr = [1, 2, 3];
// const new_arr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(new_arr);
//using spread operator
// const new_arr = [1, 2, ...arr];
// console.log(new_arr); //1,2,1,2,3
// const newMenu = [...restaurant.mainMenu, 'bhat', 'dal'];
// console.log(newMenu); //new arr

// //copying arr
// const new_menu_arr = [...restaurant.mainMenu]; //copy of mainmenu array

// //2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const name = 'kritagya';
// const new_name_arr = [...name];
// console.log(new_name_arr); // string to array
// // console.log(`${...new_name_arr}`); //error not possible
// // const ingredients = [prompt('ingi1'), prompt('ingi2'), prompt('ingi3')];
// // console.log(ingredients);

// // restaurant.orderPizza(...ingredients);

// //manupulating object
// const newRestObj = { newName: 'burger King', ...restaurant };
// console.log(newRestObj);

// //new format of copying object
// const new_res = { ...restaurant };
// new_res.name = 'Burger king';
// console.log(new_res.name);
// console.log(restaurant.name);

//rest pattern and parameters
//rest because the spread operator is used on LHS of =
// const arr = ['kritagya', 'raju', 'ram', 'krishna'];
// const [a, b, ...remaining] = arr;
// console.log(a, b, remaining);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderfoods: function (mainfood, secondmainfood, ...lastfoods) {
//     console.log(mainfood, secondmainfood, lastfoods);
//   },
// };

//1 destructuring
// const [i, , , j, ...remaining_food] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log(i, j, remaining_food);

// // for object
// const { sat, ...remaining_days } = restaurant.openingHours;
// console.log(remaining_days); //new object

// //2 funtion
// let sum = 0;
// const addFunc = function (...numbers) {
//   for (let i in numbers) {
//     sum = sum + numbers[i];
//     console.log(sum);
//   }
// };
// const x = [23, 24, 25, 26];
// addFunc(...x);
// const [i, j, ...lastfoods] = [
//   ...restaurant.categories,
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// restaurant.orderfoods(i, j, lastfoods);

//short circuiting
// console.log(3 || 'kritagya'); // 3 is truthy value here
// console.log('' || 'timsina'); //timsina is truthy value here
// console.log(true || 0); //true is truthy value here
// console.log(undefined || null); // null is truthy value instead of undefined.
// console.log('a' || 'hello'); //because a is the truthy value

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (ingi1, ingi2) {
    console.log(ingi1, ingi2);
  },
};
restaurant.guestNumber = 20;
const guest = restaurant.guestNumber ? restaurant.guestNumber : 0;
console.log(guest || 10);

console.log('--------AND---------');

console.log(1 && 'jonas'); //here jonas is falsy value
console.log(0 && 'jonas'); // here 0  is falsy value and hence it returns 0
console.log('hello' && 20 && 'jonas' && null && undefined); //hello ,and jonas is truthy value in comparison to others null is falsy value
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spanish');
}
restaurant.orderPizza || restaurant.orderPizza('mushroom', 'origano'); //  since restaurant.orderPizza is falsy value
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'origano'); // or will return first truthy value and and wiil return first falsy value.
