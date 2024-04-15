// unknown
let value: unknown = "this is a string";
value = 10; // okay, value is now a number
// value.toFixed(); 
// Error, because value is unknown

// never
function error(message: string): never {
   throw new Error(message);
}

// Type Assertions
// 1. Möglichkeit: angle-brackets
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 2. Möglichkeit: as Syntax
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;

// Functions
function repeatString(text: string, times?: number): string | undefined {
    if (times && times > 0) {
        return text.repeat(times ?? 1);
    }
    return undefined;
}

function repeatStringAlt(text: string, times = 5): string {
    return text.repeat(times);
}

console.log(repeatString('Hallo ', 5))
console.log(repeatStringAlt('Hallo '))
  
function padLeft(text: string, padding: number | string): string {
    if (typeof padding === "number") {
        return " ".repeat(padding) + text;
    }
    return padding + text;
}

console.log(padLeft('Spaces ', 5))
console.log(padLeft('Tab ', '\t'))

function printAll(strs: string | string[] | null) {
    // funktioniert nicht da null auch vom typ object ist
    // if (typeof strs === 'object') { 
    // if (strs?.length) {
    if (Array.isArray(strs)) {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}