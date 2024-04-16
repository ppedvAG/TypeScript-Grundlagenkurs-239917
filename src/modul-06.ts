interface BookDetails {
    title: string;
    pages: number;
    author?: string;
}
    

// Eigenschaften aus einem Objekt
const bookDetails: BookDetails = { 
    title: "TypeScript Deep Dive", 
    pages: 200
};

const { title, pages }: BookDetails = bookDetails;

function publishBook({ title, pages }: BookDetails) {
    console.log(`Book ${title} published with ${pages} pages.`)
}

// Elemente aus einem Array
const numbers: number[] = [1, 2, 3];
const [first, second, third]: number[] = numbers;

namespace generators {
    // Generatoren
    function* simpleGenerator() {
        yield 1;
        yield 2;
        yield 3;
    }

    const simpleGen = simpleGenerator();
    console.log('nothing generated so far');
    console.log(`Next: `, simpleGen.next())
    console.log(`Next: `, simpleGen.next())
    console.log(`Next: `, simpleGen.next())
    console.log(`Next: `, simpleGen.next())

    function* genaretId() {
        let id = 0;
        while (true) {
            yield ++id;
        }
    }

    const genId = genaretId();
    for (let i = 0; i < 5; i++) {
        console.log(`Next ${i}: `, genId.next())
    }
}

// pfeilfunktionen
// const timoutId = setTimeout(() => console.log('2secs'), 2000);

console.log(numbers.map((i) => `number ${i}`).join(', '));

class Example {
    value = 42;

    arrowFunc = () => console.log(this.value);

    normalFunc = function() { 
        console.log(this.value); 
    };
}

let example = new Example();
example.arrowFunc();
example.normalFunc();

// promises
function generatePromise(value: number): Promise<number> {
    const somePromise = new Promise<number>((resolve, reject) => {
        return value > 0 
            ? resolve(value)
            : reject('value must be larger 0');
    });
    return somePromise;
}

generatePromise(-1)
    .then((value) => console.log(value))
    .catch((error) => console.error(error));
    
generatePromise(27)
    .then((value) => console.log(value))
    .catch((error) => console.error(error));

(async () => {
    try {
        const result = await generatePromise(37);
        console.log('result = ', result);
    } catch (error) {
        console.error('catched ', error);
    }
})();

interface CatFact {
    fact: string;
    lenght: number;
}

(async () => {
    try {
        const result: Response = await fetch('https://catfact.ninja/fact');
        const json: CatFact = await result.json();
        console.log(json.fact)
    } catch (error) {
        console.log(error);
    }
})();