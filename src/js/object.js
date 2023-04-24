// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// // const location1 = user.location;
// // console.log(location1); // Об'єкт location

// // const country = user.location.country;
// // console.log(country); // 'Jamaica'

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const test = user.hobbies.length - 1;
// console.log(test);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// const tets = "isPublic";
// const test1 = book[tets];
// console.log(test1);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");
// book.title = "test";
// book.author = "it is a tast";
// book.genres.push("test", "test1", "test2");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']
// console.log(book.title);
// console.log(book.author);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.test = "it is a test ";
// book.arrayTest = ["it", "is", "a", "test"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']
// console.log(book.test);
// console.log(book.arrayTest);
// console.log(book);

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// Синтаксис коротких властивостей(shorthand properties)
//  вирішує цю проблему, дозволяючи використовувати ім'я
//  змінної у якості імені властивості, а її значення - у якості значення властивості.

// const name = "Генрі Сибола";
// const age = 25;
// const test = "it is a test";

// const user = {
//   name,
//   age,
//   test,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// console.log(user.test);
// // console.log(user);

// const test = "test";
// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'
// console.log(user);
// user[propName] = "it is a test";
// console.log(user.name);
// user[test] = "rename test in supertest";

// Синтаксис обчислювальних властивостей(computed properties)
// допомагає уникнути зайвого коду і, в деяких випадках, спростити його.
// Значенням обчислювальної властивості може бути будь - який валідний вираз.
// const test = "test";
// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: "Генрі Сибола",
//   [test]: "wellcome to the courses IT technology",
// };

// console.log(user.name); // 'Генрі Сибола'
// console.log(user.test);

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
//   test(a, b) {
//     const c = a + b;
//     console.log(c);
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");
// // bookShelf.test(5, 5);

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     console.log(bookIndex);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// bookShelf.addBook("TEST", "TEST1", "TEST12");
// bookShelf.addBook("TEST1", "TEST12");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist", "TEST");
// bookShelf.removeBook("TEST");
// bookShelf.removeBook("TEST1");
// // bookShelf.removeBook("The Mist", "TEST");
// // bookShelf.removeBook("The Mist", "TEST");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const cat = Object.create(animal);
// cat.name = "Tom";
// console.log(cat);
// console.log(cat.name);
// console.log(cat.legs);
// console.log(animal);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо

// }

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

// console.log(keys);
// console.log(values);

// const testKey = ["testKay"];
// const testValues = ["testValues"];

// const testObject = {
//   namePerson: "Ivan",
//   firstNamePerson: "Petrenko",
// };

// const testDog = Object.create(testObject);
// testDog.name = "Bobik";
// testDog.firstName = "Stars";
// testDog.old = 10;

// console.log(testObject);
// console.log(testDog);

// for (const itISAKey in testDog) {
//   console.log(itISAKey);
//   if (testDog.hasOwnProperty(itISAKey)) {
//     testKey.push(itISAKey);
//     testValues.push(testDog[itISAKey]);
//   }
// }

// console.log(testKey);
// console.log(testValues);

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount = propCount + 1;
//       console.log(propCount);
//     }
//   }

//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// Напиши функцію countProps(object), яка рахує і повертає кількість
// власних властивостей об'єкта в параметрі object. Використовуй змінну
// propCount для зберігання кількості властивостей об'єкта.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// Метод Object.keys()
// Вбудований клас Object має декілька корисних методів для роботи
// з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і
// повертає масив ключів його власних властивостей.Якщо об'єкт не має властивостей,
// метод поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// const testkeys = Object.keys(book);
// console.log(testkeys);

// Скомбінувавши результат Object.keys() і цикл for...of,
//   можна зручно перебрати власні властивості об'єкта,
//   і не використовуючи архаїчний цикл for...in з перевірками належності властивостей.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// const testkeys = Object.keys(book);
// console.log("test ARRAY", testkeys);

// for (const key1 of testkeys) {
//   console.log("TEST", key1);
//   console.log("TEST", book[key1]);
// }
// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const arr = Object.keys(object);
//   console.log(arr);
//   for (const result of arr) {
//     console.log(result);
//     propCount += 1;
//     console.log(propCount);
//   }
//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// Виконай рефакторинг функції countProps(object),
//   використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]
// const test = Object.values(goods);
// console.log(test);
// let total = 0;
// let totalTest = 0;
// for (const value of values) {
//   total += value;
// }
// for (const value of test) {
//   totalTest = totalTest + value;
// }
// console.log(total); // 20
// console.log(totalTest);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const val of values) {
//     totalSalary = totalSalary + val;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
// const test = Object.entries(book);
// console.log("test", test);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const total of colors) {
//   // console.log(total.rgb);
//   hexColors.push(total.hex);
//   rgbColors.push(total.rgb);
// }

// Перебери масив об'єктів colors, використовуючи цикл for...of.
//  Додай у масив hexColors значення властивостей hex, а в масив rgbColors
//   - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const name of products) {
//     if (name.name === productName) {
//       return name.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));

// Напиши функцію getProductPrice(productName),
//   яка приймає один параметр productName - назва продукту.
//   Функція шукає об'єкт продукту з таким ім'ям(властивість name)
//   в масиві products і повертає його ціну(властивість price).
//   Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// console.table(products);

// function getAllPropValues(propName) {
//   const result = [];
//   for (const prod of products) {
//     if (prod.hasOwnProperty(propName)) {
//       result.push(prod[propName]);
//     }
//   }
//   return result;
// }

// function getAllPropValues(propName) {
//   const result = [];
//   for (let i = 0; i < products.length; i += 1) {
//     const product = products[i];
//     console.log(product);
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }

//   const kays = Object.keys(prod);
//   // console.log(kays);
//   for (const kay of kays) {
//     // console.log(kay);
//     if (propName === kay) {
//       console.log(products[propName]);
//     }
//   }
// }

// for (const key of kays) {
//   // console.log(key);
//   if (propName === key) {
//   }
// }
// }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("category"));

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName -
//   ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з
//   таким ім'ям з кожного об'єкта в масиві products.Якщо в об'єктах відсутні властивості
//   з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.table(products);
// function calculateTotalPrice(productName) {
//   let result = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       return (result = product.price * product.quantity);
//     }
//   }
//   return result;
// }

// console.log(calculateTotalPrice("Radar"));
// // console.log(calculateTotalPrice("Blaster"));
// Напиши функцію calculateTotalPrice(productName), яка
//  приймає один параметр productName - назва товару.
//  Функція повинна повернути загальну вартість(ціна * кількість)
//  товару з таким ім'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// const temps = [14, -4, 25, 8, 11];
// const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// console.log(...test);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25
// console.log(Math.max(...test));

// const temps = [14, -4, 25, 8, 11];
// const test = [14, -4, 25, 8, 11];
// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// const testCopy = [...test];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// console.log(testCopy);
// testCopy.push(25);
// console.log(testCopy);
// testCopy.push("test");
// console.log(testCopy);

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
// const test = [14, 25, 11, 4, 4, 4, 4];
// const test1 = [23, 17, 18, 5, 6, 7, 8, 90];
// const teatconcat = [...test, ...test1];
// console.log(teatconcat);
// const anotherconcat = [...test1, ...test];
// console.log(anotherconcat);

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const test = { name: "Vasia", number: 12 };
// console.log(test);

// const third = { ...first, ...second, ...test };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const test = { propA: 5, propB: 10, propC: 50 };
// const test1 = { propC: 15, propD: 20, propC: 25 };
// const testconcat = { ...test, ...test1 };
// console.log(testconcat);
// const testconcat1 = { ...test1, ...test };
// console.log(testconcat1);

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// const test = { propA: 5, propB: 10, propC: 50 };
// const test1 = { propC: 15, probD: "it is test" };

// const test2 = { propB: 20, ...test, ...test1 };
// console.log(test2);

// const test3 = { ...test, propB: 20, ...test1 };
// console.log(test3);

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// // multiply(1, 2);
// // multiply(1, 2, 3);
// // multiply(1, 2, 3, 4);

// multiply("it is a test", 10, 20, ["it is a array"]);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating}
//  знаходиться в ${accessType} доступі.`;

// console.log(message);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом
//  ${rating} знаходиться в ${accessType} доступі.`;

// console.log(message);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   test = "It is test",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480
// console.log(test);

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage);
// // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// const test = {
//   title: "best",
// };

// const { title: testTitle, author = "Jeck" } = test;
// console.log(author);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const { author, rating } = book;

//   // console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast -
//   об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і
//  tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// Оголошена функція calculateMeanTemperature(forecast)
// В тілі функції використовується деструктуризація об'єкта
// В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
// Виклик calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 }
// }) повертає 28.5
// Виклик calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 }
// }) повертає 37

// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі

// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   // І так далі
// }

// // У такому випадку, під час її виклику передаємо один об'єкт з необхідними властивостями.

// // // ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

// // Або відразу в сигнатурі (підписі) функції - немає різниці.

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

// function makeTask(data) {
//   const { text, category = "General", priority = "Normal" } = data;
//   return { text, category, priority, completed: false };
// }
// function makeTask(data) {
//   const { text, category = "General", priority = "Normal" } = data;
//   return {text, category, priority, completed: false };
// }

// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// //  повертає {
// //   category: "Homemade",
// //     priority: "Low", text: "Take out the trash", completed: false
// // }

// console.log(makeTask({}));

// // Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з
// наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи
// напряму параметр data.
//  У новому об'єкті повинна бути властивість completed,
// значення якої зберігається в однойменній
//  локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві,
//   category і priority, можуть бути відсутніми.Тоді, в новому об'єкті завдання,
//   у властивостях category і priority повинні бути значення за замовчуванням, що
//  зберігаються в однойменних локальних змінних.

// Оголошена функція makeTask(data)
// Виклик makeTask({}) повертає
// { category: "General", priority: "Normal", completed: false }
// Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
//  повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Виклик makeTask({ category: "Finance", text: "Take interest" }) повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Виклик makeTask({ priority: "Low", text: "Choose shampoo" }) повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Виклик makeTask({ text: "Buy bread" }) повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// Change code below this line
// function add(...args) {
//   // Change code above this line
//   let result = 0;
//   for (number of args) {
//     console.log(number);
//     result = number + result;
//   }

//   return result;
// }

// console.log(add(32, 6, 13, 19, 8));

// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78

// // Change code below this line
// function addOverNum(a, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > a) total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// // Виклик addOverNum(50, 15, 27) повертає 0
// // Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// // Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// // Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218

// Функція findMatches() приймає довільну кількість аргументів.
// Першим аргументом завжди буде масив чисел,
//   а решта аргументів будуть просто числами.

// // Доповни код функції таким чином, щоб вона
// повертала новий масив matches, в якому будуть тільки
// ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// Оголошена функція findMatches()
// Виклик findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повертає [1, 2]
// Виклик findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) повертає [17, 89, 2]
// Виклик findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) повертає [24, 9, 41]
// Виклик findMatches([63, 11, 8, 29], 4, 7, 16) повертає []

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return ` Updating book
// //   ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.removeBook("Red sunset"));

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки
//  за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу
// за назвою.Повертає рядок "Deleting book <назва книги>",
//   де < назва книги > - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати
// назву книги на нову.Повертає рядок "Updating book
//   < стара назва > to < нова назва > ", де < стара назва >
// і < нова назва > - це значення параметрів oldName і newName відповідно.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.getBooks - це метод об'єкта

// Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"

// Значення властивості bookShelf.addBook - це метод об'єкта

// Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"

// Значення властивості bookShelf.removeBook - це метод об'єкта

// Виклик методу bookShelf.removeBook("Red sunset") повертає рядок
// "Deleting book Red sunset"

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Виклик методу bookShelf.updateBook("Sands of dune", "Dune")
//  повертає рядок "Updating book Sands of dune to Dune"

// const books = ["The last kingdom", "Haze", "The guardian of dreams"];

// function updateBook(oldName, newName) {
//   books.splice(books.indexOf(oldName), 1, newName);
//   return books;
// }

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;
//   },
// };

// // console.log(bookShelf.books);

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// Доповни метод updateBook(oldName, newName)
// таким чином, щоб він змінював назву книги з oldName
// на newName у властивості books.Використовуй indexOf()
//  для того, щоб знайти потрібний елемент масиву, і splice()
//  для того, щоб замінити цей елемент.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"),
//   значення властивості books - це масив["The last kingdom", "Dungeon chronicles",
//     "The guardian of dreams"]

// Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"),
//   значення властивості books - це масив["Dune", "Haze", "The guardian of dreams"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// // Доповни метод removePotion(potionName) таким чином,
//   щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.removePotion("Dragon breath"),
//   у властивості potions буде масив["Speed potion", Stone skin"]
// Після другого виклику методу atTheOldToad.removePotion("Speed potion"),
//   у властивості potions буде масив["Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// Доповни метод updatePotionName(oldName, newName)
// таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
//   у властивості potions буде масив["Speed potion", "Polymorth", "Stone skin"]
// Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
//   у властивості potions буде масив["Speed potion", "Polymorth", "Invisibility"]

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (pot of this.potions) {
//       // console.log(pot.name);
//       if (pot.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     // if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potIndex = [];
//     for (pIndex of this.potions) {
//       // console.log(pIndex.name);
//       potIndex.push(pIndex.name);
//     }
//     // console.log(potIndex);
//     const potionIndex = potIndex.indexOf(potionName);
//     // console.log(potionIndex);
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     for (pIndex of this.potions) {
//       // console.log(pIndex.name);
//       if (pIndex.name === oldName) {
//         pIndex.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// // console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// // , у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 },
// // { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// console.log(atTheOldToad.potions);

// // Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків,
//  а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості potions, але тільки,
//  якщо такого зілля ще немає в інвентарі.В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// // updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає
// [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
//   { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
// в масиві potions останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
// в масиві potions останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
