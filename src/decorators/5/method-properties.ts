let accessGreet;
function contextProps(originalMethod: (...args: any) => any, context: ClassMethodDecoratorContext) {
    console.log("kind", context.kind); // method
    console.log("name", context.name); // greet
    console.log("private", context.private); // false (also false for private greet(){}) (true for #greet)
    console.log("static", context.static); // false (true for static greet(user){...})
    return originalMethod
}

class User {
    constructor(public name: string) {
    }

    @contextProps
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

}

const anna = new User("Anna");


