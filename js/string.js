// Метод indexOf()
// Повертає позицію(індекс), на якій знаходиться перший збіг підрядка або
//     - 1, якщо нічого не знайдено.

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// const message2 = "Hello world it is a test how work method indexOf";
// console.log(message2.indexOf("index"));

// Метод includes()
// Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься
//     , і false - в іншому випадку.Регістр символів в рядку і підрядку має значення,
//         оскільки, наприклад, літера "a" не дорівнює літері "А".

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// // console.log(productName.includes("ремонтний")); // false

// const message2 = "Hello world it is a test how work method indexOf";
// console.log(message2.includes("indexof"));
// console.log(message2.includes("indexOf"));

// Метод endsWith()
// Дозволяє визначити, чи завершується рядок символами
//     (підрядком), зазначеними в дужках, повертаючи true або false.

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// const message2 = "Hello world it is a test how work method indexOf";
// console.log(message2.endsWith(".js"));
// const message3 = "Hello world it is a test how work method indexOf.css";
// console.log(message3.endsWith(".css"));

// Методи replace() і replaceAll()
// Повертає новий рядок, в якому перше(replace) або усі збіги(replaceAll)
// підрядка замінені на вказане значення.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const jsFile = "index.js, home.js, modal.js";
// const renameFirstFile = jsFile.replace(".js", ".scss");
// console.log(renameFirstFile);
// const renameAllFile = jsFile.replaceAll("js", ".html");
// console.log(renameAllFile);

// Метод slice()
// Метод рядків slice(startIndex, endIndex)
// використовується для створення копії частини або всього рядка.
// Він робить копію елементів рядка від startIndex і до, але не включно endIndex і
// повертає новий рядок, не змінюючи оригінал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// const jsFile = "index.js, home.js, modal.js";
// console.log(jsFile.slice(5, 8));

// Тобто, логічне «І» зупиняється на хибному і повертає те,
//     на чому зупинилось, або останній операнд.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// console.log(1 && 10);
// console.log(20 && 10);
// console.log(1 && 0 && 20);
// console.log(20 && "true" && 20);
// console.log(1 < 2 && 5 > 0 && "All rigth");
// console.log(1 * 2 > 1 && 5 > 0 * 2 && "All rigth");
// console.log(1 * 2 > 1 && 5 > 0 * 2 && "false" && "All rigth");

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// console.log(10 || 3);

// console.log(10 > 11 || 3);
// console.log(10 * 10 || 3);
// console.log(0 || false || null);
// console.log(false || NaN || null);
