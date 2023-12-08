function bound(_: any, context: any) {
    console.log('decorator run even without class instance')
    console.log('decorator run for each method it use')
}

class User {
    constructor(public name:string, public age: number) {
    }

    @bound
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    @bound
    goodbye() {
        console.log(`goodbye`);
    }
}

