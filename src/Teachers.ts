import {Teacher} from "./class";


export class CSETeacher extends Teacher {
    constructor(name: string, age: number, public subject: string) {
        super(name, age,subject);
    }
}

