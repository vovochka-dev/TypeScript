// Interface used to describe the shape of the object.
interface Human {
  name: string;
  age: number;
}

interface User {
  name: string;
  age: number;
  readonly family: string;
  whatIsYourName: () => string; // function type expression. One syntax.
  howOldAreYou(): number; //argument (there are no arguments here) + return types. Another equal syntax.
  (): Human; // if we return User here, we have to implement recursion
  //[key: string]: string; // index signatures. Error because it applies rule to all fields (already included also). In type it applies only to new attributes.
  new(): Human; //you can use object as constructor
}

;
