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