import {Player} from "./class";

import axios from "axios";
import {v4 as uuidv4} from "uuid";
import {arrayAccumulation, cName, CounterUpOptions, mapCallBack, objectAccumulation,arrayOfObject} from "./interface";

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

function getRandomColor(): string {
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
const review: number[] = [5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 5, 5, 5]

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

/*
* My Reduce Function
*/
const myReducer = (arr: any[], callback: (acc: any, curr: any, i: number, arr: any[]) => any, ac?: any) => {
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
function myForeach(arr: any[], callback: (v: string, i: number, arr: any[]) => (string | number | void)) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }

}


let u = myReducer(names, function (acc: any, curr: any) {
    if (!acc.includes(curr)) {
        acc.push(curr)
    }

    return acc

}, setArray)

console.log(u)


//  map
function myMap(arr: any[], callback: mapCallBack) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        a.push(callback(arr[i], i, arr))
    }
    return a
}

let o = myMap(names, function (v, i) {
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


// my array reduce function
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


async function getData() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data.reduce(function (acc: { [x: string]: any; }, curr: { id: string }) {
        acc[curr.id] = {...curr}
        return acc
    }, {})

}

getData().then(data => {
    console.log(data)
}).catch(err => console.log(err.message))

let img = document.createElement('img')
img.setAttribute('src', 'https://pbs.twimg.com/profile_images/1458455027241078798/RcQi30pL_400x400.jpg')
img.setAttribute('alt', 'nora')
img.style.cssText = `
   border:1px solid black;
    display:block;
    margin-top: 5px;
    `
btn.after(img)

let  input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'enter Number')
input.style.cssText=`
border:1px solid black;
display:block;
border-radius:5px;
margin-top:5px;
width:300px;
padding:5px;
`
img.after(input)
 let btn2 = document.createElement('button')
btn2.innerText = 'check'
btn2.style.cssText = `
    border:none;
    display:block;
    margin-top:5px;
    width:100px;
    height:30px;
    `


btn2.addEventListener('click', function () {
    let num = Number(input.value)
    if (input.value && !isNaN(num)) {
        if (num % 2 === 0) {
            confirm('even')
        } else {
            confirm('odd')
        }
    }else {
        alert('please enter a Valid Number')
    }
})
input.after(btn2)
input.addEventListener('dblclick', function () {
    input.value = ''
})

let us : arrayOfObject = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

let arrOfObj:arrayOfObject = []
 let pk = us.reduce(function (acc,curr) {

     if(curr.id !== 2){
         curr['time'] = new Date().getTime()
         delete curr['id'].username
         acc.push(curr)
     }
     return acc
 },arrOfObj)

 console.log(pk)




