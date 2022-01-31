 export interface ImageOption {
    weight:string,
    height:string,
    src:string,
    alt:string
}
// interface with Generics
export interface Person<T extends number> {
    name: string
    age: T
    call(): void
    getCountry(): string
}
// enum
 export enum cName {
    BD = "Bangladesh"
}
 type CounterUp=(string | HTMLCollection)
 export interface CounterUpOptions{
    c:CounterUp,
    t:number
}

type StringNumber = string | number |bigint
type str = string
 export interface accumulation {
     [curr: str]: StringNumber;
 }