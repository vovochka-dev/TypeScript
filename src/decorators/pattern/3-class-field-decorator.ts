let d:ClassDecorator = ()=>{}
// decorator called before class init
// constructor in decorator became subclass of our target class
// and our target class sup constructor runs first with super(), and decorator constructor runs after and update value
function addRoleAdmin<T extends { new (...args: any[]): {} }>(target: T) {
    console.log('decorator');
    return class extends target {
        role = 'admin'
        age = 19
    }
}

@addRoleAdmin
class User {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name= name;
        this.age = age;
        console.log(this)

    }
}

const userAnna = new User('Anna' , 18)
// Note that the decorator _does not_ change the TypeScript type
// and so the new property `role` is not known
// to the type system:
//@ts-expect-error
console.log(userAnna.name, userAnna.age, userAnna.role) // "Anna",  19,  "admin"

/* call run sequence
1 "decorator"
2 this: {
  "name": "Anna",
  "age": 18
}
3 "Anna", 19, "admin"
* */

