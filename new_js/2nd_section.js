// 'use strict'
// let hasPassed = true;
// const allSubject = false;
// if(hasPassed) allsubject = true;
// if(allSubject) console.log("has passed , hence promoted")

//functions
// function namePrint(fullName){
//     console.log(`my name is ${fullName}`)
// }

// namePrint("Ram");
// namePrint("sita");
// namePrint("hari");
// namePrint("krishna");

// function vechicles(cars,bikes){
//     console.log(cars,bikes)
//     const total = `you have total ${cars} cars and ${bikes} bikes`
//     return total;
// }
// vechicles(2,3)
//function declaration.

// function CalcAge(BirthYear,Curryear){
//     return (Curryear-BirthYear);
// }



// // function expressions.
// const  fullName=function(nameIs,DOB,age){
//     return `my name is ${nameIs} and i was born in ${DOB} and i am ${age} years old`
// } 

// const DOB = 2004;
// const curryear = 2024;
// const age = CalcAge(DOB,curryear);
// console.log(fullName("kritagya Timsina",DOB,age))



// const Calcage = (birthYear,fullName) => {
//     const currage = 2024 - birthYear;
//     const retairmentAge = 80 - currage;
//     console.log(retairmentAge)
//     return `mr ${fullName} can work up to the age of ${retairmentAge} `;
// }
// let ageLeft = Calcage(2004,"kritagya Timsina");
// console.log(ageLeft); 



//function upon functions dry principles

// function priceOfCars(cars) {
//     return (cars * 14000000);
// }
// function priceOfBikes(bikes) {
//     return (bikes * 400000);
// }
// function OverallPrice(priceOfBikes,priceOfCars){
//     return priceOfBikes + priceOfCars
// }
// function vechicles(cars, bikes) {
//     console.log(cars, bikes)
//     const BikePrice = priceOfBikes(cars);
//     const CarPrice = priceOfCars(bikes);

//     const Overall = OverallPrice(BikePrice,CarPrice); 

//     const total = `you have total  ${cars} cars and  ${bikes} bikes`


//     const price = `price of bike is ${BikePrice} and price of cars is ${CarPrice} `


//     const totalVechiclesPrice = `${total} ,${price} ,and total amount for all vechicles is Rs ${Overall}`


//     return totalVechiclesPrice;
// }


// const OverallDetails = vechicles(2,2)
// console.log(OverallDetails);


// const CalcAge = function(Birthyear,currentYear=2024){
//     const age = currentYear - Birthyear;
//     console.log(age)
//     if(age > 0){
//         return age;
//     }
//     else{
//         return -1;
//     }

// }
// const CalcRetairment = function(birthYear,retairmentAge = 80){
//     const FromageFunc = CalcAge(birthYear);
//     const age = retairmentAge - FromageFunc
//     if(age > 0){
//         return age; 
//     }
//     else{
//         return -1;
//     }
// }
// const mainAgeCalc = function(BirthYear,FullName){
//     const func2 = CalcRetairment(BirthYear)
//     const details = `Mr ${FullName} your age of retirement is ${func2}`

//     return details;
// }
// const birthYear = 1700;
// console.log(mainAgeCalc(birthYear,"kritagya Timsina"));



// const calcAverage = (first,second,third) =>{
//     const avg = (first+second+third) / 3;
//     return avg;
// }
// const checkwin = function(scoreDolphin,scoreKoalas){
//     if(scoreDolphin >= (2*scoreKoalas)){
//         console.log(`Dolphin wins (${scoreDolphin} vs ${scoreKoalas})`)
//     }
//     else if(scoreKoalas >=            ( 2*scoreDolphin)){
//         console.log(`Koalas wins (${scoreKoalas} vs ${scoreDolphin})`)
//     }
//     else{
//         console.log("no one wins")
//     }
// }


// const avgDolphin = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);

// const winnercheck = checkwin(avgDolphin,avgKoalas);



//array
// const CalcAge = (birthyear) =>{
//     return 2024 - birthyear;
// }
// const arr = [1998,1999,2000,2020,2021,2012]
// const age1 = CalcAge(arr[0]);
// const age2 = CalcAge(arr[1]);
// const age3 = CalcAge(arr[2]);
// const age4 = CalcAge(arr[3]);
// const new_arr = [age1,age2,age3,age4]
// console.log(new_arr)




// const arr = ['mango','banana','apple','pineapple','guava','watermelon']

// arr.push('pomogranate')

// console.log(arr.indexOf('pomogranate'))
// console.log(arr.includes('began'))
// if(arr.includes('apple')){
//     console.log("lies with in array")
// }
// else{
//     console.log("doesnot lie within array")
// }

// // console.log(arr)
// // console.log(arr.pop())
// // console.log(arr)
// // arr.shift()
// // console.log(arr)

// const calctip = function(billValue){
//     if(billValue>=50 && billValue<=300){
//         return billValue*0.15;
//     }
//     else{
//         return billValue * 0.2;
//     }
// }
// const bills = [125,555,44];
// const firstBills = calctip(125);
// const secondBills = calctip(555);
// const thirdBills = calctip(44);
// const tipsValue = [firstBills,secondBills,thirdBills]
// console.log(tipsValue)
// const totals = new Array(bills+tipsValue)
// console.log(totals)


// const obj = {
//     firstname: "kritagya",
//     lastname: "Timsina",
//     age: 2024-2005,
//     job:"student",
//     friends: ['ram','shyam','hari'],
// }
// console.log(obj.firstname);
// const namekey = 'name';
// console.log(obj['first' + namekey]);
// console.log(obj['last' + namekey]);
//use of square brackets 
//  const input = prompt("enter any of the following listed property of the object to have an excess firstname, lastname,age,job,friends") 
//  console.log(obj[input]);

//logic building
//  if(obj[input]){
//     console.log(obj[input])
//  }

//  else{ 
//  console.log("invalid! choose between firstname,lastname,age,job,friends")
//  }
//  obj.loction = "kathmandu";
//  obj['email'] = 'kritagyatimsina@gmail.com';
//  console.log(obj);

// const firstname = obj.firstname;
// const firstfriends = obj.friends[0];
// console.log(`${firstname} has 3 friends, and his best friends is ${firstfriends}`)

// const obj = {
//     firstname: "kritagya",
//     lastname: "Timsina",
//     birthYear:2004,
//     job:"student",
//     friends: ['ram','shyam','hari'],
//     isPass: true,
//     // Calcage: function(birthYear){
//     //     return 2024 - birthYear;
//     // }
//     //  Calcage: function(){
//     //     // console.log(this)
//     //     return 2024 - this.birthYear;
//     // }
//     Calcage: function(){
//         this.age = 2024-this.birthYear;
//         return this.age;
//     },
//     hasDriverliscense:function(){
//         if(this.isPass){
//             return "has drive liscense"
//         }
//         else{
//             return "no drive liscense"
//         }
//     },
//     details: function(){
//         const overallDetails = `${this.firstname} ${this.lastname} is ${this.Calcage()} years old and he is a ${this.job} ,and his friends are ${this.friends}. Mr ${this.firstname} ${this.hasDriverliscense()}`
//         return overallDetails;
//     }
// };


// console.log(obj.details())
// console.log(obj.Calcage());
// console.log(obj.age);
// console.log(obj);


// const calcage = obj.Calcage()
// obj.age = calcage;
// console.log(obj)


//here obj is the one calling the method so in the method this is referred or point to obj . this.birthyear => obj.birthyear



// console.log(obj['Calcage']('birthYear'))
// console.log(obj.Calcage(obj['birthYear']))
// console.log(obj['Calcage'](2004))

//challange 
// const mark = {
//     fullName: 'Mark Miller',
//     mass:78 ,
//     height: 1.69, 
//     calcBmi: function(){
//          this.bmi = (this.mass)/(this.height*this.height)
//          return this.bmi
//     },
//     // bmi:this.calcBmi()
// }
// const john = {
//     fullName: 'John Smith',
//     mass:92 ,
//     height: 1.95, 
//     calcBmi: function(){
//         this.bmi = (this.mass)/(this.height*this.height)
//         return this.bmi
//     },
//     // bmi:this.calcBmi()
// }

// mark.calcBmi();
// john.calcBmi();
// const markData = mark.bmi;
// const johnData = john.bmi; 
// if(markData>johnData){
//     console.log(`${mark.fullName}'s BMI (${markData}) is higher than ${john.fullName}'s (${johnData})`)
// }
// else if(johnData  > markData){
//     console.log(`${john.fullName}'s BMI (${johnData}) is higher than ${mark.fullName}'s (${markData})`)
// }
// else{
//     console.log("both BMI is equal")
// }

// const arr = [
//     'kritagya',
//     2024-2004,
//     "student",
//     ['ram','shyam','hari'],
//     true
// ];
// let new_arr = [];
// for(let i=0;i<arr.length;i++){
//     if(typeof(arr[i]) !== 'string'){
//         continue; // skipping the property of an object which is not string type
//     }
//     console.log(arr[i]) //only prints string of an object property


// after the number of (2024-2004) is found nothing should be printed
// for(let i=0;i<arr.length;i++){
//     if(typeof(arr[i]) == 'number') {
//         break;
//     }
//     console.log(arr[i])
// }



// console.log(arr[i],typeof(arr[i]))
// new_arr[i] = arr[i];
// new_arr.push(typeof(arr[i]))
// }



// const calcAge = function(birthyear){
//     return 2024 - birthyear;
// }


// const newBirthArray = [];
// const birth = [2000,1998,1872,1700];
// for (let i=0;i<birth.length;i++ ){
//     const calculated = calcAge(birth[i]);
//     newBirthArray.push(calculated)
// }
// console.log(newBirthArray)

// const arr = [
//     'kritagya',
//     2024-2004,
//     "student",
//     ['ram','shyam','hari'],
//     true,
//     false
// ];
// for(i=arr.length-1;i >= 0;i--){
//     console.log(i,arr[i])
// }

// for (let i = 1; i < 4; i++) {
//     console.log(`exercise ${i}`)
//     for (j = 1; j < 6; j++) {
//         console.log(`lifting rep ${j}`)
//     }
// }
// let guessNumber =Math.floor(Math.random()*7)
// while(guessNumber !==6){
//     console.log(`you rolled ${guessNumber}`)
//     guessNumber =Math.floor(Math.random()*7)
//     if(guessNumber == 6){
//         console.log("correct guess")
//     }

// }


// const bills = [22,295,176,440,37,105,10,1100,86,52]
// const tips=[];
// const total = [];
// const calcTip = function(billValue){
//     if(billValue >=50 && billValue<=50){
//         return billValue*0.15
//     }
//     else{
//         return billValue*0.2
//     }
// }
// const calcAvg = function(sumValue){
//     const avg = sumValue/total.length
//     return avg;
    
// }

// let sum = 0;
// for(let i=0;i<bills.length;i++){
//     const tipsvalue = calcTip(bills[i]);
//     tips[i]=tipsvalue;
//     total[i]=tips[i]+bills[i];
//     sum = sum+total[i];
    
// }
// console.log(tips)
// console.log(total)
// console.log(`avg is ${calcAvg(sum)}`)



















