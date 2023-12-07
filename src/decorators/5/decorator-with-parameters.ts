function addAge(age:number) {
    return function(_: (...args: any) => any, context: any) {
        return function (initialValue: number) {
            console.log('add age') // 1
            return age + initialValue
        }

    }
}

class User {
    @addAge(2) age: number = 16 // without default value decorator return null
    constructor(public name:string, age: number) {
        console.log('set age replace value from decorator') // 2
        this.age = age;
    }
}

const anna = new User('Anna', 20);
console.log(anna) // 20


