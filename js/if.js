// Вхідні дані, які приводяться до буля, називаються умовою.
// Умова ставиться після оператора if в круглих дужках.Якщо умова приводиться до true,
//     то виконується код у фігурних дужках тіла if.

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 100

// let bonus = 0;

// const customer = "older";

// if (customer === "older") {
//   bonus = 100;
// }
// console.log(bonus);

// if (умова) {
//   // тіло if
// } else {
//   // тіло else
// }

// Розширює синтаксис if таким чином, що якщо умова приводиться
// до false, виконається код у фігурних дужках після оператора else.

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// Якщо умова приводиться до true, тіло блока else ігнорується.

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100

// let action;
// const customer = "old";

// // if (customer == "new") {
// //   action = 1000;
// // } else {
// //   action = 2000;
// // }

// // console.log(action);

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// let discount;
// const checkSum = 10000;
// const customer = "vip";
// let totalSum = checkSum;
// if (customer === "vip" && checkSum >= 100 && checkSum < 1000) {
//   discount = 10;
//   totalSum = checkSum - discount;
// } else if (customer === "vip" && checkSum >= 1000 && checkSum < 10000) {
//   discount = 20;
//   totalSum = checkSum - discount;
// } else {
//   discount = 50;
//   totalSum = checkSum - discount;
// }

// console.log(totalSum);

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10

// const randomNumber0 = 21;
// const randomNumber1 = 31;
// const randomNumber2 = 30;
// let equal;
// if (randomNumber0 > randomNumber1) {
//   equal = "Bigger";
// } else {
//   equal = "minor";
// }

// const totalequal = randomNumber0 > randomNumber2 ? "Bigger" : "minor";
// console.log(totalequal);

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// let futurePlan;
// const nowPlan = "two";

// switch (nowPlan) {
//   case "one":
//     futurePlan = "It is a one";
//     break;

//   case "two":
//     futurePlan = "It is a two";
//     break;

//   case "three":
//     futurePlan = " It is a three";
//     break;

//   default:
//     console.log("zero");
// }

// console.log(futurePlan);
