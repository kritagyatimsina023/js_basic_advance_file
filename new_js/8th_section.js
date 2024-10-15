'use strict';
// const a = 'jonas';
// first();

// function first() {
//   const b = 'hello';
//   second();
//   function second() {
//     const c = 'hi';
//     console.log(a + b + c + d); //here d is not defined because it doesnot lie in the scope chain link
//     third();
//   }
// }
// function third() {
//   const d = 'hey';
//   //   console.log(d + b + c + a);
// }

// in this code in third function only a = jonas and first() and third() is scope chain link but cannot access c b  hence it will show reference  error c and b are not defined

// const name = 'Mr Kritagya';
// age(1985);
// function age(year) {
//   const job = 'student';
//   const calcAge = 2024 - year;
//   function detailes() {
//     console.log(`${name} is ${calcAge} years old ,and he is a ${job}`);
//     if (year >= 1981 && year <= 1996) {
//       console.log(`${name} is millinneal ones `);
//     //   function add(a, b) {
//     //     return a * b;
//       }
//     }
//   }
// //   console.log(add(2, 3));
//   detailes();
//   return calcAge;

// function detailas2() {
//   console.log(`${name} is ${calcAge}years old `);
// }
// detailas2();

// 'use strict ';
// const year = 2000;
// if (year >= 2000 && year <= 3000) {
//   function add(a, b) {
//     return a + b;
//   }
// }
// console.log(add(2, 3));

//tdz hoisting

// addFunc(2, 3); // normal funciton call doesnot follow below aspects
// console.log(mul(2, 1)); // we can call function before function declaration (if the fucntion expression is used)
// divide(2, 1); // arrow function cannot follow above aspects

// const addFunc = function (a, b) {
//   return a + b;
// };
// function mul(a, b) {
//   return a * b;
// }

// const divide = (a, b) => a / b;
// console.log(mul(2, 3));
// console.log(divide(2, 1));

// console.log(totalproduct); //because it is called or output before decalring varibales hence undefined but undefined is falsy value and hence totalproduct is undefined so if condition calls totalproduct
// if (!totalproduct) deleteShop();

// const totalproduct = 20;

// function deleteShop() {
//   console.log('delete all the items');
// }
//conslusion
// 1 define funtion before calling it
// 2 declare all the variable at the beginning of the code
// avoid hoisting
//3 if any varibales is declared with var then window object will show the value but not for let and const
// var x = 1; // shown by window object
// let y = 2; // not shown by window object
// const z = 2; // not shown by window object
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// this
// console.log(this);
// global object (i.e window object )
// const calcage = function (year) {
//   console.log(2024 - year);
//   console.log(this); //because of strict mode this will be undefined but if no strict mode then this will be global object
// };
// calcage(2004);
// const calcagearrow = (year) => {
//   console.log(2024 - year);
//   console.log(this); //it will print window object because arrow function will use this keyword for parent scope which is global this (.i.e is window object ) because arrow function will not get its own this keyword
// };
// calcagearrow(2004);

// const demo = {
//   name: 'kritagya timsina',
//   year: 2004,
//   calcage: function () {
//     console.log(this); // it will print demo object property and values because this is pointing towards demo object
//     return 2024 - this.year;
//   },
// };
// demo.calcage();
// //copying object to another object
// //method borow
// const demo2 = {
//   year: 2005,
// };
// demo2.calcage = demo.calcage; //method borrowing
// console.log(demo2.calcage()); // hence this always points to the methods calling the object here this points to the demo2 object because demo2 method is being called. This keyborad is dynamic
// const varibales = demo.calcage; // funciton expressions
// varibales(); // because no object is using methods hence this is undefined
// no owner of this method ( keyword)

// var year = 2004; // this var is in global object and hence can be accessable in new_func function;
// const jonas = {
//   firstname: 'kritagya',
//   year: 2004,
//   calcAge: function () {
//     return 2024 - this.year;
//   },
//   new_func: () => {
//     return 2023 - this.year;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.new_func()); // becuase there is no any owner of this in arrow function. its owner is global this which is window object that is why we should not use arrow function as a method.

// const jonas = {
//   firstname: 'kritagya',
//   year: 2004,
//   calcAge: function () {
//     console.log(2024 - this.year);
//     // const self = this; //self can be used
//     // const millinneal = function () {
//     //   console.log(self);
//     //   // console.log(this.year >= 1968 && this.year <= 1998); //undefined because this is pointing to the global object i.e. window object which is actually not defined. because millinneal function is regular function not a method of jonas object
//     //   console.log(self.year >= 1968 && self.year <= 1998);
//     const millinneal = () => {
//       console.log(this.year >= 1988 && this.year <= 1998); // it works because this is referring to parent scope that is jonas object
//     };

//     millinneal();
//   },
//   new_func: function () {
//     return 2023 - this.year;
//   },
// };

// jonas.calcAge();

// const addFunc = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addFunc(2, 3, 4, 5); // you can pass multiple arguments
// console.log(addFunc(2, 3, 4, 5)); //2+3=5

// const addFuncArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addFuncArrow(); // arguments keyword only exists in the regular function not the arrow function //less used

// const fullname = {
//   name: 'kritagya',
//   age: 20,
// };
// const details = fullname;
// details.name = 'raju';
// console.log(details.name);
// console.log(fullname.name); // when you assign an object to a new variable, such as when you do const details = fullname;, you are not creating a new object or copying the object. Instead, both details and fullname now point to the same object in memory.  //  This means that any changes you make to details will also affect fullname, because they are both referencing the same object. So, when you modify details.name = 'raju';, it also updates fullname.name to 'raju'.

// const jonas = {
//   firstname: 'jonas',
//   lastname: 'devis',
//   age: 20,
// };
// const jessica = {
//   firstname: 'jessica',
//   lastname: 'lim',
//   age: 21,
// };
// const marriedJessica = jessica.lastname;
// marriedJessica.lastname = 'devis';
// console.log(marriedJessica);
// // console.log(
// //   `here jesscia married to ${jonas.firstname} ${jonas.lastname} at now jessica full name is ${marriedJessica}`
// // );

// let firstname = 'jonas';
// let lastname = 'lim';
// let age = 12;

// const jessica = {
//   firstname: 'jessica',
//   lastname: 'devis',
//   age: 12,
// };

// const marriedJessica = jessica;

// marriedJessica.lastname = 'lim';
// console.log(marriedJessica);
// console.log(jessica);

// const jessica2 = {
//   firstname: 'jessica',
//   lastname: 'devis',
//   age: 12,
//   family: ['alex', 'mary'],
// };

// const copyingjessica = Object.assign({}, jessica2); // this will create new object with new memory space copy of the original object......
// copyingjessica.lastname = 'devis';
// copyingjessica.family.push('jam');
// copyingjessica.family.push('james');
// console.log(`jessica before marriage`, jessica);
// console.log(`jessica after marriage`, copyingjessica);
// const subject = {
//   maths: 55,
//   science: 66,
//   instrumentation: 77,
//   dsa: 45,
//   ds: 45,
// };
// const total_marks = {
//   maths: 100,
//   science: 74,
//   intrumentation: 75,
//   dsa: 80,
//   ds: 50,
// };
// const newObjectmethod = Object.assign({}, total_marks);
// newObjectmethod.dsa = 80;
// const newobjmethod2 = Object.assign({}, subject);
// let new_marks_arr_subject = [];
// let j = 0;
// let sum = 0;
// for (let i in newObjectmethod) {
//   sum = sum + newObjectmethod[i];
//   j++;
// }
// console.log(sum);
// console.log(new_marks_arr_subject);

// console.log(`hence total marks in all subject is 4 ${}`);
