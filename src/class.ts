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

