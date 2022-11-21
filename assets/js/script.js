// 1
// let timeCounter = 0;
// let interval = setInterval(function () {
//   timeCounter += 1;
//   if (timeCounter > 3) {
//     clearInterval(interval);
//   }
// }, 1000);
// window.addEventListener("DOMContentLoaded", interval);
// function func() {
//   if (timeCounter >= 3) {
//     window.scrollTo({
//       top: 500
//     })
//   }
// }
// 2
// function func() {
//   if (window.scrollY > 0) {
//     alert("Have");
//   } else {
//     alert("Dont have");
//   }
// }
// 3
// function func() {
//   let allInputs = document.getElementsByTagName("input");
//   let result = 0;
//   for (input of allInputs) {
//     result += parseInt(input.value);
//   }
//   alert(result);
// }
// 4
// function func() {
//   let obj = {
//     1: ["1.1", "1.2", "1.3"],
//     2: ["2.1", "2.2", "2.3"],
//     3: ["3.1", "3.2", "3.3"],
//   };
//   let select = document.getElementById("select");
//   let countryIndex = select.selectedIndex;
//   let newSelect = document.createElement("select");
//   for (city of obj[select[countryIndex].text]) {
//     let option = document.createElement("option");
//     option.text = city;
//     newSelect.appendChild(option);
//   }
//   document.body.appendChild(newSelect);
// }
// 5
// function func() {
//   let li = document.createElement("li");
//   let ol = document.getElementById("ol");
//   li.innerHTML = 'Пункт';
//   ol.appendChild(li)
// }
// 6
// function func() {
//   let a = document.getElementById("a");
//   a.innerHTML = a.innerHTML + `(${a.href})`;
// }
// 7
// function func(p) {
//   p.innerHTML = p.innerHTML + " " + parseInt(p.innerHTML) ** 2
// }
// 8
// function func(p) {
//   let counter = p.innerHTML;
//   p.innerHTML = ++counter;
// }
// 9
// let ul = document.getElementById("ul");
// ul.addEventListener("click", function func(event) {
//   let li = event.target.closest("li");
//   if (li) {
//     li.innerHTML += "!";
//   }
// });
// let but = document.getElementById("button");
// but.addEventListener("click", function () {
//   let liElem = document.createElement("li");
//   liElem.innerHTML = "пункт";
//   ul.appendChild(liElem);
// });
// 10
// let btn = document.getElementById("button");
// let table = document.getElementById("table");
// btn.addEventListener("click", function (event) {
//   let tr = document.createElement("tr");
//   let name = document.getElementById("name");
//   let tdName = document.createElement("td");
//   tdName.innerHTML = name.value;
//   let surname = document.getElementById("surname");
//   let tdSurname = document.createElement("td");
//   tdSurname.innerHTML = surname.value;
//   tr.appendChild(tdName);
//   tr.appendChild(tdSurname);
//   table.appendChild(tr);
//   event.preventDefault();
// });
// table.addEventListener("click", function (event) {
//   let newValue = prompt("Исправить " + event.target.innerHTML, "");
//   event.target.innerHTML = newValue;
// });
