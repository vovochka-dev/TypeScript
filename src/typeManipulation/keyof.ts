interface User {
    name:string,
    age:number
}

type keysOfUser = keyof User;

let userFields: keysOfUser[] = ["name","age"]
//@ts-expect-error
let userFields2: keysOfUser[] = ["name","age", "role"]

let userName:keysOfUser = "name";
let userAge:keysOfUser = "age";
//@ts-expect-error
let userRole:keysOfUser = "role";


type keysOfString = keyof string; // toString, concat indexOf...

// Only common fields for string and number
type keysOfStringNumber = keyof (string | number); // toString, valueOf

// TODO I DONT KNOW
type keysOfStringAndNumber = keyof (string & number);
// not understand
let stringAndNumberFields: keysOfStringAndNumber[] = ["sdsd"]

type keyOfAny = keyof any;

// get value of object property
function getPropertuValue<T>(obj:T, key:  keyof T){
    return obj[key]
}

const userAnna = {
    name: 'Anna',
    age: 18
}

//@ts-expect-error
type keyofUserAnna = keyof userAnna; // userAnna object, not type
type keyofUserAnna2 = keyof typeof userAnna;
// works because we get typeof uesrAnna
type userAnnaType = typeof userAnna;
type keyofUserAnna3 = keyof userAnnaType; // name, age


