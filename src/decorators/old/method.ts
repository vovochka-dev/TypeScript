// @experimentalDecorators
function enumerable<T>(target: Object, propertyKey:string | symbol, descriptor: TypedPropertyDescriptor<T>) {
    console.log(descriptor)
    // "writable": true,
    // "enumerable": false,
    // "configurable": true
}

// ---cut---
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable
    greet() {
        return "Hello, " + this.greeting;
    }
}


