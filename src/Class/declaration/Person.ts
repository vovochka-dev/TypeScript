export default class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// if implicitAny don't allow: error
// if implicitAny allow, strictNullChecks and strictPropertyInitialization not working
// because no sense to check field on undefined if any allow
class User {
  name!;
}

