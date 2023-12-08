let accessName:ClassFieldDecoratorContext["access"];

function accessNameDec(value: any, context: ClassFieldDecoratorContext) {
    console.log('set');
    accessName = context.access;
    return value
}
let accessAge:ClassFieldDecoratorContext["access"];;
function accessAgeDec(value: any, context: ClassFieldDecoratorContext) {
    console.log('set');
    accessAge = context.access;
    return value
}
let accessGreet:ClassMemberDecoratorContext["access"];;
function accessGreetDec(originalMethod: (...args: any) => any, context: ClassMemberDecoratorContext) {
    console.log('set');
    accessGreet = context.access;
    return originalMethod
}
class User {
    @accessNameDec name:string;
    @accessAgeDec age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    @accessGreetDec
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const anna = new User('Anna', 18);

console.log('use');
//@ts-expect-error
if(accessName && accessAge && accessGreet) {

    // has
    console.log(accessName.has(anna)); // true anna object has property name
    console.log(accessName.has({name:'Anna'})); // true
    console.log(accessName.has({})); // false
    console.log(accessAge.has(anna)); // true

    // get
    console.log(accessName.get(anna)); // "Anna"
    console.log(accessName.get({name:'Anna'})); // "Anna"
    console.log(accessName.get({})); // undefined
    console.log(accessAge.get(anna)); // 18

    // method
    // has
    console.log(accessGreet.has(anna)); // true
    console.log(accessGreet.has({name:'Anna', greet(){}})); // true
    console.log(accessGreet.has({})); // false
    console.log(accessGreet.has(anna)); // true

    // get
    //@ts-expect-error
    if(accessGreet.get ) {
        //@ts-expect-error
        const greetMethod = accessGreet.get(anna)
        //@ts-expect-error
        accessGreet.get(anna).bind({name:'Maria'})()  // "Hello, my name is Maria."
    }
}