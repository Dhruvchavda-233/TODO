// let btn=document.querySelector("button")
// let ul=document.querySelector("ul") 
// let input=document.querySelector("input")

// btn.addEventListener("click",function(){
//     let li=document.createElement("li")
//     li.innerText=input.value
//     ul.appendChild(li)
//     let dltbtn=document.createElement('button')
//     dltbtn.innerText='delete'
//     dltbtn.classList.add('delet')
//     li.appendChild(dltbtn)
    
    
//     let detbtns=document.querySelectorAll('.main')
//     for (dee of detbtns) {
//         dee.addEventListener('click',function(){
//             let par=this.parentElement
//             //console.dir(par)
//             par.remove()
//         })
//         input.value=""
//     }
// })


// callstack
// function hello()
// {
//     console.log("hello")
// }
// function demo(){
//     console.log('demo')
//     hello()

// }
// console.log('hii how are you')
// demo()
// console.log('okay bye')

//Example 

// function one(){
//     return 1
// }
// function two(){
//     return one()+one()
// }
// function three()
// {
//     let sum=two()+one()
//     console.log(sum)
// }
// console.log('end')
// three() 
//  setTimeout(function() 
//   {
//     console.log('hello')
//  }, 2000);

//  console.log('hii how are you')
//   setTimeout(function() 
//   {
//     console.log('hello1')
//  }, 2000);


// let h1 = document.querySelector('h1');

// function changeColor(color, delay, callback) {
// setTimeout(() => {
// h1.style.color = color;
// if (callback) callback();
// }, delay);
// }

// changeColor('red', 2000, () => {
// changeColor('green', 2000, () => {
// changeColor('yellow', 2000, () => {
// changeColor('blue', 2000);
// })
// })
// })
    

// let h1 = document.querySelector('h1');

// function changerang(color, delay, callback) {
// setTimeout(() => {
// h1.style.color = color;
// if (callback) callback();
// }, delay);
// }

// changerang('red', 2000, () => {
// changerang('green', 2000, () => {
// changerang('yellow', 2000, () => {
// changerang('blue', 2000);
// })
// })
// })

// let h1 = document.querySelector('h1');

// function changerang(color, delay, callback) {
// setTimeout(() => {
// h1.style.color = color;
// if (callback) callback();
// }, delay);
// }

// changerang('red', 2000, () => {
// changerang('green', 2000, () => {
// changerang('yellow', 2000, () => {
// changerang('blue', 2000);
// })
// })
// })
// let h1 = document.querySelector('h1');

// function changerang(color, delay, callback) {
// setTimeout(() => {
// h1.style.color = color;
// if (callback) callback();
// }, delay);
// }

// changerang('red', 2000, () => {
// changerang('green', 2000, () => {
// changerang('yellow', 2000, () => {
// changerang('blue', 2000);
// })
// })
// })
    
    let h1 = document.querySelector('h1');

function changerang(color, delay, callback) {
setTimeout(() => {
h1.style.color = color;
if (callback) callback();
}, delay);
}

changerang('red', 2000, () => {
changerang('green', 2000, () => {
changerang('yellow', 2000, () => {
changerang('blue', 2000);
})
})
})
    
