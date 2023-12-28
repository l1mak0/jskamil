"use strict"
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//     document.body.style.background = "gray"
// });
// let btn2 = document.querySelector(".btn2");
// btn2.addEventListener("click", function () {
//     document.body.style.background = "white"
// });


// const users = [
//     {name: "Администратор", login: "admin", password: "admin"},
//     {name: "Иван", login: "ivan", password: "1234"}
// ];
//
// let UserLogin = prompt("Введите ваш логин"),
//     UserPassword = prompt("Введите ваш пароль");
//
// for (let user of users){
//     // console.log(user.login);
//     if (UserLogin === user.login){
//         if (UserPassword === user.password){
//             alert("Успешный код");
//             break
//         }
//     }
// }

// const translates = [
//     {ru:"яблоко", en:"apple"},
//     {ru:"груша", en:"pear"},
//     {ru:"апельсин", en:"orange"},
// ];
//
// let UserWord = prompt("Введите ваше слово");
//
// for (let i = 0; i <= translates.length; i++){
//     if (UserWord === translates[i].ru){
//         alert(translates[i].en)
//     }
// }
// for (let i = 0; i <= translates.length; i++){
//     if (UserWord === translates[i].en){
//         alert(translates[i].ru)
//     }
// }


// let UserStr = prompt("Введите что-то"),
//     lowerCount = 0,
//     upperCount = 0;
//
//
// for (let t of UserStr){
//     // console.log(t);
//     if (t === t.toUpperCase()){
//         upperCount++;
//     } else {
//         lowerCount++;
//     }
// }
//
// alert(`В строке: ${UserStr} находится:\n Заглвных букв: ${upperCount}:\n Строчных букв ${lowerCount}`)




let numbers = [];

while (true){
    let number = prompt("Введите число для завершения нажмите 0");

    numbers.push(number);

    if (number === 0){
        break;
    }
    alert(`Введеные числа: ` + numbers)

    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
}
