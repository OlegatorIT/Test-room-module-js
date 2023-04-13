// Доступ до елементів

// const clients = ["Mango", "Poly", "Ajax"];

// Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// console.log(clients[0]);
// Перевизначення;

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// clients[2] = "Wine";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// Довжина масиву
// Довжина масиву, тобто кількість його елементів,
// зберігається у властивості length.
// Це динамічна величина, яка змінюється автоматично під час
// додавання або видалення елементів.

// const clients = ["Mango", "Poly", "Ajax"];
// const userName = [5, 10, 15, 6, 2, 9, "lol"];
// console.log(clients.length); // 3
// console.log(userName.length);

// Індекс останнього елемента
// Найчастіше, ми заздалегідь не знаємо яка буде довжина масиву в коді.
//  Для того, щоб отримати значення останнього елемента,
//     застосовується наступний підхід - довжина масиву завжди на одиницю більша,
//     ніж індекс останнього елемента.Використовуючи формулу довжина_масиву - 1,
//         можна отримати значення останнього елемента масиву довільної довжини.

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// const musicStyle = ["pop", "rap", "jaz", "disco"];
// const lastStyle = musicStyle.length - 1;
// console.log(lastStyle);
// console.log(musicStyle[lastStyle]);

// Ітерація по масиву
// Цикл for можна використовувати для ітерації по масиву,
//     тобто «перебрати» його поелементно.

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const clientsName = ["Rich", "Bill", "Joshua"];

// for (let i = 0; i < clientsName.length; i = i + 1) {
//   console.log(clientsName[i]);
// }

// const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let k = 0; k < numbersList.length; k += 1) {
//   console.log(numbersList[k]);
// }

// Для доступу до елементів використовується синтаксис
// квадратних дужок масив[індекс], де індекс - це
//  значення лічильника циклу від 0 і до останнього індексу масиву,
// тобто менше, але не дорівнює його довжині.

// Цикл for...of
// Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти,
// як - от масиви і рядки.Тіло циклу буде виконуватися для значення кожного елемента.
// Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// for (const variable of iterable) {
//   // тіло циклу
// }

// variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
//     iterable — колекція, яка містить ітерабельні(що можна порахувати) елементи,
// //         наприклад масив.
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clientsName = ["Rich", "Bill", "Joshua", "Bob"];
// for (const clientName of clientsName) {
//   console.log(clientName);
// }

// const testText = "Electricity";
// for (const symboText of testText) {
//   console.log(symboText);
// }

// const names1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let i = 0; i <= names1.length; i += 5) {
//   console.log(i);
// }

// for (const nameTest of names1) {
//   console.log(nameTest);
// }

// for (let test2 of testText) {
//   console.log(test2);
// }

// Оператори break і continue
// Будемо шукати ім'я клієнта в масиві імен,
//  якщо знайшли - перериваємо цикл,
//     оскільки немає сенсу шукати далі, імена у нас унікальні.

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

// Якщо вони не збігаються - записуємо в message повідомлення про відсутність
// імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// Можна на початку задати message значення невдачі пошуку,
//     а в циклі перезаписати його на успіх, якщо знайшли ім'я.
//     Але break все одно нам знадобиться, оскільки, якщо у нас масив із
// 10000 клієнтів, а потрібний нам знаходиться на 2 позиції, то немає абсолютно
// жодного сенсу перебирати інші 9998 елементи.

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
// Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// const clientsName = ["Rich", "Bill", "Joshua", "Bob"];
// let findName = "rich";
// let message = "no this name";
// for (const testName of clientsName) {
//   console.log(testName);
//   if (testName === findName) {
//     message = "Normal";
//     break;
//   }
// }

// console.log(message);
// Використовуємо цикл для виведення тільки чисел, більших за певне значення.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   //   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const numbers1 = [1, 3, 14, 18, 4, 7, 29, 6, 34, 87, 65, 23, 47, 358];
// const bigerFor = 10;

// for (let i = 0; i < numbers1.length; i += 1) {
//   if (numbers1[i] < bigerFor) {
//     continue;
//   }
//   console.log(`Число більше за ${bigerFor}: ${numbers1[i]}`);
// }
// Метод split(delimiter) перетворює рядок в масив,
//  «розбиваючи» його роздільником delimiter.
//  Якщо роздільник - це порожній рядок,
//     то створиться масив окремих символів.Роздільником
//      може бути один або декілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const listNumbers = "It test how work this method";
// const testArr = ["It", "test", "how", "work", "this", "method"];
// console.log(listNumbers.split(" "));
// console.log(testArr.join("-"));

// Метод масивів join(delimiter) об'єднує елементи масиву у рядок.
// У рядку елементи будуть розділені символом або групою символів,
//     зазначених в delimiter.Тобто ця операція протилежна методу рядків
// split(delimiter).

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// Метод indexOf()
// indexOf(value) повертає перший індекс,
//     в якому елемент зі значенням value був знайдений в масиві,
//     або число - 1, якщо такий елемент відсутній.Використовуйте
//         indexOf тоді, коли необхідно отримати сам індекс елемента.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.indexOf("цікаво"));
// console.log(words.indexOf("JavaScript"));
// console.log(typeof words);
// const string = "It is string";
// console.log(Number(string));
// console.log(typeof Number(string));
// const numberOnly = "1993";
// const numberOnly1 = "1993";
// console.log(Number(numberOnly));
// console.log(typeof Number(numberOnly));
// console.log(numberOnly1);

// Метод includes()
// includes(value) перевіряє, чи містить масив елемент зі значенням value
//  і повертає true або false відповідно.Застосування цього методу корисне в
// ситуаціях, коли необхідно перевірити, чи є елемент в масиві і не важлива його
// позиція(індекс).

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// const userName = ["Vladislav", "Dmitry", "Jon", "Billi"];

// console.log(userName.includes("Billi"));
// console.log(userName.includes("Victotiya"));
// console.log(userName.includes("Dmitry"));
// console.log(userName.includes("Morfius"));
// Перевірка багатьох умов з includes()
// На перший погляд код наступного прикладу виглядає добре.

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// Можемо переписати умову, використовуючи includes(),
//     е дуже просто і масштабовано.

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const notRedFruts = ["orange"];
// const fruit = "ora1nge";

// const hasFruit = redFruits.includes(fruit);
// const inother = notRedFruts.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// } else if (inother) {
//   console.log(
//     `${fruit} is a  NOT red fruit! Then it's a ${fruit}. Do you undestend me ?`
//   );
// } else {
//   console.log("Not that and not that");
// }

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// const randomArr = [];

// randomArr.push("NumberOne");
// console.log(randomArr);

// randomArr.push("NumberTwo");
// randomArr.push("NumberThree");
// randomArr.push("NumberFour");
// console.log(randomArr);

// arrayNumber = ["NumberOne", "NumberTwo", "NumberThree", "NumberFour"];

// console.log(arrayNumber.pop());
// console.log(arrayNumber);

// console.log(arrayNumber.pop());
// console.log(arrayNumber);

// console.log(arrayNumber.pop());
// console.log(arrayNumber);

// console.log(arrayNumber.pop());
// console.log(arrayNumber);
// console.log(arrayNumber.pop());
// console.log(arrayNumber);
// console.log(arrayNumber.push(111));
// console.log(arrayNumber.push("NumberTwo"));
// console.log(arrayNumber.push("NumberThree"));
// console.log(arrayNumber.push("NumberFour"));

// console.log(arrayNumber);

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// arrayNumber = ["NumberOne", "NumberTwo", "NumberThree", "NumberFour"];
// console.log(arrayNumber.slice(1, 3));
// console.log(arrayNumber.slice());
// console.log(arrayNumber.slice(2));
// // const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// // console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// // console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// const arrayNumber = ["NumberOne", "NumberTwo", "NumberThree", "NumberFour"];
// const deleteArray = arrayNumber.splice(0, 2);

// console.log(arrayNumber);
// console.log(deleteArray);

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// const arrayNumber = ["NumberOne", "NumberTwo", "NumberThree", "NumberFour"];
// console.log(arrayNumber);
// arrayNumber.splice(2, 0, "purple");
// arrayNumber.splice(2, 0, "Test add");
// console.log(arrayNumber);

// const languages = ["C", "C++", "Java", "JavaScript"];
// console.log(languages);
// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// const arrayNumber = ["NumberOne", "NumberTwo", "NumberThree", "NumberFour"];
// arrayNumber.splice(1, 1, "TEST", "TEST1 ", "Go", "JavaScript");
// console.log(arrayNumber);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// const arrayNumber = ["NumberOne", "NumberTwo", "NumberThree", "NumberFour"];
// const arrayNumber1 = [
//   "NumberOne1",
//   "NumberTwo1",
//   "NumberThree1",
//   "NumberFour1",
// ];

// const allArray = arrayNumber1.concat(arrayNumber);
// // console.log(allArray);
// function getExtremeElements(array) {
//   const firstElement = array[0];

//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const miniArray = [firstElement, lastElement];
//   return miniArray;
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements());

// Напиши функцію getExtremeElements(array), яка приймає один параметр array -
//     масив елементів довільної довжини.Функція повинна повертати масив з двох
// елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]
