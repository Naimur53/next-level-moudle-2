// typ assertion
type KgType = string | number | undefined
function kgToGram(value: KgType): KgType {
    if (typeof value == 'number') {
        return value * 1000
    } else if (typeof value == 'string') {
        return parseFloat(value) * 1000
    }

}
const my = kgToGram(1000) as number
// as number will be sure then you can put
console.log('hi', my)


type User<T> = {
    name: string,
    age: number,
    secondName?: T
}

interface IUser {
    name: string,
    age: number,
}

interface IAdmin extends IUser {
    role: "admin" | null,

}
interface IMain extends IUser {
    students: genericArray<IUser>
}
const data: IAdmin = {
    name: 'asdi',
    age: 3,
    role: 'admin'
}


// generic array 
type genericArray<T> = Array<T>;

const num: genericArray<number> = [343];
const num2: genericArray<number> = [53, 322];
const num3: genericArray<number> = [34, 343, 3323, 121];

const a: IMain = {
    name: 'dfd',
    age: 2332,
    students: [{ name: 'dfd', age: 3 }]
};

// tuple in generic way
type genericTuple<T, V> = [T, V]
type myArray = [number, string];

const b: genericTuple<string, number> = ["23", 3,];

// 

const relationWithSalary: genericTuple<User<boolean | null>, string> = [
    {
        name: 'dfd',
        age: 33,
    },
    'hi'
]
console.log(relationWithSalary)

const arrCreator = <X, Y>(p1: X, p2: Y): [X, Y] => {

    return [p1, p2]

}
console.log(arrCreator<IAdmin, IAdmin>(data, data))

const spreading = <X>(p: X) => {
    const out = { ...p, role: 'admin' }
    return out;
}
const result = spreading<IAdmin>(data)

console.log('spreading', spreading<{ a: number, }>({ a: 322 }));

// this extends will force ISad T to keep all key of user it a generic constrain

interface ISad<T extends User<false>> {
    extra: T

}
const sad: ISad<{ name: string, age: 2 }> = {
    extra: { name: 'df', age: 2 }
}


// keyof
type withKey<T, P> = (o: T, p: keyof T) => number | string

type All = { name: string, age: number }

// function getValue<X,Y>(myOb:X,key: keyof X){
function getValue<X, Y extends keyof X>(myOb: X, key: Y) {

    return myOb[key]


}

// 
type AreaNumber = {
    width: number;
    height: number;

}
function example<T>(arg: T): T { return arg }


function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];

    return item[key];

}


const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

interface Person {

    firstName: string;

    lastName: string;

}



function fullName<T extends Person>(person: T): string {

    return `${person.firstName} ${person.lastName}`;

}
