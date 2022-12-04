
// Two class Bicycle and Car inherit the properties of Vehicle and have extra two instance variable name and gear. Their constructor will take the name and gear value as input. Design the class and show the status of the vehicle name, speed and gear.

import {Vehicle} from "./class";

export class Car extends Vehicle {
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


export class Bicycle extends Vehicle {
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

class Teacher {
    constructor(public name: string, public age: number) {
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class CSETeacher extends Teacher {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
    }
}

const teacher = new CSETeacher("Sakib", 35, "CSE");
teacher.print();
