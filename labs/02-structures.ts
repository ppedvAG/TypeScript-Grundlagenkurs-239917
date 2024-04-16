// Arrays
console.info('\n ARRAYS')

// Arrays können an bestimmte Datentypen angepasst werden.
// Ohne Typangabe ist es ein Array of any.
let myArray1 = [];
myArray1 = [4, 6, 3];
myArray1 = ['a', 'b', 'c'];

let myNumbers: number[] = [5, 5.2, 6543];
// myNumbers = ['s']; // Type 'string' is not assignable to type 'number'.ts(2322)

// Array ist in TS eine generische Klasse
let myStrings: Array<string> = ['r', 't'];

let myStrings2 = myStrings;

console.log("myStrings2 === myStrings ? 'gleich' : 'ungleich' :>> ", myStrings2 === myStrings ? 'gleich' : 'ungleich'); // gleich

let myStrings3 = ['r', 't'];
console.log("myStrings3 === myStrings ? 'gleich' : 'ungleich' :>> ", myStrings3 === myStrings ? 'gleich' : 'ungleich'); // ungleich
console.log("myStrings3 == myStrings ? 'gleich' : 'ungleich' :>> ", myStrings3 == myStrings ? 'gleich' : 'ungleich'); // ungleich


// KOPIE VON EINEM ARRAY
let myStringsCopy = [...myStrings];
console.log("myStringsCopy === myStrings ? 'gleich' : 'ungleich' :>> ", myStringsCopy === myStrings ? 'gleich' : 'ungleich'); // ungleich


// DESTRUCTURING OF ARRAYS
let myArray2 = [3, 5, 6, 1];
let [first, second, third] = myArray2;
console.log('first :>> ', first); // 3
console.log('third :>> ', third); // 6

let [erstes, zweites, ...rest] = myArray2;
console.log('rest :>> ', rest); // rest :>>  (2) [6, 1]




console.info('\n HTML COLLECTION')

let headings2 = document.getElementsByTagName('h2'); // HTMLCollectionOf<HTMLHeadingElement>
console.log('headings2 :>> ', headings2); // headings2 :>>  HTMLCollection(2) [h2, h2]
// hat 2 Methoden:
// - item()
// - namedItem()




console.info('\n HTML COLLECTION of Elements')

let redElements = document.getElementsByClassName('red'); // HTMLCollectionOf<Element>



console.info('\n NODE LIST of Elements')
// let numberInputs = document.querySelector('input[type = "number"]'); // Element | null
// oben: nur das erste zutreffende Element wird selektiert
// unten: alle werden selektiert
let numberInputs = document.querySelectorAll('input[type = "number"]'); // NodeListOf<Element>
console.log('numberInputs :>> ', numberInputs); // numberInputs :>>  NodeList(3) [input, input, input]
// - entries()
// - forEach()
// - item()
// - keys()
// - values()



console.info('\n NODE LIST of Elements TO ARRAY')
// let nodeListEntries: Array<HTMLInputElement> = numberInputs; 
// Type 'NodeListOf<Element>' is missing the following properties from type 'HTMLInputElement[]':
//  pop, push, concat, join, and 14 more.ts(2740)

// bei es5
let nodeListEntriesES5: Array<HTMLInputElement> = Array.prototype.slice.call(numberInputs);

// ab es6:
// let nodeListEntriesES6: Array<HTMLInputElement> = Array.from(numberInputs); // Type 'Element[]' is not assignable to type 'HTMLInputElement[]'.
// let nodeListEntriesES6: Array<HTMLInputElement> = Array.from((numberInputs as NodeListOf<HTMLInputElement>)); // Type 'Element[]' is not assignable to type 'HTMLInputElement[]'.
let nodeListEntriesES6: Array<HTMLInputElement> = [...(numberInputs as NodeListOf<HTMLInputElement>)];

// oder Type Assertion später bei jedem Element einzeln in einer Iteration ausführen
// let nodeListEntriesES6: Array<Element> = Array.from(numberInputs);


console.info('\n TUPEL');

// Die gewünschten Datentypen vom Tupel werden INNERHALB von eckigen Klammern angegeben
let tupel: [Date, string];
// Zuweisung von Werten ist wie beim Array
tupel = [new Date(), 'warmer Tag'];

// Tupel können optionale Elemente beinhalten;
let tupel2: [number, string, boolean?];
tupel2 = [1, 'wert für 1', true];
tupel2 = [2, 'wert für 2'];

// Auf Einträge kann man mit Indizes zugreifen:
console.log('tupel2[1] :>> ', tupel2[1]); // tupel2[1] :>>  wert für 2


