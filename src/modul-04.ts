import moment from 'moment';

export namespace Course {  
    export class Student {
        fullName: string;

        constructor (public firstName: string, public lastName: string) {
            // this.fullName = 'Mein name ist ' + firstName + ' ' + lastName;
            this.fullName = `${firstName} ${lastName}`;
        }

        public greet() {
            console.log('Mein name ist ' + this.fullName);
        }
        
        toString() {
            return this.fullName;
        }
    }

    export class VirtualStudent extends Student {
        constructor(nickName: string) {
            super(nickName, '');
        }

        override greet(): void {
            console.warn('Hi ' + this.fullName);
        }
    }
} 
    
new Course.Student('John', 'Doe').greet();
const student2 = new Course.VirtualStudent('Jonny');
console.log(student2);
student2.greet();

// Interfaces
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    constructor(public name: string) {
    }

    makeSound(): void {
        console.log(`${this.name} said: wuff!`);
    }
}

const myDog: Animal = new Dog('Bello')
myDog.makeSound();
console.log({
    instanceof: myDog instanceof Dog,
    typeof: typeof Dog,
})

const myDuck: Animal = {
    name: "Duffy",
    makeSound: function (): void {
        console.log('quack');
    }
};

const myBunny = {
    name: "Duffy",
    makeSound: function (): void {
        console.log('quack');
    }
} as Animal;

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