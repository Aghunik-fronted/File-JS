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
// console.log(typeof {});

// let arr = ['Aghunik', 'Almida', 'Albert'];
// console.log(arr.length);

// arr.push('Hello');
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.unshift('Start', 1236)
// console.log(arr);
// arr.shift();
// console.log(arr);

// for (item of arr) {
//   console.log(item);
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]);

// console.log(1e-6);

// let num = 100;
// console.log(+num.toString(2));

// let string = '42.5px';

// console.log(parseInt(string)); //Переобразует строку в текст

// console.log(parseFloat(string));

// let string = '4254';
// console.log(string.length);

// console.log(string[string.length]);

// console.log(string.charAt(10));

// for (let char of string) {
//   console.log(char)
// };


// string = 'Hello';
// string[0] = 'H';

// console.log(string);

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// const name = 'Настя';
// function hello(str) {
//   return str[0].toUpperCase() + str.substr(1, str.length - 1).toLowerCase();

// };

// console.log(hello('нАстя'))

// console.log(name.substr(1, 2));
// console.log(name.slice(1, 4));
// console.log(name.substring(1, 4));

// function repeatStr(n, s) {
//   let str = " ";
//   for (let i = 0; i < n; i++) {
//     str = str + s
//   }
//   return str;
// }
// console.log(repeatStr(2, 'Na'));

// function repeatStr(n, s) {
//   let str = s
//   return s.repeat(n)
// }
// console.log(repeatStr(4, 'Na'));

// const repeatStr = (n, s) => s.repeat(n);



// function nameSort(a, b, callback) {
//     let sum = a + b;
//     callback();
//     alert(sum);
// }

// function hello() {
//   alert('Вычисление завершено')
// }
// nameSort(1,2,hello);

// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   let result = 1; 
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(`Факториал 5 равен ${factorial(5)}`);

// function power(a, b) {
//   if (b === 0) {
//     return 1;
//   }
//   return a * power(a, b-1);
// }
// console.log(power(2,3));
// console.log(2**3);

// function recusive() {
//   if(condition) {
//     return 
//   }
// }

const elem = document.querySelector('.test');
const elems = document.querySelectorAll('test');
console.log(elems);

let child = elem.childNodes;
child = elem.children;
console.log(child);

let parent = elem.parentElement;
console.log(parent);

const nextSibling = elem.nextElementSibling;
console.log(nextSibling);

parent = elem.querySelector('children');


const btn = document.querySelector('.button');
const click = () => {
  // alert('Click on button');
  // btn.classList.add('red');
  // btn.classList.remove('button');
  btn.classList.toggle('red');
}
if(btn) {
  btn.addEventListener('click', click)
}
console.log('click');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  
})