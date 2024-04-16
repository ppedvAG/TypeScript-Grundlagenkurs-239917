// Generics
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>('Hallo Welt'));
console.log(identity(422));

interface Person {
    firstName: string;
    lastName: string;
}

const addFullNameToPerson = <T extends Person>(obj: T) => {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    };
}

const fullDetailedPerson: PersonWithFullName = addFullNameToPerson({ firstName: 'John', lastName: 'Doe', age: 25 });
console.log(fullDetailedPerson)

type PersonWithFullName = {
    firstName: string;
    lastName: string;
    age: number;
} & {
    readonly fullName: string;
};

// Transpiler verhindert zuweisung, da readonly modifier gesetzt wurde
// fullDetailedPerson.fullName = 'override';

console.log('Person with full name', fullDetailedPerson.fullName);

type personKeys = keyof PersonWithFullName;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

console.log('Person with full name', getProperty(fullDetailedPerson, 'fullName'));

// Utility Types
type PartialPerson = Partial<PersonWithFullName>;

const otherPerson: PartialPerson = {
    firstName: 'Jane',
    lastName: 'Doe'
};

function update(id: string, data: PartialPerson) {
    // send partial data to server
}

type AwaitablePerson = Awaited<Person>;

const waitingForPerson: AwaitablePerson = {
    firstName: 'Hugo',
    lastName: 'Blah'
}

type VirtualPerson = Pick<PersonWithFullName, 'fullName'>;
const virtualPerson: VirtualPerson = {
    fullName: 'Nicky'
};

type ReducedPerson = Omit<PersonWithFullName, 'fullName'>;
const reduced: ReducedPerson = {
    age: 0,
    firstName: 'a',
    lastName: 'b'
};

interface CatInfo {
    age: number;
    breed: string;
}
   
type CatName = "miffy" | "boris" | "mordred";
   
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

const randomJsonObject: Record<string, unknown> = {
    a: 2,
    b: 45
};



// Decorators
function logClassName(target: Function, className?: string) {
    console.log(`Class name: ${target.name}`);
}

function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let orginalMethod = descriptor.value;

    descriptor.value = function(...args: []) {
        console.log(`Method ${propertyKey} called with args
            ${JSON.stringify(args)}`);
            return orginalMethod.apply(this, args);
    }

    return descriptor;
}

// @logClassName
export class Calculator {
    // @logMethod
    add(a: number, b: number) {
        return a + b;
    }
}

new Calculator().add(2, 45)