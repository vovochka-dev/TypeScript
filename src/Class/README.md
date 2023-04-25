# Class
## ES5 class
TypeScript don't support es5-style classes.
````
let User = function (this:User, name: string) {
  this.name = name;
};
//@ts-expect-error
new User("Vova");
````
But we can import JavaScript code with es5 classes. This is valid JavaScript code and we can import it to TypeScript file:
````
let User = function (name) {
  this.name = name;
};
const vova = new User("Vova");
console.log(vova.name); // Vova
````
## ES5 class polyfill (almost)
We can mimic class behaviour and return object.
````
let User = function (name: string) {
  return {
    name
  };
};
const vova = User("Vova"); // ok
//@ts-expect-error
const vova2 = new User("Vova");
````
But actually it's not class, it's function, which return object.
## Typing
Type declaration have to be directly in class code. 
Even if there are declaration file or class implement some interface.

