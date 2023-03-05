// Task 1

interface User {
    name: string,
    age: number;
    occupation?: string,
    car?: string,
    children?: number;
}

const users: User[]= [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

// Task 2

interface Admin extends User {
    role: string;
}

type Person = User|Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

// Task 3


/*interface ObjectManipulatorInterface<F>{
    new (obj: F): ObjectManipulatorInterface<F>;
    set<T>(key: string, value: T): ObjectManipulatorInterface<F>
    get<GetVal>(key: string):GetVal;
}*/

interface ObjectManipulatorInterface {
    set(key: string, value: any): ObjectManipulatorInterface
    get(key: string): any
    delete(key: string): ObjectManipulatorInterface
    getObject(): Record<string, any>
}

export class ObjectManipulator implements ObjectManipulatorInterface {

    constructor(protected obj: Record<string, any>) {}

    public set(key: string, value: any) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string) {
        return this.obj[key];
    }

    public delete(key: string) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }}

// Task 4

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map(mapper?: Function, input?: Array<any>): Array<any>|Function|undefined {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1 && mapper) {
        return function subFunction(subInput?: Array<any>): Array<any>| Function |undefined {
            if (arguments.length === 0) {
                return subFunction;
            }
            if (subInput)
            return subInput.map(mapper());
        };
    }
    if (input && mapper)
    return input.map(mapper());
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer?: Function, input?: Array<any>): Function|Array<any>|undefined {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1 && filterer) {
        return function subFunction(subInput?: Array<any>): Function|Array<any>|undefined {
            if (arguments.length === 0) {
                return subFunction;
            }
            if (subInput)
            return subInput.filter(filterer());
        };
    }
    if (filterer && input)
    return input.filter(filterer());
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a?: number, b?: number): number|Function|undefined {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1 && typeof a === 'number') {
        return function subFunction(subB?: number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            if (typeof subB === 'number')
            return a + subB;
        };
    }
    if (typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
}

console.log(add(1, 5));