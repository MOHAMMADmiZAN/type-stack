



export class Player{
public name: string
 public age: number
 private readonly country : string

 constructor(name: string, age: number) {
    this.name = name
     this.age = age
     this.country = 'Bangladesh'
 }

  public call(){
      console.log(`${this.name} is a ${this.country} age of ${this.age}`)
 }


}

