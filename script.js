"use strict"
// // let btn = document.querySelector(".btn");
// // btn.addEventListener("click", function () {
// //     document.body.style.background = "gray"
// // });
// // let btn2 = document.querySelector(".btn2");
// // btn2.addEventListener("click", function () {
// //     document.body.style.background = "white"
// // });
// // const users = [
// //     {name: "Администратор", login: "admin", password: "admin"},
// //     {name: "Иван", login: "ivan", password: "1234"}
// // ];
// //
// // let UserLogin = prompt("Введите ваш логин"),
// //     UserPassword = prompt("Введите ваш пароль");
// //
// // for (let user of users){
// //     // console.log(user.login);
// //     if (UserLogin === user.login){
// //         if (UserPassword === user.password){
// //             alert("Успешный код");
// //             break
// //         }
// //     }
// // }
// // const translates = [
// //     {ru:"яблоко", en:"apple"},
// //     {ru:"груша", en:"pear"},
// //     {ru:"апельсин", en:"orange"},
// // ];
// //
// // let UserWord = prompt("Введите ваше слово");
// //
// // for (let i = 0; i <= translates.length; i++){
// //     if (UserWord === translates[i].ru){
// //         alert(translates[i].en)
// //     }
// // }
// // for (let i = 0; i <= translates.length; i++){
// //     if (UserWord === translates[i].en){
// //         alert(translates[i].ru)
// //     }
// // }
// // let UserStr = prompt("Введите что-то"),
// //     lowerCount = 0,
// //     upperCount = 0;
// //
// //
// // for (let t of UserStr){
// //     // console.log(t);
// //     if (t === t.toUpperCase()){
// //         upperCount++;
// //     } else {
// //         lowerCount++;
// //     }
// // }
// //
// // alert(`В строке: ${UserStr} находится:\n Заглвных букв: ${upperCount}:\n Строчных букв ${lowerCount}`)
// //
// //
// // let numbers = [];
// //
// // while (true){
// //     let number = prompt("Введите число для завершения нажмите 0");
// //
// //     numbers.push(number);
// //
// //     if (number === 0){
// //         break;
// //     }
// //     alert(`Введеные числа: ` + numbers)
// //
// //     let sum = 0;
// //     for (let i = 0; i < numbers.length; i++){
// //         sum += numbers[i];
// //     }
// // }
// // function helloUser() {
// //     const username = prompt("Введите своё имя:");
// //     const time = +prompt("Введите текущие время:");
// //
// //     if (time <= 0 || time > 6) {
// //         return `Доброй ночи, ${username}!`;
// //     } else if (time > 7 || time < 10) {
// //         return `Доброе утро, ${username}!`;
// //     } else if (time >= 11 || time < 18) {
// //         return `Доброе день, ${username}!`;
// //     }
// //     else if (time >= 19 || time < 23) {
// //         return `Добрый вечер, ${username}!`;
// //     }
// //     else {
// //         return `Введенно не корректное значение!`
// //     }
// // }
// //
// // console.log(helloUser());
// // let randomNumbers = [];
// // // let numbers = [];
// // //
// // for (let i = 0; i < 20; i++){
// //     randomNumbers.push(Math.floor(Math.random() * 20))
// // }
// // console.log(randomNumbers)
// // for (let num of randomNumbers){
// //     if (num >= 5 && num <= 12){
// //         numbers.push(num)
// //     }
// // }
// // console.log(numbers)
// //
// //
// // let filter = randomNumbers.filter(num => num >= 5 && num <= 12);
// //
// // console.log(filter)
// //
// //
// // let sort1 = randomNumbers.slice().sort((a, b) => a - b);
// // console.log(sort1)
// //
// // let sort2 = randomNumbers.slice().sort((a, b) => b - a);
// // console.log(sort2)
// //
// // for (let i = 0; i < randomNumbers.length; i++){
// //     randomNumbers[i] = randomNumbers[i] * 2;
// // }
// // console.log(randomNumbers)
// //
// // let umnoj = randomNumbers.map(num => num * 2);
// //
// // console.log(umnoj)
// //
// // let summa = 0;
// // for (let i = 0; i < randomNumbers.length; i++){
// //     summa += randomNumbers[i];
// // }
// // console.log(summa)
// //
// // let sum = randomNumbers.reduce((res, current) => res + current, 0)
// //
// // console.log(sum)
// //
// //
// // let arr = [1,2,[3,4,5],[6,7],8,[9]];
// //
// // let flattened = arr.reduce(function(a, b) {
// //     return a.concat(b);
// // });
// // console.log(JSON.stringify(flattened));
//
// // let p = document.getElementById("p");
// //
// // console.log(p.innerHTML);
//
// const newP = document.createElement('p');
// newP.innerText = "Новый параграф";
//
// document.body.appendChild(newP);
//
// const cloneP = newP.cloneNode(true);
// cloneP.innerText = "Копия параграфа";
//
// const h1 = document.querySelector("body h1")
//
// document.body.insertBefore(cloneP, h1);
//
// const oldP = document.getElementById("old-p")
// document.body.removeChild(oldP)
//
// const newH1 = document.createElement("h1")
// newH1.innerText = "Новый документ"
//
// document.body.replaceChild(newH1, h1)
//
// const docTitle = document.querySelector("head title");
//
// docTitle.innerText = "Новое название!"
//
//
//
//
//
// cloneP.setAttribute('id', 'clone_p');
// cloneP.setAttribute('class', 'main');
// newH1.classList.add("active")
//
// document.body.style.background = 'gray';

const img = document.createElement("img");

img.src = './3.jpg'

document.body.appendChild(img);

const desc = document.createElement("span");
desc.innerText = "Это дельфин";

document.body.appendChild(desc);

document.body.appendChild(desc);

let a = document.querySelector(#a),
    b = document.getElementById(b),
    result = document.getElementsByClassName('result');

a.addEventListener("change", () => {
   result[0].innerText = (a.value) + parseInt(b.value);

});
b.addEventListener("change", () => {
    result[0].innerText = (a.value) + parseInt(b.value);

});
