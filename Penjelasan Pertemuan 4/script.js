// DOM Write Method
// document.write("Hello World!")

// const box = document.getElementById('box');

// box.style.padding = '24px'
// box.style.backgroundColor = 'black'
// box.style.transform = 'rotate(90deg)'

// box.innerHTML = "div <br> 1"
// box.innerText = "<br>"

// const emailField = document.getElementById('email')

// emailField.value = "example@gmail.com"

// Date and Time
// setInterval(function(){
//     const date = new Date();
//     const hour = date.getHours();
//     const minute = date.getMinutes();
//     const second = date.getSeconds();
//     console.log(`${hour}:${minute}:${second}`)
// },1000);

// setTimeout(function(){
//     console.log("Hello!")
// }, 3000)

// console.log(date);

// const person = {
//     'name' : 'Ervin',
//     'age' : 20,
//     'nim' : '2440008973',
//     'profile' : function(){
//         console.log(this.name, this.age, this.nim)
//     }
// }

// const personList = {
//     0:{
//         'name' : 'Ervin',
//         'age' : 20,
//         'nim' : '2440008973',
//         'profile' : function(){
//             console.log(this.name, this.age, this.nim)
//         }
//     },
//     1:{
//         'name' : 'Budi',
//         'age' : 21,
//         'nim' : '24403981292',
//         'profile' : function(){
//             console.log(this.name, this.age, this.nim)
//         }
//     }
// }

// person.profile();

// for(let i = 0; i < 2 ; i++){
//     personList[i].profile()
// }

const arr = [1,9,6,7,8];

console.log(arr.join('-'))
console.log(arr.pop())
console.log(arr.push(10))
console.log(arr)

console.log(arr.shift())
console.log(arr.unshift(8))
console.log(arr)

console.log(arr.slice(0, -3))
console.log(arr.splice(1, 1))
console.log(arr)

let sum = 0;
arr.forEach(function(number){
    sum += number
})
console.log(sum)

let string = "Hello, World!";

const replaceString = string.replace("World!", "w0rld?");
console.log(replaceString)

const replaceAllString = string.replaceAll()