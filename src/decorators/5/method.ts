function loggedMethod(originalMethod: any, _context: any) {
    return function(this: any, ...args: any[]) {
        console.log("LOG: Entering method.")
        const result = originalMethod.call(this, ...args);
        console.log("LOG: Exiting method.")
        return result;
    }
}


class User {
    constructor(public name: string) {
    }

    @loggedMethod
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const anna = new User("Anna");
anna.greet();

/*
* LOG: Entering method
* Hello, my name is Anna.
* LOG: Exiting method.
* */

