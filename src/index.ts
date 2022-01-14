import {Player} from "./class";
import {Age, Name} from "./hope";
import {ImageOption} from "./interface";

let PlayerOne = new Player('Sakib',25)

const PlayerTwo = new Player('Tamim',28)

PlayerOne.call()
PlayerTwo.call()


let h1 = document.getElementById('tag') as HTMLElement
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
    weight:"200px",
    height:"200px",
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    alt:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
})






p.innerHTML = `${Name} is ${Age} Years Old`
h1.after(p)
p.after(img)

p.addEventListener('click',()=>{
    setTimeout(()=>img.remove(),1000)
})

h1.style.color = 'Green';





