// Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const makeSheff = function (name) {
//     return function makeDish(dish) {
//         console.log(`${name} is cooking ${dish}`);
//     };
// };

// const mango = makeSheff("mango");
// console.dir(mango);
// mango('coffe');

// const bill = makeSheff("bill");
// bill('pancake');

// Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product))

//Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает

// const savePassword = (password) => {
//     return (ourPassword) => password === ourPassword;
// }

// const mangoPassword = savePassword('mango');
// console.log(mangoPassword('mango'));

//Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.

// const saveDiscount = (discoun) => {
//     return function makeDiscount(sum) {
//         return sum - sum * (discoun / 100)
//     }
// }

// const discoun = saveDiscount(70)
// console.log(discoun(1000));

// const saveDiscount = (discoun) => (sum) => sum - sum * (discoun / 100)

// const discoun = saveDiscount(70)
// console.log(discoun(1000));

//Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2
// const array = [3, 5, 6, 34, 8, 83, 12, 34];
// const each = (array, callback) => {
//     return array.map(callback)
// };
// console.log(each(array,(value) => value * 2));

//Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов

// const makeCounter = () => {
//     let total = 0;
//     return () => (total +=1)
// }

// const total = makeCounter()
// console.log(total());
// console.log(total())
// console.log(total())
// console.log(total())

//Узнать общие годы практики в объекте workers

// const workers = [
//   { id: 10, name: 'Mango', years: 14 },
//   { id: 2, name: 'Poly', years: 19 },
//   { id: 41, name: 'Ajax', years: 30 },
//   { id: 99, name: 'Kiwi', years: 22 },
// ];

// const sumyears = workers.reduce((acc, work) => work.years + acc, 0)
// console.log(sumyears);

//Дан массив с числами. Оставьте в нем только положительные числа.
//Затем извлеките квадратный корень и этих чисел.
// const array = [121, -2, 225, 0, 4, -5, 36, -11];

// const filteredArray = array.filter(num => num > 0).map(num => Math.sqrt(num));
// console.log(filteredArray);

//Нужно проверить "same" массивы
//числа с первого в квадрате равны числам второго
const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// const checkArray = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   const sqrtArray2 = arr2.map((number) => Math.sqrt(number));
//   const sortedArray1 = [...arr1].sort((a, b) => a - b);
//   const sortedArray2 = [...sqrtArray2].sort((a, b) => a - b);
//   for (let i = 0; i < sortedArray1.length; i += 1) {
//     if (sortedArray1[i] !== sortedArray2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkArray(a, b));

const checkArray = function (arr1, arr2) {
  const sortedArray1 = [...arr1].sort((a, b) => a - b);
  const sortedArray2 = [...arr2].sort((a, b) => a - b);
  return sortedArray1
    .map((number) => number * number)
    .every((number, index) => number === sortedArray2[index]);
};

console.log(checkArray(a, b));
