type User = {
    name: string,
    age: number,
    roles: string[]
}

const userAnna: User = {
    name: 'Anna',
    age: 18,
    roles:["user", "admin"]
}

let ageValue = userAnna.age
type ageTypeFromObject = typeof userAnna['age']
type ageTypeFromType = User['age']

let ageAlias = 'age' // type is string
const ageAliasConst = 'age' // type is 'age'

type ageType = User[typeof ageAliasConst]
type ageType2 = User['age'] // age is type

// error
//type ageType3 = User[('a'+'ge')] // expect type. Typescript not concat types as string in js.

// get type of array element
type rolesType = User['roles'] // string[]
type rolesElementType = User['roles'][number] // string

// array of string to an array of types
let rolesArrayString = ["user", "admin"] // string[]
let rolesArray = ["user", "admin"] as const // ["user", "admin"]
type rolesArrayTypes = typeof rolesArray[number];


