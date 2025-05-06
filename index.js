
// 9. В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// if (minuteValue >45){
// console.log("fourth")
// }
// else if (minuteValue >30){
// console.log("third")
// }
// else if (minuteValue >15 ){
// console.log("second")
// }
// else {
// console.log("first")
// }
// console.log(minuteValue)




// Якщо рівень доступу введений неправильно → alert("Unknown clearance level").

// Якщо логін — "guest":

// Вивести alert("Limited guest access. Welcome.").
// Якщо натиснуто Cancel або нічого не введено — alert("Login cancelled.").

// В усіх інших випадках — alert("Unknown user. Access denied.").
// const login=prompt("enter login")
// if (login==="agen"){
//     const level=prompt("enter level")
//            if (level==="low"){
//             alert("Access denied: clearance too low")}
//           else if (level==="medium"|| level==="high"){
//                const password=prompt("enter password")
//                     if (password==="medpass"|| password==="hipass" ){
//                         const mess=prompt("enter message")
//                         if (mess==="0000"){
//                             alert("Access granted! Welcome.")   }
//                     }

//                     else {alert("2FA failed. Access denied.")}
//                    }
//                     else { alert("Wrong password.")}
//             }
//            else if (level==="ultra" ){
//                let passul1=prompt("enter first part password")
//                 let passul2=prompt("enter second part password")
//                 if (passul1 === "yourFirstPart" && passul2 === "yourSecondPart") {
//                   let ultra= prompt("enter confirm")
//                    if (ultra=== "CONFIRM"){
//                     alert("Top-secret access granted.")     
//                    }
//                 }
//                    else if {alert("Confirmation failed.") }

//                 }
//                  else (passul1 !== "yourFirstPart" && passul2 !== "yourSecondPart") {
//                     alert("Password sequence invalid.")  



//             } 
//             else {alert("Unknown clearance level") }

// else if (login==="guest"){
//     alert("Limited guest access. Welcome.")
// }
// else {
//     alert("Unknown user. Access denied.")
// }


// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль '<число> - fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль '<число> - buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль '<число> - fizzbuzz'.
// function fizzBuzz(num) {
//     for (let i = 1; i < num; i += 1) {
//         if ((i % 3 === 0) && (i % 5 === 0)) {
//             console.log(`${i}- fizzbuzz`);
//         }

//         else if (i % 3 === 0) {
//             console.log(`${i}- fizz`);
//         }
//         else if (i % 5 === 0) {
//             console.log(`${i}- buzz`);
//         }

//         else {
//             console.log(`${i}`);
//         }
//     }
// }
// fizzBuzz(200);   
// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"
//   const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);
// const fetchUserFromServer = (username) => {
//     return new Promise((resolve, reject) => {
// 		// ...
//   });};
//   const userPromise = fetchUserFromServer("Mango"); // 
    
  
//   fetchUserFromServer(
//       "Mango", 
//       user => console.log(user), 
//       error => console.error(error)
//   );
  
  
//   const makePromise = ({ value, delay, shouldResolve = true }) => {
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//                   if(shouldResolve) {
//                       resolve(value)
//                   } else {
//                       reject(value)
//                   }
//               }, delay);
//     });
//   };
  
//   makePromise({ value: "A", delay: 1000 })
//       .then(value => console.log(value)) // "A"
//       .catch(error => console.log(error));
  
//   makePromise({ value: "B", delay: 100 })
//       .then(value => console.log(value)) // "B"
//       .catch(error => console.log(error));
  
//   makePromise({ value: "C", delay: 2000, shouldResolve: false })
//       .then(value => console.log(value)) 
//       .catch(error => console.log(error)); // "C"
  
// const p1= new Promise((resolve,reject)=>{
    //    setTimeout(()=>{
    //     const random= Math.random();
    //     if (random>0.5) {
    //         resolve("can eat!");
    //     }else{
    //         reject("come for money");
    //     }
    //   });
    // })
    //   p1.then(onFull=>{
    //     console.log("nyam")
    //   })
    //   .catch(onRej=>{
    //     console.log("money")
    //   })
    // const promise= new Promise((resolve,reject)=>{
    //     resolve(10);})
    // promise.then(()=>{})
    // .then(()=>{})
    // .then(()=>{})
    // .catch(()=>{})
    
// Promise.reject()
// Promise.resolve()
// // Promise.all-чекає всі,якщо не має помилок.результат масив всіх промісів,або першу помилку
// Promise.allSettled повертає масив зі статусом виконання,і виконані і не виконані
// Promise.rase повертає перший проміс,незалежно від виконання
const value = +prompt("Give a value");

function checkValue(value) {
  return new Promise((res, rej) => {
    if (Number.isNaN(value)) {
      rej("Error: Not a number");
    } else if (value % 2 === 0) {
      setTimeout(() => {
        res("even");
      }, 1000);
    } else {
      setTimeout(() => {
        res("odd");
      }, 2000);
    }
  });
}

checkValue(value)
  .then(result => console.log("Result:", result))
  .catch(error => console.error("Error:", error))
