interface numberString {
    [key:number]:string
}

let a:numberString = {
    //@ts-expect-error
    "a":5,
    5:"a"
}

interface User {
    name:string,
    age:number
}
interface userList {
    [key:number]:User
}
let userAnna:User = {
    name:'Anna',
    age:18
}
let users:userList = {
    7: {
        name:'Maria',
        age:18
    },
    8: userAnna,
    //@ts-expect-error
    "anna": userAnna
}