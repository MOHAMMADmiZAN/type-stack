import {Player} from "./class";

import {arrayAccumulation, cName, CounterUpOptions, objectAccumulation} from "./interface";

const PlayerOne = new Player('Sachin', 40,cName.IN)

const PlayerTwo = new Player('Tamim', 28)
const PlayerThree = new Player('Afradi',40,cName.PK)

PlayerOne.call()
PlayerTwo.call()
PlayerThree.call()


// counter-up plugin made in Typescript
let counterUp: Function
// recursive way
counterUp = (options: CounterUpOptions) => {
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

counterUp({c: 'h1', t: 1000})
counterUp({c: ps, t: 500})



let btn = document.getElementById('btn')

function getRandomColor() {
    const hexLetters = 'abcdef1234567890';
    let hex = '#';
    for (let i = 1; i <= 6; i++) {
        hex += hexLetters[Math.floor(Math.random() * hexLetters.length)];
    }
    return hex;
}
// recursive way
function increment() {


    let box = document.getElementById('box_c')
    let width = box.style.width.split('%')
    if (parseInt(width[0]) < 100) {
        setTimeout(() => {
            box.style.width = String(parseInt(width[0]) + 5) + '%'
            box.innerHTML = String(parseInt(width[0]) + 5) + '%'
            box.style.background = getRandomColor()
            return increment()
        }, 300)
    } else {
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
        reset.addEventListener('click', () => {
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
    'a': "f",
    'b': "c",
    'c': "d",
    'd': "a",
    'e': "l",
}


// objet value iterate //

function objectValue(v: object, t?: number) {
    let val = Object.entries(v)
    let len = val.length
    if (len > 0) {
        setTimeout(() => {
            console.log(val[0][1])
            val = val.slice(1)
            v = Object.fromEntries(val)
            return objectValue(v, t)
        }, t)
    }

}

// objectValue(obj, 1000)

// object index iterate //
function objectIndex(v: object, t?: number) {
    let val = Object.entries(v)
    let len = val.length

    if (len > 0) {
        setTimeout(() => {
            console.log(val[0][0])
            val = val.slice(1)
            v = Object.fromEntries(val)
            return objectIndex(v, t)
        }, t)
    }

}
// objectIndex(obj,1000)

const text:string = `Hello World`
 let textArray : string[] = text.split('')



console.log( typeof textArray)
for (let [v,i] of text){
    const p = document.createElement('p')
    p.setAttribute('id', v+Math.floor(Math.random()*1000).toString())
   p.innerHTML = v
    p.style.cssText = `background-color:${getRandomColor()};
    color:${getRandomColor()}
    `
    btn.before(p)

}
 const review :number[]= [5,5,5,5,5,5,5,4,3,2,5,6,5]



 let sum = review.reduce(function (acc,curr,index) {
     acc += curr
     return acc
 })
console.log(sum)
let avg = review.reduce(function (acc,curr,) {
     acc+=curr/review.length
    return acc
},0)
console.log(avg)



let names:string[] = [
    "java",
    "javascript",
    "java",
    "php",
    "php",
    "php"
]
const acc: objectAccumulation = {};
const setArray:arrayAccumulation = []

let rate = names.reduce(function (acc,curr) {
    acc[curr]?acc[curr]++:acc[curr] = 1
    return acc
 },acc)
console.log(rate)

let unique  = names.reduce(function (acc,curr){
    if (!acc.includes(curr)){
        acc.push(curr)
    }
    return acc
},setArray)

console.log(unique) /// set unique
// make object













