interface User {
    name:string,
    age:number
}

const userAnna: User = {
    name: 'Anna',
    age: 18
}

function loggerDecorator(u:User) {
    console.log(`User ${u.name} has ${u.age} years.`)
    return u;
}

function addYearDecorator(u:User) {
    u.age++;
    return u;
}

addYearDecorator(loggerDecorator(userAnna)) // 18
loggerDecorator(userAnna) // 19


