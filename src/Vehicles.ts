
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

