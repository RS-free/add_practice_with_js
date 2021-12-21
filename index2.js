//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// console.log(styles.shift());
// styles.splice(0, 0, "Рэп", "Регги");
// // styles.unshift("Рэп", "Регги")

// console.log(styles);

//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//        return "Вы ввели не число";
//   }
//     return a < b ? a : b;
// }

// console.log(min('a', 5));

//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
// const styles = ["Джаз", "Блюз", "Рок-н-ролл", "Регги", "Рэп"];
// const styles = [
//   { name: "Джаз", engl: "jazz", number: 1 },
//   { name: "Блюз", engl: "blues", number: 2 },
//   { name: "Рок-н-ролл", engl: "rock 'n' roll ", number: 3 },
//   { name: "Регги", engl: "reggae", number: 4 },
//   { name: "Рэп", engl: "rap", number: 5 },
// ];

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(`${element.number} - ${element.name}`);
//   }
// }
// logItems(styles);
//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, -7];
// function findSmallerNumber(numbers) {
//   // return Math.min(...numbers)
//   let smallerNumber = numbers[0];
//   for (const number of numbers) {
//     if (smallerNumber > number) {
//       smallerNumber = number;
//           }

//   }
//   return smallerNumber;
// }
// console.log(findSmallerNumber(numbers));

/* Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const card = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {

//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return
//       }
//     }
//     const newProduct = { ...product, quantity: 1 };
//     this.items.push(newProduct)
//   },

//   remove(productName) {
// for (let i = 0; i < this.items.length; i++) {
//   const element = this.items[i];

//   if (element.name === productName) {

//     this.items.splice(i, 1);
//   }
// }
//   },

//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const {price, quantity} of this.items) {
//       total += price * quantity;
//     }
//     return total;
//   },

//   increaseQuantity(productName) {
//     for (let item of this.items) {

//       if (productName === item.name) {
//         item.quantity += 1;
//       }
//     }
//   },

//   decreaseQuantity(productName) {
//     for (let item of this.items) {

//       if (productName === item.name) {
//         item.quantity -= 1;
//       }
//     }
//   }

// }

// card.add({ name: '🍎', price: 50 });
// card.add({ name: '🍇', price: 70 });
// card.add({ name: '🍇', price: 70 });
// card.add({ name: '🍋', price: 60 });
// card.add({ name: '🍓', price: 110 });
// card.add({ name: '🍓', price: 110 });

// card.remove('🍓');
// card.increaseQuantity('🍋');
// card.decreaseQuantity('🍇');
// console.log(card.countTotalPrice());
// console.table(card.getItems());

// Программа должна уметь переводить 5 валют друг в друга (валюты на ваше усмотрение). Пользователь вводит сначала название валюты, затем вводит сумму, и название валюты в которую хочет перевести, после чего получает ответ (для общения с пользователем используем prompt и alert подробнее тут).
// Если пользователь ввел что-то неверно, нужно повторить ввод этой информации.
// По окончании конвертации спросить у пользователя хочет ли он произвести конвертацию еще раз. Если да - то повторить все о'и. Если нет - выполнить выход из программы.

const currency = {
  usd: {
    rub: 71.85,
    chf: 0.91,
    eur: 0.86,
    pln: 3.98,
  },
  rub: {
    usd: 0.014,
    chf: 0.013,
    eur: 0.012,
    pln: 0.056,
  },
  chf: {
    usd: 1.09,
    rub: 78.28,
    eur: 0.94,
    pln: 4.35,
  },
  eur: {
    usd: 1.16,
    rub: 82.99,
    chf: 1.06,
    pln: 4.61,
  },
  pln: {
    usd: 0.25,
    rub: 18,
    chf: 0.23,
    eur: 0.22,
  },
};

alert("На нашем сайте вы можете конвертировать валюты USD, RUB, CHF, EUR, PLN");

// const currencyToConvert = prompt("Яку валюти ви бажаєте обміняти?");

// const currencyWhichConvert = prompt("В яку валюту ви бажаєте обміняти?");

// const currencyСount = prompt("Кількість валюти?");
let toConvertInfo = {};
let price = 0;
function toConvertCurrency() {
  let currencyToConvert = prompt("Яку валюти ви бажаєте обміняти?");
  const currencyToConvertModify = currencyToConvert.toLocaleLowerCase();
  if (currency[currencyToConvertModify]) {
    toConvertInfo = currency[currencyToConvertModify];
    whichConvertCurrency(currencyToConvertModify);
  } else {
    alert("Ви ввели невірні дані!!!");
    const tryAgain = confirm("Ви хочете спробувати знову?");
    if (tryAgain) {
      toConvertCurrency();
    }
  }
}

function whichConvertCurrency(toConvert) {
  let currencyWhichConvert = prompt(
    `На яку валюту ви хочете обміняти ${toConvert}`
  );
  const currencyWhichConvertModify = currencyWhichConvert.toLocaleLowerCase();
  if (toConvertInfo[currencyWhichConvertModify]) {
    price = toConvertInfo[currencyWhichConvertModify];
    convertsation(toConvert, currencyWhichConvertModify, price);
  } else {
    alert("Ви ввели невірні дані!!!");
    const tryAgain = confirm("Ви хочете спробувати знову?");
    if (tryAgain) {
      toConvertCurrency();
    }
  }
}

function convertsation(toConvert, currencyWhichConvertModify, price) {
  let currencyСount = prompt("Кількість валюти?");
  let currencyСountToNumber = Number(currencyСount);
  if (!currencyСountToNumber) {
    alert("Ви ввели невірні дані!!!");
    const tryAgain = confirm("Ви хочете спробувати знову?");
    if (tryAgain) {
      toConvertCurrency();
    }
  }
  console.log("currencyСountToNumber", currencyСountToNumber);
  console.log("price", price);
  alert(
    `${currencyСountToNumber} ${currencyWhichConvertModify} буде дорівнювати ${
      currencyСountToNumber * price
    } ${toConvert} по курсу ${price}`
  );
  const repeat = confirm("Ви хочете повторити операцію?");
  if (repeat) {
    toConvertCurrency();
  }
}

toConvertCurrency();

