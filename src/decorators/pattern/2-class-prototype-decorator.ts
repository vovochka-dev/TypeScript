function addYear(target: Function) {
    console.log('decorator run')
    target.prototype.age = 19
}

@addYear
class User {
    constructor(public name: string, public age: number) {
        console.log('constructor run')
    }
}

const userAnna = new User('Anna' , 18)
// 18 Because decorator sets value before class run. And prototype value does not get from prototype, it exists on the object itself.
console.log(userAnna.age) // 18




