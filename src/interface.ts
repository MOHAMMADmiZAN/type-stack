export interface ImageOption {
    weight: string,
    height: string,
    src: string,
    alt: string
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
    BD = "Bangladesh",
    IN = "Indian",
    PK = "Pakistan"
}

type CounterUp = (string | HTMLCollection)

export interface CounterUpOptions {
    c: CounterUp,
    t: number
}

type Number = ( number | bigint)

export interface objectAccumulation {
    [curr: string]: Number ;
}

export interface arrayAccumulation extends Array<string> {
}