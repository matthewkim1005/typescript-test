import * as _ from 'lodash';

let lucky: number;

type Style = "bold" | "italic" | 23;

let font: Style;

font = 23;

///

interface Person {
    first: string,
    last: string,
    [key: string]: any
}

const person1: Person = {
    first: "Matthew",
    last: "Kim"
}

const person2: Person = {
    first: "Kat",
    last: "Kim",
    fast: false
}

///

function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}
//can you :void for functions that do not return values

pow(5, 10)

//Arrays

type MyList = [number?, string?, boolean?];

const arr: MyList = [];

arr.push(1);
arr.push('23');
arr.push(false)