import {Player} from "./class";
import {Age, Name} from "./hope";
let country : string;
country = 'bangladesh';

const PlayerOne = new Player('Sakib',25)
const PlayerTwo = new Player('Tamim',28)

PlayerOne.call()
PlayerTwo.call()


let h1 = document.getElementById('tag') as HTMLElement
let p = document.createElement('p') as HTMLElement

let img = document.createElement('img') as HTMLImageElement

img.style.width = "100px"
img.style.height = "100px"
img.src = "https://www.techandteen.com/wp-content/uploads/2018/08/Popy_sexy20140914093313.jpg"


p.innerHTML = `${Name} is ${Age} Years Old`
h1.after(p)
p.after(img)

h1.style.color = 'Red';





