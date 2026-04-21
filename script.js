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

function one(){
    return 1
}
function two(){
    return one()+one()
}
function three()
{
    let sum=two()+one()
    console.log(sum)
}
console.log('end')
three()

console.log('dhruv')