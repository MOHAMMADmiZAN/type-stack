import {Player} from "./class";
import {Age, Name} from "./hope";
import {ImageOption} from "./interface";

let PlayerOne = new Player('Sakib',25)

const PlayerTwo = new Player('Tamim',28)

PlayerOne.call()
PlayerTwo.call()



let h1 = document.getElementsByClassName('h1')

let p = document.createElement('p')


function image(options:ImageOption) {
    const imgVariable = document.createElement('img')
    imgVariable.style.width =options.weight
    imgVariable.style.height =options.height
    imgVariable.src =options.src
    imgVariable.alt = options.alt

    return imgVariable

}
let img = image({
    weight:"600px",
    height:"300px",
    src: "https://miro.medium.com/max/1200/0*RbmfNyhuBb8G3LWh.png",
    alt:"https://miro.medium.com/max/1200/0*RbmfNyhuBb8G3LWh.png"
})

// counter up plugin
let counterUp : Function

counterUp = (c:HTMLCollection,t:number) => {



    for ( let v of c){
      let n = parseInt(v.innerHTML)
        let i = 0
        setInterval(()=>{
            if (i<=n){
            v.innerHTML = i.toString()
                i++

        }
        },t)
   }
}

counterUp(h1,1000)



// p.innerHTML =
console.log(h1)
p.after(img)

p.addEventListener('click',()=>{
    setTimeout(()=>img.remove(),1000)
})









