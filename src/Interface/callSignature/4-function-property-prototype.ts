// Here interface not do any type checking in this file,
// but if we export file there are will be type checking in external file.
// So it's our responsibility to use correct interface as declaration.

interface User {
  age: string;
  something: string;
  (name: string): string;
}
export function User(name: string) {
  User.prototype.age = 18; // used only if User is function constructor
  //@ts-expect-error
  console.log(age); // Cannot find name 'age'
  return `My name is ${name}`;
}
User.age = 18; // no type checking.
User.prototype.age = 18; // used only if User is function constructor

;
