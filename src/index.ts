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


type User = {
    name: string,
    age: number,
}

interface IUser {
    name: string,
    age: number,
}

interface IAdmin extends IUser {
    role: "admin" | null,

}

const data: IAdmin = {
    name: 'asdi',
    age: 3,
    role: 'admin'
}


