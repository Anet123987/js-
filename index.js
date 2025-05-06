
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
function fizzBuzz(num) {
    for (let i = 1; i < num; i += 1) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(`${i}- fizzbuzz`);
        }

        else if (i % 3 === 0) {
            console.log(`${i}- fizz`);
        }
        else if (i % 5 === 0) {
            console.log(`${i}- buzz`);
        }

        else {
            console.log(`${i}`);
        }
    }
}
fizzBuzz(200);   
