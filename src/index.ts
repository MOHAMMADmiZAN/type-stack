import {Player} from "./class";

import {arrayAccumulation, cName, CounterUpOptions, objectAccumulation} from "./interface";

const PlayerOne = new Player('Sachin', 40, cName.IN)

const PlayerTwo = new Player('Tamim', 28)
const PlayerThree = new Player('Afradi', 40, cName.PK)

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
        }, 100)
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
    if (val.length > 0) {
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
    if (val.length > 0) {
        setTimeout(() => {
            console.log(val[0][0])
            val = val.slice(1)
            v = Object.fromEntries(val)
            return objectIndex(v, t)
        }, t)
    }

}

// objectIndex(obj,1000)

const text: string = `Hello World`
let textArray: string[] = Array.from(text)

let t = textArray.filter(v => v != text.charAt(5))

console.log(`result:`, t)
for (let [v, i] of text) {
    const p = document.createElement('p')
    p.setAttribute('id', v + Math.floor(Math.random() * 1000).toString())
    p.innerHTML = v
    p.style.cssText = `background-color:${getRandomColor()};
    color:${getRandomColor()}
    `
    btn.before(p)

}
const review: number[] = [5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5]

const map = new Map<string, string>(Object.entries(obj))


console.log(map)

let sum = review.reduce(function (acc, curr) {
    acc += curr
    return acc
})
console.log(sum)
let avg = review.reduce(function (acc, curr,) {
    acc += curr / review.length
    return acc
}, 0)
console.log(avg)


let names: string[] = [
    "java",
    "javascript",
    "java",
    "php",
    "php",
    "php"
]
const acc: objectAccumulation = {};
const setArray: arrayAccumulation = []

let rate = names.reduce(function (acc, curr) {
    acc[curr] ? acc[curr]++ : acc[curr] = 1
    return acc
}, acc)
console.log(rate)

let unique = names.reduce(function (acc, curr) {
    if (!acc.includes(curr)) {
        acc.push(curr)
    }
    return acc
}, setArray)

console.log(unique)


// My Reduce Function //
const myReducer = (arr: any[], callback: (acc:any,curr:any,i:number,arr:any[])=>any, ac?: any) => {
    let acc = ac
    let start = 0
    if (!acc) {
        acc = arr[0]
        start = 1
    }
    for (let i = start; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
    }

    return acc


}
let p = myReducer(review, function (acc, curr) {

    return acc += curr

})
console.log(p)

/*
 * @forEach
 */
function myForeach(arr: any[],callback:(v:string,i:number,arr:any[])=>(string|number|void)) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i,arr)
    }

}



let u = myReducer(names,function (acc:any, curr:any) {
    if (!acc.includes(curr)) {
        acc.push(curr)
    }

    return acc

},setArray)

console.log(u)


 //  map
 function myMap(arr: any[], cb:(v:string,i:number,arr:any[])=>(any|void)) {
    let a = []
     for (let i = 0; i <arr.length ; i++) {
        a.push( cb(arr[i],i,arr))
     }
     return a
 }

let o = myMap(names,function (v,i) {
    return new Map<string, (string | number)>([["id", i], ["value", v]])
 })


console.dir(o)

let opj = new Map()

console.dir(opj)
// find average rating in 5 star
function findAverageRating(arr: number[]) {
    let sum = arr.reduce(function (acc, curr) {
        acc += curr
        return acc
    }, 0)
    return sum / arr.length
}


// my array red function
function myReduce(arr: number[], cb: (acc: number, curr: number, i: number, arr: number[]) => number, ac?: number) {
    let acc = ac
    let start = 0
    if (!acc) {
        acc = arr[0]
        start = 1
    }
    for (let i = start; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr)
    }
    return acc
}

let r = findAverageRating(review)
console.log(r.toPrecision(2))












