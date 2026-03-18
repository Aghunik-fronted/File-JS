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

// const elem = document.querySelector('.test');
// const elems = document.querySelectorAll('test');
// console.log(elems);

// let child = elem.childNodes;
// child = elem.children;
// console.log(child);

// let parent = elem.parentElement;
// console.log(parent);

// const nextSibling = elem.nextElementSibling;
// console.log(nextSibling);

// parent = elem.querySelector('children');


// const btn = document.querySelector('.button');
// const click = () => {
//   // alert('Click on button');
//   // btn.classList.add('red');
//   // btn.classList.remove('button');
//   btn.classList.toggle('red');
// }
// if(btn) {
//   btn.addEventListener('click', click)
// }
// console.log('click');
// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');

// burger.addEventListener('click', () => {
  
// })

// const calculator = {
//   value: 0,
//   add(x) {
//     this.value += x
//     return this;
//   },
//   multiply(x) {
//     this.value *= x
//     return this;
//   },
//   subtract(x) {
//     this.value -= x
//     return this;
//   },
//   log() {
//     console.log(this.value)
//     return this;
//   },
// }

// calculator.add(5);
// calculator.log();
// calculator.multiply(2);
// calculator.subtract(5);
// calculator.log();

// function createCounter() {
//   return {
//     counter: 0,

//     increment() {
//         this.counter++;
//         return this.counter;
//     },
//     decrement() {
//       this.counter--;
//       return this.counter;
//     },
//     getCount(){
//       return this.counter;
//     }
//   }
// }

// const count = createCounter();
// console.log(count.increment());
// console.log(count.decrement());

// const obj = {
//   seconds: 0,
//   minutes: 0,
//   hours: 0,

//   getTime() {

//   }
// }

// const userNew = {
//   name: 'Aghunik',
//   getName() {
//     console.log(this.name);
//   },
// }

// userNew.getName()

// const userNewNew = userNew;

// userNewNew.name = 'NoAghunik'

// userNewNew.getName();

// const str = 'Строка ,Строка';

// console.log(str.split().join());
// console.log(str.split(''));
// console.log(str.split(' '));
// console.log(str.split(','));

// const arr = ['h', 'o', 'u', 's', 'e']
// console.log(arr.join(''));
// console.log(arr.reverse());

// const word = 'Doxod';

// const isPalidrome = (word) => {
//   if(word.toLowerCase() === word.toLowerCase().split('')).reverse 
// }

// const numbers = [1,2,3,4];
// numbers.forEach((item, index, arr) => {
//   console.log(item * 2);
//   console.log(index);
//    console.log(arr);
// })

// let doubles = numbers.map(item => item * 2)

// let evenNumbers = numbers.filter(num => num % 2 === 0)

// console.log(doubles);
// console.log(evenNumbers);

// console.log(numbers.sort((a,b) => b - a))

// console.log(numbers.some(num => num > 7))
// console.log(numbers.every(num => num > 0))

// const arr1 = [1,2];
// const arr2 =[3,4];
// console.log(arr1.concat(arr2, [5,6]));

// const array = ['h', 'o', 'm', 'e'];
// array.splice(1, 2,'k')
// console.log(array);


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`)
//   }
// }

// const man = new Person('Агуник', 31);
// man.sayHello();

// class Worker extends Person {
//   #balance
//   constructor(name, age, position) {
//       super(name, age)
//       this.position = position;
//       this._iq = this._iq;
//       this.#balance = balance;
//   }
//   get iq() {
//     return this._iq;
//   }

//   set(value) {
//     if(value < 0){
//       return 'iq не может быть отрицательным'
//     }
//     this._iq = value;
//   }
//   sayHello() {
//     console.log(`${this.name}, я - ${this.position}`)
//   }
// }

// const workder = new Worker('Агуник', 32, 'Программист')
// workder.sayHello();
// workder.iq = 100;


// class BankAccount {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;
//   }
//   deposit(amount) {
//       if (amount > 0) {
//         this.balance += amount;
//         console.log(`Счёт пополнен на  ${amount}`);
//       } else {
//         console.log(`Сумма должна быть положительной`);
//       }
//       return this
//   }
//   withdraw(amount) {
//       if (amount > this.balance) {
//         console.log(`Недостаточно средств`);
//       } else if (amount < 0) {
//         console.log(`Сумма снятия должна быть положительной`)
//       } else {
//         this.balance -= amount;
//         console.log(`Снято ${amount}`);
//       }
//   }
//   checkbalance(amount) {
//       console.log(`Текущий баланс ${this.balance}`)
//   }
// }

// const acc = new BankAccount('Aghunik', 1000);

// acc.checkbalance();
// acc.deposit(1500);
// acc.withdraw(3000);
// acc.deposit(1500);


// class User {
//   constructor(password) {
//     this._password = password;
//   }

//   get password() {
//     return this._password.replace(/./g, '*')
//   }

//   set password(value) {
//     if (value.length < 6) {
//       console.log('Пароль слишком короткий');
//       return
//     }
//   }

//   checkPassword(attemp) {
//     return this._password === attemp;
//   }
// }

// const user = new User('1234567');
// console.log(user.password);
// let newPass = prompt('Введите новый пароль');

// if (user.checkPassword(newPass)) {
//   alert('Пароли совпадают')
// } else {
//   user.password = newPass;
//   alert ('Пароль успешно изменён');
// }

// const fancy = new Fancybox({
  
// })

// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// parent.addEventListener('click', () => {
//   console.log('Click on parent');
// })
// child.addEventListener('click', () => {
//   console.log('Click on child');
//   e.stopProgration()
// })

// const toDoList = document.querySelector('.to-do');
// const addTaskBtn = document.querySelector('.add-tesk');

// addTaskBtn.addEventListener('click', () => {
//   const newLi = document.createElement('li');
//   newLi.innerHTML = 'Новая задача <button class ="delete">х</button>';
//   toDoList.appendChild(newLi);
// })

// toDoList.addEventListener('click', (e) => {
//     console.log(e.target)
//     if (e.target.classList.contains('delete')){
//         e.target.closest('li').remove();
//     }
// })
// const removeBtns = document.querySelectorAll('.delete');
// removeBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     btn.closest('li').remove();
//   })
// })


// const widthParam = document.querySelector('.width');
// const heightParam = document.querySelector('.height');

// const updateSize = () => {
//   widthParam.textContent = window.innerWidth;
//   heightParam.textContent = window.innerHeight;
// }
// updateSize();
// window.addEventListener('resize', () => {
//   updateSize();
//     // console.log('Окно поменяло размер')
// })

// const box = document.querySelector('.box');
// const rect = box.getBoundingClientRect();
// // console.log(rect);
// console.log(box.clientWidth);
// console.log(box.clientHeight);
// console.log(box.offsetHeight);
// console.log(box.offsetWidth);

// const header = document.querySelector('.header');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     header.classList.add('.js-scroll')
//   } else {
//     header.classList.remove('.js-scroll')
//   }
// })
// const btnUp = document.querySelector('.button-up');
// btnUp.addEventListener('click', () => {
//   window.scrollTo(0, 0)
// })
// // window.scrollTo(0, 500);
// // setTimeout(() => {
// //   window.scrollBy(0, 500)
// // }, 1000)

// box.scrollIntoView({
//   behavior:'smooth',
//   block:'end'
// })

// const infinityScroll = () => {
//   const documentHeight = document.documentElement.scrollHeight;
//   console.log(documentHeight)
//   const scrollPosition = window.scrollY + window.innerHeight;
//   console.log(scrollPosition)

//   if (documentHeight - scrollPosition < 100) {
//       console.log('Почти в конце');
//   }
// }

// window.addEventListener('scroll', infinityScroll)
// infinityScroll();

// const user = {
//   name: 'Aghunik',
//   age: '25',
//   isAdmin: 'true',
//   skills: ['HTML', 'CSS', 'Java Script'],
//   adddres: {
//     city: 'Kursk',
//     street: 'Deyneky',
//   }
// }
// {
//   "name: "Aghunik",
//   "age": 32,
//   "isAdmin": true,
// }

// const resp = '{"success": true, "id": 124}';
// console.log(user);
// console.log(JSON.stringify(user));
// console.log(JSON.parse(resp));




// fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
//     method: 'GET',
//     headers: {
//         'X-API-KEY': 'dc2e56b4-9b1f-432f-8371-542669705498',
//         'Content-Type': 'application/json',
//     },
// })
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))


// const API_KEY = 'dc2e56b4-9b1f-432f-8371-542669705498';
// const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/';

// function searchFilms(query){
//     if (!query.trim()) return

//      fetch(`${BASE_URL}v2.1/films/search-by-keyword?keyword=${query}`,
//         {

//         headers: {
//             'X-API-KEY': API_KEY,
//             'Content-Type': 'application/json',
//         }
//       }
//      )
//      .then(response => response.json())
//      .then(json => displayMovies(json.films))
// }

// function displayMovies(films){
//     const container = document.querySelector('.movies');
//     container.innerHTML = '';

//     films.slice(0, 10).forEach(film => {
//         const card = document.createElement('div');
//         card.className = 'movie-card';
//         card.innerHTML = `
//             <img src = "${film.posterUrlPreview}" alt = "${film.nameRu}">
//             <h3>${film.nameRu}</h3>
//         `
//         container.appendChild(card);
//     })
// }
// const searchBtn =document.querySelector('.search-button');
// searchBtn.addEventListener('click', () => {
//     const query = document.querySelector('.search-input').value
//     searchFilms(query)
// })

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const name = document.querySelector('[name="username"]').value;
    // const email = document.querySelector('[name="email"]').value;
    // console.log({name, email});
    const formData = new FormData(form)
    for (let [key, value] of formData.entries()) {
        console.log(`${key} : ${value}`);
    }
})


