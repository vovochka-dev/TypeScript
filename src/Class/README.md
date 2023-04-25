# Class
## Typing
Type declarations have to be made directly in the class code, even if there is a separate declaration file or the class implements an interface.
## Field declaration

The simplest example:
````
class Person {
  name: string; 
}
````
## strictPropertyInitialization
TypeScript has a special setting for class field declaration called: <var>strictPropertyInitialization</var>.
In the previous example, an error occurred:
<code>ErrorProperty 'name' has no initializer and is not definitely assigned in the constructor.</code>

Without strict property initialization this code will be legal, without any error.
``` 
class Person {
  name: string; 
  getName(){
    return this.name;
  }
}

let person = new Person();
console.log(person.name); // undefined, BUT (property) Person.name: string
```

In fact, the type of <code>person.name</code> is wrong in this case. 
It is <var>undefined<var>, but TypeScript assumes that it is <var>string<var>.

Throughout our next code, we assume that this setting is true.

To eliminate error you have to initialize property.

In field declaration:
````
class Point {
  x = 0; // number
  y = 0; // number
}
````
Or in constructor body:
````
// bad practice, previous example more explicit
class Point {
  x: number;
  y: number;
  constructor(){
    this.x = 0; // hardcoded in constructor body
    this.y = 0; 
  }
}
````
In constructor body from constructor parameters:
````
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
}
````
Field types and constructor parameter types often are the same. 
In previous example we set equivalent types for both. It's redundant. 
There is a better syntax for such cases, and it is described below in ¨Parameter Properties¨ section.

If the type of the field and the type of the constructor parameter are different, this is still a very good solution.
```
class Point {
  x:number;
  y:number;
  constructor(x: number | string, y: number | string) {
    this.x = Number(x);
    this.y = Number(y);
  }
}
```
Or we can do both, set default value and assign value in constructor:
```
class Point {
  x: number;
  y: number;
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }
}
```

### Parameter Properties
Parameter Properties is a modern concise solution for such cases.
````
class Point {
  //x: number; // can omit it
  //y: number; // can omit it
  constructor(public x: number, public y: number){
    //this.x = x; // can omit it
    //this.y = y; // can omit it
  }
}
````
Transforms to:
````
class Point {
  constructor(public x: number, public y: number){
  }
}
````
## Conclusions about field declaration
There are few best-practice solutions:
```
class Point {
  x = 0; 
  y = 0; 
}
```
```
class Point {
  constructor(public x: number, public y: number){
  }
}
```
```
class Point {
  x: number;
  y: number;
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }
}
```
```
class Point {
  x:number;
  y:number;
  constructor(x: number | string, y: number | string) {
    this.x = Number(x);
    this.y = Number(y);
  }
}

```
## Definite assignment assertion operator
If you intend to definitely initialize a field through means other 
than the constructor (for example, maybe an external library 
is filling in part of your class for you), you can use the definite assignment assertion operator, <var>!</var>:
```
class Person {
  // Not initialized, but no error
  name!: string;
}
```
As with all assertion use it only if you now what you do. It can cause some runtime errors.

## ES5 class
TypeScript don't support es5-style classes.
````
let Person = function (this:Person, name: string) {
  this.name = name;
};
//@ts-expect-error
new User("Anna");
````
You can import JavaScript code with ES5 classes into TypeScript.
This is valid JavaScript code and can be imported into a TypeScript file.
````
let Peron = function (name) {
  this.name = name;
};
const anna = new User("Anna");
console.log(person.name); // Anna
````
## ES5 class polyfill (almost)
We can mimic class behaviour and return object.
````
let User = function (name: string) {
  return {
    name
  };
};
const anna = User("Anna"); // ok
//@ts-expect-error
const anna = new User("Anna");
````
But actually it's not class, it's function, which return object.
