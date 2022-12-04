import {cName, Person} from "./interface";


export   class Player implements Person<number>{


    constructor(public name: string, public age: number, private readonly country:cName = cName.BD) {

    }
    getCountry(){
        return this.country ;

}

  public call(){
        console.log(`${this.name} is a  ${this.age} Years Old From ${this.country} National Cricket Team `)
 }

}




//Create a class Vehicle having instance variables speed, and two methods applybreak() and speedup(). Create a class Car which inherits the Vehicle class. The Car class has an instance variable gear. The class has two methods called changeGear() and printStates(). The changeGear() sets the value of gear to the passed argument. The printStates() prints the current state of the car. The printStates() method to be called from main method. The constructor of Vehicle takes an integer values and assign it to speed value. Calling applybreak() will decrease the speed which is applied and speedup() will increase the speed.

export class Vehicle {
    speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }

    applyBreak() {
        this.speed -= 5;
    }

    speedUp() {
        this.speed += 5;
    }
}
// Two class Bicycle and Car inherit the properties of Vehicle and have extra two instance variable name and gear. Their constructor will take the name and gear value as input. Design the class and show the status of the vehicle name, speed and gear.

class Car extends Vehicle {
    gear: number;
    constructor(speed: number, public name: string, gear: number) {
        super(speed);
        this.gear = gear;
    }

    changeGear() {
        this.gear++;
    }

    printStatus() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Gear: ${this.gear}`);
    }
}

// Create a Teacher class and a subclass “CSETeacher”. Call Functions of “Teacher” class using object of “CSETeacher” class.

export class Teacher {
    constructor(public name: string, public age: number, public subject: string) {}

    print() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}`);
    }
}


