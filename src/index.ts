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
     let box = document.getElementById('box_c')
     let width= box.style.width.split('%')
     if (parseInt(width[0])<100){
        setTimeout(() =>{
            box.style.width = String(parseInt(width[0])+5)+'%'
            return increment()
        },1000)
     }else{
         let reset = document.createElement('button')
         reset.style.cssText = `
         padding: 10px 15px;
         margin-left: 10px;
         background-color: gray;
         outline: none;
         border-radius: 5px;
         border:none;
         cursor: pointer;
         `
         reset.innerText = "Reset"
         btn.after(reset)
         reset.addEventListener('click',()=>{
             box.style.width = '5%'
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









