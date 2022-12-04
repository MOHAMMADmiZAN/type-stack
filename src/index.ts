import {Player} from "./class";
import {Bicycle, Car} from "./Vehicles";

const sakib = new Player("Sakib", 35);
sakib.call();

// generics
 const  objTemp =  <T>(obj: T)=>{
    // genarate random id
    const id = Math.random().toString(16);
    return {
        id,
        ...obj
    }
}

const obj2 = objTemp<string>("Hello World");
const obj3 = objTemp<number>(1);

console.log(obj2);

 // create  user interface and get users from api
 interface  User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const getUsers = async (): Promise<User[]> => {
    const response =  await  fetch("https://jsonplaceholder.typicode.com/users");
    return  await  response.json();
}

// create a function for get users and print them

    const users =  await  getUsers();
    users.forEach(user => {
        console.log(user.name);
    }
    )


 // create new car

let bmw = new Car(100, "BMW", 5);
let duronto = new Bicycle(100, "Duronto", 5);

bmw.printStatus();
duronto.printStatus();






