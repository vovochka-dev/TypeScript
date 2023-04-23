// void - here we set return type, not function type expression
let exp2 = function (): void {
  //@ts-expect-error
  return 7;
};

// TypeScript does not raise an error in this case because it allows the function
// to be assigned to a variable with a wider return type, meaning a value of any type can be returned.
// () => void - here we set function type expression
let exp1: () => void = function () {
  return 7; // no error
};

// () => void - function type expression. Allow us to use cb with different types
function loggerCB(cb: () => void) {
  console.log(cb());
}
loggerCB(exp1);
loggerCB(exp2);
loggerCB(() => 7);
loggerCB(() => "string");
loggerCB(() => undefined);
loggerCB(() => null);
// we can use cb even with never return type
loggerCB((): never => {
  throw new Error("Some error");
});

export {};
