
// primitive Datentypen
let displayName: string = 'Ortwin';
let completed: boolean = false;
let pi: number = 3.24;
let nothing: null = null;
let notDefined: undefined = undefined;
let id: symbol = Symbol('id');

console.log(typeof nothing, typeof notDefined);

// Arrays

let names: string[] = ['Anna', 'Berny', '4'];
let amounts: Array<number> = [3, 4, 5];

let list: Array<unknown> = [
    1, true, "free", null, undefined
];

// Union Types
type MyAwesomeUnionType = string | number | 'A' | 'B';

let foo: MyAwesomeUnionType = 23;
foo = 'Hallo';
foo = 'A';

function printId(id: number | string) {
    console.log("Your id is " + id);
}

printId(2);
printId("H");

// Type Aliases
type Post = {
    title: string;
    content: string;
    author?: string;
};

const newPost: Post = {
    title: "Alias Einfuehrung",
    content: "In diesem Artikel...",
    // author: "Myself"
};
console.log("Neuer post", newPost);

// Tuples
type StringNumberPair = [string, number];
function doSomething(pair: StringNumberPair) {
    const a = pair[0]; // string
    const b = pair[1]; // number
    // const e = pair[2]; // error
    // Tuple type '[string, number]' of length '2' has no element at index '2'.
         
    // ...
}
   
doSomething(["hello", 42]);

// enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

const dir = Direction.Down;

// enums Alternativen
const directions = {
    Up: "UP",
    Down: "DOWN",
    Left: "LEFT",
    Right: "RIGHT"
} as const;

const otherDir = directions.Down;
console.log("Directions", dir, otherDir);
