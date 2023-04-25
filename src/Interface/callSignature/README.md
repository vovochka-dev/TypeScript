# Call Signature
## Conclusions

Main purpose of call signature from interface (<code>(x: number, y: number): number;</code>) is describing shape of object from JavaScript code or/and from external libraries.

Declaration files can set types for complex objects, which can be not only just a function. JavaScript is flexible language and allow to create function, which are class and function simultaneously. 
For example, Date object from DOM can do it.
````
interface MyDateConstructor {
  (): MyDate; // call signature
  new (): MyDate;
  new (dateString: string): MyDate;
  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): MyDate;
}
````
````
interface CalculatorConstructor {
  new (): Calculator;
  (a: number, b: number, operator?: string): number;
}
````
We  can implement this interfaces in our JavaScript code, but we can't implement it in TypeScript.
TypeScript support classes and don't need so flexible functions:
So, in TypeScript we can't implement interface with call signature and yen another property:

```
interface callableObject {
  someState: string;
  (x: number, y: number): number;
}
```
Because TypeScript:
* not consider function property <code>SomeFunction.propertyName</code> as interface property.
* not consider variable enclosed in function as interface property.
* not give us any other way to implement such interface in TypeScript (Javascript can).


## Function type expression
With call signature we can describe any function.
````
interface callableObject {
  (x: number, y: number): number;
}
````
But there are already function type expression, which is equivalent, concise and more convenient type. 
````
type callableObject = (x: number, y: number) => number; 
````
## Call signature in complex interface
If interface with just one call signature useless, let's try to implement interface with call signature and some other parameters:
````
interface callableObject {
  someState: string;
  (x: number, y: number): number;
}
````
or
````
interface User {
  name: string; // Redundant. Function parameter used.
  age: string;
  (name: string): string;
}

function createUser(name: string): string {
  //@ts-expect-error
  console.log(age);  // Cannot find name 'age'
  return `My name is ${name}`
}
````
In this case, there are no <var>age</var> variable in the function body.
It is more clear if we show compiled JavaScript code.
````
function createUser(name) {
  console.log(age);  // Cannot find name 'age'
  return `My name is ${name}`
}
````
## Function property

Function is an object, so we can set some property to it.
````
interface User {
  age: string;
  (name: string): string;
}
export function User(name: string) {
  //@ts-expect-error
  console.log(age); // Cannot find name 'age'
  return `My name is ${name}`;
}
User.age = 18; // no type checking
````
We steal don't have access to age from function body.
TypeScript not throw any error about age type. 
Interface expect string, but we set number. 
We even can export this function and use it in another file. 
And TypeScript even will check type there. And not allow us to set string type value.
As for me, it's wierd behaviour. 

If we wrote same text in vanilla JavaScript and import it to TypeScript all become more logically. It such case it is our responsibility to write correct interface.

## Function prototype
If we set prototype value, it will have no effect. 
No type checking, and value not exported with User function.
Prototype will be used only if our function create new object.
````
export function User(name: string) {
  User.prototype.age = 18; // used only if User is function constructor
  return `My name is ${name}`;
}
User.prototype.age = 18; // used only if User is function constructor
````

## Functional scope and closure
If function can see to outer scope, maybe we can implement interface not only with call signature, but with some other properties in closure.
Let's try implement this interface with operator in closure.
```
interface Operation {
  operator: string;
  (a: number, b: number): number;
}
```
Implementation:
```
interface Operation {
  //operator: string;
  (a: number, b: number): number;
}

interface OperationConstructor {
  (operator: string): Operation;
}

let OperationConstructor: OperationConstructor = function (operator) {
  let Operation = function (a: number, b: number) {
    if (operator === "+") {
      return a + b;
    }
    if (operator === "-") {
      return a - b;
    }
    return a + b;
  };
  return Operation;
};

let sum = OperationConstructor("+");
console.log(sum(10, 5)); // 15
let diff = OperationConstructor("-");
console.log(diff(10, 5)); // 5
//@ts-expect-error
console.log(sum.operator); // undefined
```
So we create two function with type Operation: <code>sum</code> and <code>diff</code>.
And they have operator parameter in closure. <code>+</code> in <code>sum</code> and <code>-</code> in <code>diff</code>.
We can use this variable inside our functions. 
But indeed <var>operator</var> is not object property: <code>console.log(sum.operator); // undefined</code>

And we have to exclude operator type <code>//operator: string;</code>.
We was so close to implementation our complex interface, but closure is not object property.





## Complex interface with class and without call signature
We can implement complex interface with class. 
Call Signature <code>(name: string, age: number): string;</code> transforms to class method with function type expression. <code>calculate(a: number, b: number): number;</code>

Inside method function body we have access to parameter: <var>this.operator</var>.
````
interface Calculator {
  operator: string;
  setOperator(operator: string): void;
  calculate(a: number, b: number): number;
}

function BasicCalculator(): Calculator {
  return {
    operator: "+",
    calculate: function (a: number, b: number): number {
      if (this.operator === "+") {
        return a + b;
      } else if (this.operator === "-") {
        return a - b;
      } else if (this.operator === "*") {
        return a * b;
      } else if (this.operator === "/") {
        return a / b;
      } else {
        throw new Error("Unknown operator");
      }
    },
    setOperator: function (operator: string): void {
      this.operator = operator;
    },
  };
}
````

So, we can implement it as class. But in this case call signature can't define class constructor (for this case we have construct signature). 
We can implement method of the class, but it will be not call signature, it will be function type expression <code>calculate (a: number, b: number): number;</code>


