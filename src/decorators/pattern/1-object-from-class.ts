interface User {
    name:string,
    age:number,
    role?:string
}

class User implements User{
    constructor(public name:string, public age:number) {
    }
}

// steal decorate object (instance of class)
function loggerDecorator(u:User) {
    console.log(`User ${u.name} has ${u.age} years.`)
    return u;
}

// steal decorate object (instance of class
function addYearDecorator(u:User) {
    u.age++;
    return u;
}
// class return object and decorators update modifies this object
let userAnna = addYearDecorator(loggerDecorator(new User('Anna', 18))) // 18
console.log(userAnna.age); // 19

// each time new object
let userAnna2 = loggerDecorator(new User('Anna', 18)) // 18

function toAdminDecorator(u:User) {
    u.role = "admin"
    return u;
}

let userAnna3 = toAdminDecorator(new User('Anna', 18))
console.log(userAnna.role); // undefined
console.log(userAnna3.role); // admin


