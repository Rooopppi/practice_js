//                              **TEMPLATE STRING**

// const firstName = 'John';
// const secondName = 'Smith';

// console.log(`Hello, ${firstName} ${secondName}`);

// OPERATOR "?" *** 

// const choose = prompt('M for male or F for female');

// let gender = (choose == 'M') ?
// 'male' : 'female';

// alert(gender);

//                              **OPERATOR "SWITCH"** 

// let num = +prompt('Enter a number');

// switch (num) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

//                              **CYCLE WITH PRECONDITION**

// let sum = 0;
// let number = 1;

// while (number <= 100) {
//     sum = sum + number;
//     number++;
// }

// console.log(sum);

//                              **CYCLE WITH POSTCOMDITION**

// const result = (254 * 7) +(124 - 16)/9;
// let ans;

// do {
//     ans = +prompt('(254*7)+(124-16)/9')
// } while (ans !== result);

// console.log('Succes')

//                               **CYCLE WITH COUNTER**

// const input = +prompt('Number');
// let factorial = 1;

// for (let i = 1; i <= input; i++) {
//     factorial = factorial * i;
// }

// console.log(factorial)

//                               **CYCLE BREAK**

// let sum = 0;

// while (true) {
//     const input = prompt('Enter a number or =');

//     if (input == '=') {
//         break;
//     } else {
//         sum = sum + Number(input);
//     }
// }

// console.log(sum);

//                              **OBJECT**

// const car = {
//     mark: 'bmw',
//     year: 2012,
//     eng: {
//         volume: 3.5,
//         power: 150,
//     },
//     mileage: 150000,
// };

// const input = prompt('choose property');
// const hasProp = input in car;

// if (hasProp) {
//     delete car[input];
// } else {
//     car[input] = null;
// }

// console.log(car);

// const carSale = Object.assign (
//     {},
//     car,
//     {price: 6000}
// );

// carSale.mark = 'audi';

// console.log(car, carSale);

// let {
//     mark,
//     year:Y,
//     eng: {
//         volume,
//         power
//     },
//     mileage = 200000,
// } = car;
// console.log(Y)

//                              **ARRAY**

// const nums = [12,23,53,65,43];
// const input = prompt('choose num');
// const index = nums.indexOf(input);

// if (index > -1) {
//     nums.splice(index, 1);
// } else {
//     nums.unshift(input);
// }

// const arr = [];

// for (let i = 0; i < 5; i++) {
//     const input = prompt('Enter a number');
//     arr.push(input);
// }

// console.log(arr)

// const first = [10, 20];
// const second = [30, 40];

// const arr = first.concat(second); //(30, 40)
// >> [10, 20, 30, 40]

// const newArr = arr.concat();
// arr.push(20);
// >> [10, 20]

// const str = arr.join(';');
// >> '10;20;30;40'

// const arr = str.split(',');
// >> ['10', '20', '30', '40']

// arr.forEach(function (el, i) {
//   console.log(i);
// });

// arr = arr.map(function (el) {
//     let modified = el + 2;
//     return modified;
// });
// >> [12, 22, 32, 42]

// arr.find(function (el) { //arr.filtered
//     return el > 5;
// });

// let [firstNum, secondNum, ...thirdNum] = arr;
// console.log(thirdNum)

//                              **FUNCTIONS**

// function calc(num, exp) {
//     let res = 1;

//     for (let i = 1; i <= exp; i++) {
//         res = res * num;
//     }

//     return res;
// }

// **ARROW FUNCTION**
// const area = (length, width) => {
//     if ((lenght > 0) && (width > 0)) {
//         return length * width; 
//     } else {
//         return null;
//     }
// }

//**CLOSING FUNCTION**
// function outer() {
//     let count = 0;

//     return function() {
//         count++;
//         console.log('count');
//     }
// }

// const value = outer();
// value();
// value(); 

// function counter(from, to) {
//     let number = from;

//     const id = setInterval(() =>{ //setTimeout
//         console.log(number);

//         if (number == to) {
//             clearInterval(id);
//         } else {
//             number++;
//         }
//     }, 1000);

// }
// counter(4,52);

//**CALLBACK FUNCTION**
// const request = (cb) => {
//     console.log('request');

//     cb({ text: 'Error' });
    
//     setTimeout(() => {
//         console.log('response');
//         const data = { text: 'Hello' };

//         cb(null, data);
//     }, 2000);
// }

// request((err, data) => {
//     if(!err) {
//         console.log('Hello callback', data);
//     } else {
//         console.error(err);
//     }
// })

//**NEW PROMISE()**
// const request = new Promise((resolve, reject) => {
//     console.log('request');

//     setTimeout(() => {
//         console.log('response');
//         resolve();
//     }, 2000);
// });

// request.then(() => {
//     console.log('resolved');
// },
// () => {
//     console.log('rejected');
// });

//**FUNCTION CONTEXT**
// const calc = {
//     a: 0,
//     b: 0,
//     sum() {
//         console.log(this.a + this.b);
//     },
//     mul() {
//         console.log(this.a * this.b) 
//     },
//     write(a, b) {
//         this.a = a;
//         this.b = b;
//     }
// }

// calc.write(6, 5);
// calc.sum();
// calc.mul();

//**CONTEXT CHANGE**
// const user1 = { name: 'John', age: 23 };
// const user2 = { name: 'Andy', age: 25 };
// function greet(a) {
//     console.log(`Hello ${this.name}`);
//     console.log( a + this.age )
// }

// greet.call(user1, 30);
// greet.call(user2, 20);

//                              **DOM**
//**DOM ELEMENTS**
// const el = document.querySelector('.last');
// el.style.color = 'red';


// const input = prompt('change title');
// const el = document.querySelector('.title');
// el.innerHTML = `<i>${input}</i>`;


// const input = prompt('enter a message');
// const messageEl = document.createElement('p');
// messageEl.innerText = input;
// const messageBox = document.querySelector('.messages');
// messageBox.append(messageEl);
// setTimeout(removeMessage, 2000)
// function removeMessage() {
//     messageEl.remove();
// }

//**Event Listener**
// function buttonClick() {
//     const text = getInputText();
//     addElementToList(text);
// }
// function getInputText() {
//     const input = document.querySelector('.text-field');
//     return input.value;
// }
// function addElementToList(text) {
//     const listItem = document.createElement('li');
//     listItem.innerText = text; 

//     const list = document.querySelector('.list');
//     list.append(listItem);
// }

// function clearInput() {
//     const input = document.querySelector('.text-field');
//     input.value = '';
// }


// const button = document.querySelector('.button');

// button.addEventListener('click', hideText)

// function hideText() {
//     const text = document.querySelector('.text');
//     text.hidden = true;

//     const button = document.querySelector('.button')
//     button.removeEventListener('click', hideText);
//     button.addEventListener('click', showText);
// }

// function showText() {
//     const text = document.querySelector('.text');
//     text.hidden = false;

//     const button = document.querySelector('.button')
//     button.removeEventListener('click', showText);
//     button.addEventListener('click', hideText);
// }


//                              **INSTRUMENTS**


//**Date()**
// const now = new Date();

// const secInDay = 24 * 60 * 60

// const hrs = now.getHours();
// const mins = now.getMinutes();
// const sec = now.getSeconds();

// const secPass = (hrs * 3600)+(mins * 60)+sec;
// console.log(secInDay - secPass);


// const start = Date.now();

// let sum = 0;
// for (let i=1; i<=100000; i++) {
//     sum = sum + i + i;
// }

// const end = Date.now();

// console.log(end - start)


//**Formating Date() **
// const input = prompt("DD MM YYYY");
// const [day, month, year] = input.split(' ');

// const inputDate = new Date(`${year}-${month}-${day}`)


// function formatDate(date) {
//     let day = makeTwoDigit(date.getDate());
//     let month = makeTwoDigit(date.getMonth() + 1);
//     let year = makeTwoDigit(date.getFullYear());
//     let hours = makeTwoDigit(date.getHours());
//     let minutes = makeTwoDigit(date.getMinutes());

//     return `${day}-${month}-${year} ${hours}:${minutes}`;
// }

// function makeTwoDigit(value) {
//     let newValue = value;

//     if (value < 10) {
//         newValue = '0' + value;
//     } 

//     return newValue;
// }

// const date = new Date('2007-06-02T05:12');
// console.log(formatDate(date));


//**Error listener**

// try {    
//     const input = prompt('Enter tour name:');

//     const inputArr = input.split(' ');

//     if (inputArr.length != 2) {
//     throw new Error('Invalid input');
//     }
// } catch (err) {
//     alert(err.message);
// }


//**Math**

// function generateCoef(min, max) {
//     const coef = Math.random() * (max - min) + min;

//     return Math.floor(coef);
// }

// const a = generateCoef(2, 20);
// const b = generateCoef(2, 20);

// const input = prompt(`${a} * x = ${b}; x = ?`)
// const res = Math.floor(b/a);

// if (input == res) {
//     alert('Right');
// } else {
//     alert(res);
// }


//**Regular expressions**

// /abc/  in a row;
// /[abc]/ one of symbols; 
// /[^abc]/ no one;
// /[a-z]/ range;
// /\b/ word edge;
// /\B/ no word edge;
// /\d/ int;
// /\D/ no int;
// /\w/ latin letter , int or _;
// /\W/ no latin letter , int or _;
// /\s/ space symb;
// /\S/ no space symb;
// /a{3}/ 3 symb in row;
// /a{2,4}/ from 2 to 4 symb;
// /a+/ 1 and more symb;
// /a*/ 0 and more symb;
// /a?/ 0 or 1 symb;
// /./ any symb;
// Flags:
// /g search all corresponds;
// /i ignor register;
// /m multiline;

// const str = '123 abc 456';
// let regexp = /abc/;
// regexp.test(str); //true
// let regexp2 = /123/g;
// str.match(regexp2);
// str.replace(regexp2, '234');


// const email = prompt('Enter email');
// const regexp3 = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

// if (regexp3.text(email)) {
//     console.log('valid email');
// } else {
//     alert('invalid email')
// }


//**Cookies**

// document.cookie = 'user=Sam; max-age=20';
// console.log(document.cookie);


//**Browser storages**

// localStorage.setItem('username', 'john123');//sessionStorage
// const uname = localStorage.getItem('username');
// localStorage.removeItem('username');
// localStorage.clear();


// const obj = {
//     name: 'Jhon Smith',
//     number: 25
// }

// let str = JSON.stringify(obj);
// let newObj = JSON.parse(str);


// const jsonObj = localStorage.getItem('user');

// if (jsonObj) {
//     const obj = JSON.parse(jsonObj);
//     alert(`Hello ${obj.name}`);
// } else {
//     const input = prompt('Enter your name');

//     const obj = {
//         name: input
//     }
    
//     const jsonObj = JSON.stringify(obj);
//     localStorage.setItem('user', jsonObj);
// }


//**Server request**

// GET;
// POST;
// PUT;
// DELETE;


// fetch('./data.json').then(
//     (response) => {
//         // response.status
//         // response.statusText
//         // response.url
//         // response.text();
//         return response.json();
//     }
// )
// .then((data) => {
//     console.log(data);
// });


// const options = {
//     method: 'post',
//     headers: {},
//     body: ''
// }

// fetch(url, options).then(..);