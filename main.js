// console.log("Hello world");

// let x = 'Hello world!!!';
// let y = x
// x = 'До свидания';
// console.log(x);
// console.log(y)

// let importantAlert = 'Какое-то оповещение';
// let isCorrect = true;
// isCorrect = false;

// const PI = 3.14;

// let y = 5;
// let z;
// let n = null;
// let t = true;
// let f = false;

// console.log(x);
// console.log(y);
// console.log(z);

//Типы данных
/*
  1.Текст
  2.Числа
  3.Underfiend - неопределённое значение
  4. Именно 0
  5.True/false
  6. bigInt

  */
//  Операторы
// let x = 2;
// let y = 3;

// console.log(x + y); //Сложение
// console.log(x - y); // Вычитание
// console.log(x * y); // Умножение
// console.log(x / y); //Деление
// console.log(x ** 2); // Возведение в степень
// console.log(y % x); // Остаток
// console.log(-x); //Смена знака
// x++
// console.log(++x);
// x = 2;
// y = 3;
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);
// console.log(x >= y);
// let valuePrompt = prompt('Введите ваше число', 50);
// alert('Ваше число ' + valuePrompt);
// console.log(+valuePrompt);



// valuePrompt = +prompt('Ввведите ваше число');
// alert(valuePrompt ** 2);
// x = +prompt('Введите ваше число 1');
// y = +prompt('Введите ваше число 2');
// let avarage = (x + y) / 2;
// alert(avarage);

// x = +prompt('Введите длину стороны квадрата');
// let S = x ** 2;
// alert('Площадь квадрата равна' + S);

// let name = prompt('Введите имя');
// alert('Привет ' + name);
// name = 'Виталий'


// Обекты
// const objOld = new Object();

// const objNew = {
//   name: 'Никита',
//   secondName: 'Елагин',
//   'is admin': true,
//   role: null,
// };

// console.log(objNew['is admin']);

// objNew.age = 28;

// console.log(objNew);

// delete objNew.age;
// console.log(objNew);
// console.log(objNew.test);


// if (objNew.name !== undefined) {
//   console.log('Свойство существует');

// }

// // 'key' in obj

// console.log('role' in objNew);

// for (key in objNew) {
//   console.log(key);
//   objNew[key];
// }

// const objNewNew = {
//   name: 'test',
// }
// objNewNew.secondName = 'Sahakyan';
// objNewNew.secondName = 'NeSahakyan';

// console.log(objNewNew);

// function getName(name, secondName) {
//   return {
//     name,
//     secondName,
//   }
// }

// console.log(getName('Никита', 'Sahakyan'));

// 1.Создать пустой объект с названием user
// 2.Добавить свойство  name  со своим именем
// 3. Добавить свойство  secondname
// 4. Изменит значение name  на другое
// 5. Удалить свойство name
// После каждого шага  console.log()

// const user = {

// }
// user.name = 'Aghunik';

// user.secondName = 'Sahakyan';

// user.name = 'Maxim';

// delete user.name;

// console.log(user);

// function isEmpty(obj) {
//   for (key in obj) {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty({}));

// let obj = {
//   name: 'Тест',

// }

// Массивы
console.log(typeof {});

let arr = ['Aghunik', 'Almida', 'Albert'];
console.log(arr.length);

arr.push('Hello');
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift('Start', 1236)
console.log(arr);
arr.shift();
console.log(arr);

for (item of arr) {
  console.log(item);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]);