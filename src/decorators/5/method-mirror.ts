function mirror(originalMethod: any, _context: any) {
    return originalMethod
}
class User {
    constructor(public name: string) {
    }

    @mirror
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const anna = new User("Anna");
anna.greet();


