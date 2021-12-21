//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?")
// let message = '';

// console.log(question);
// if (question === 'ECMAScript') {

//     message = "Верно!";

// } else {
//     message = "Не знаете? ECMAScript!";
// }

// console.log(message);

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const globalMinutes = 122;
// const hours = Math.floor(globalMinutes / 60);
// const modifyHours = String(hours).padStart(2,0);
// const minutes = globalMinutes % 60;
// const modifyMinutes = String(minutes).padStart(2,0);

// // console.log(parseInt(hours));
// console.log(`${modifyHours}:${modifyMinutes}`);

//3. Напишите цыкл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max
// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//         continue
//     }
//     total += i;
// }
// console.log(total);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введите свой логин");
// const passworAdmin = "Админ";

// if (loginInput === passworAdmin) {
//     const passwordInput = prompt('Give me a Password');
//     if (passwordInput === 'Я главный') {
//         console.log("Здравствуйте!");
//     } else if (passwordInput === null) {
//         console.log("Отменено");
//     } else {
//         console.log("Неверный пароль!");
//     }
// }  else if(loginInput === null) {
//     console.log("Отменено");
// } else {
//     console.log("Я вас не знаю");
// }

// switch (loginInput) {
//     case "Админ":
//         console.log("Здравствуйте!");
//         const passwordInput = prompt('Give me a Password');
//         switch (passwordInput) {
//             case 'Я главный':
//                 console.log("Здравствуйте!");
//                 break
//             case null:
//                 console.log("Отменено");
//             default:
//                 console.log("Неверный пароль!");
//         }
//         break;
//     case null:
//         console.log("Отменено");
//         break;
//     default:
//         console.log("Я вас не знаю");
// }

//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к начению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let number = prompt("Введіть будь ласка число");
// let total = 0;
// let check = false;
// // while (number) {
// //   total += Number(number);
// //   number = prompt("Введіть будь ласка число");
// // }

// do {
//   if (number) {
//     check = true;
//     total += Number(number);
//     number = prompt("Введіть будь ласка число");
//   } else {
//     check = false;
//   }
// } while (check);

// console.log(`Загальна сума введених чисел рівна ${total}`);

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let inputValue = prompt('Введіть число більше 100');
// let check = false;
// // while (inputValue <= 100){
// //   inputValue = prompt('Введіть число більше 100');

// // }
// do {
//   if (inputValue === null) {
//     check = false;
//   } else if (inputValue <=100) {
//     check = true;
//     inputValue = prompt('Введіть число більше 100');
//   } else{
//     check = false;
//   }

// } while (check);

// console.log(`Ви ввели число ${inputValue} `);

//8. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
// let min = prompt('Введіть число від 0 до 59');
// if (min >= 0 && min <= 14) {
//   console.log(`${min} Знаходиться в першій четверті`);
// } else if (min >= 15 && min <= 29) {
//   console.log(`${min} Знаходиться в 2 четверті`);
// } else if (min >= 30 && min <= 44) {
//   console.log(`${min} Знаходиться в 3 четверті`);
// } else if (min >= 45 && min <= 59) {
//   console.log(`${min} Знаходиться в 4 четверті`);
// }
// switch (min) {
//   case min >= 0 && min <= 14:
//     console.log(`${min} Знаходиться в першій четверті`);
//     break;
//   case min >= 15 && min <= 29:
//     console.log(`${min} Знаходиться в 2 четверті`);
//     break;
//   case min >= 30 && min <= 44:
//     console.log(`${min} Знаходиться в 3 четверті`);
//     break;
//   case min >= 45 && min <= 59:
//     console.log(`${min} Знаходиться в 4 четверті`);
//     break;
//   default:
//     console.log('Ви ввели число більше вказаного!');
// }

// Дана строка, состоящая из символов, например, 'abcde'.
//     Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
// const string1 = 'abcde';
// const string2 = 'bcde';
// console.log(string1.startsWith('a'))
// console.log(string2.startsWith('a'))
// console.log(string1.endsWith('e'))
// console.log(string2.endsWith('e'))

const date = new Date();
const time = date.getHours();
console.log(time);
if (time >= 7 && time <= 11) {
  console.log("Доброе утро");
} else if (time >= 11 && time <= 16) {
  console.log("добрый день");
} else if (time >= 16 && time <= 20) {
  console.log("добрый вечер");
} else {
  console.log("Доброй ночи");
}

