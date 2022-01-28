import {Player} from "./class";

import {CounterUpOptions} from "./interface";

let PlayerOne = new Player('Sakib', 25)

const PlayerTwo = new Player('Tamim', 28)

PlayerOne.call()
PlayerTwo.call()


// counter-up plugin made in Typescript
let counterUp: Function
// recursive way
counterUp = (options:CounterUpOptions) => {
    try {
        if (typeof options.c == 'string') {
            options.c = document.getElementsByClassName(options.c)
        }
        for (let v of options.c) {
            let n = parseInt(v.innerHTML)
            let i = 0
            function cal() {
                if (i <= n) {
                    setTimeout(() => {
                        v.innerHTML = i.toString()
                        i++
                        return cal()
                    }, options.t)
                }
            }
            cal()

        }

    } catch (e) {
        console.log(new Error('Error in counter Function'))
    }
}
let ps = document.getElementsByClassName('ho')

counterUp({c:'h1',t:1000})
counterUp({c:ps,t:500})



let btn = document.getElementById('btn')


 // recursive way
 function increment() {
     function getRandomColor() {
         const hexLetters = 'abcdef1234567890';
         let hex = '#';
         for (let i = 1; i <= 6; i++) {
             hex += hexLetters[Math.floor(Math.random() * hexLetters.length)];
         }
         return hex;
     }
     let box = document.getElementById('box_c')
     let width= box.style.width.split('%')
     if (parseInt(width[0])<100){
        setTimeout(() =>{
            box.style.width = String(parseInt(width[0])+5)+'%'
            box.innerHTML= String(parseInt(width[0])+5)+'%'
            box.style.background = getRandomColor()
            return increment()
        },300)
     }else{
         let reset = document.createElement('button')
         reset.style.cssText = `
         padding: 10px 15px;
         margin-left: 10px;
         outline: none;
         border-radius: 5px;
         border:none;
         cursor: pointer;
         border: 1px solid darkred;
         color: red;
         `
         reset.innerText = "Reset"
         btn.after(reset)
         reset.addEventListener('click',()=>{
             box.style.width = '5%'
             box.innerHTML = '5%'
             btn.removeAttribute('disabled',)
             reset.remove()

         })

     }


 }


btn.addEventListener('click', function (e) {
    e.preventDefault()
    increment()
    btn.setAttribute('disabled', 'true')
})
console.log(window.location.origin)
 let obj = {
    1:"f",
    2:"c",
    5:"d",
    3:"a",
    7:"l",
 }



// objet value iterate //

function objectValue(v:object,t?:number) {
    let val = Object.entries(v)
    let len = val.length
    if (len >0){
        setTimeout(() => {
            console.log(val[0][1])
              val = val.slice(1)
            v = Object.fromEntries(val)
            return objectValue(v,t)
        },t)
    }

}
objectValue(obj,1000)
 // object index iterate //
function objectIndex(v:object,t?:number) {
    let val = Object.entries(v)
    let len = val.length
    if (len >0){
        setTimeout(() => {
            console.log(val[0][0])
            val = val.slice(1)
            v = Object.fromEntries(val)
            return objectIndex(v,t)
        },t)
    }

}
objectIndex(obj,1000)


 let arr: (string|number)[] = [2,3,4,9]
 let obj2:object = {}
let str:string = "bangladesh"
let num :number = 12

function isIterable(v:any) {
    if (v[Symbol.iterator]){
        console.log(`congratulation You are iterable`)
    }
    else{
        console.log(`Sorry You are  Not iterable`)
    }
}

isIterable(arr)
isIterable(obj2)
isIterable(str)
isIterable(num)














