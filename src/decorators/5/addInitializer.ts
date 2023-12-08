function bound(method: any, context: ClassMethodDecoratorContext) {
    context.addInitializer(function () {
        // @ts-expect-error
        this[context.name] = this[context.name].bind(this);
    });
}

class User {
    constructor(public name:string, public age: number) {
    }

    @bound
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const anna = new User('Anna', 20);
anna.greet()
const greet = anna.greet;
greet()

