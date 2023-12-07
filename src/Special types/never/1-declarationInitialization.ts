// Explicit declaration
var budget1: never;
let budget2: never;
//@ts-expect-error 'const' declarations must be initialized.
const budget3: never;

// Implicit initialization
let neverValue = function (): never {
  throw Error();
};
var budget4 = neverValue; // never
let budget5 = neverValue; // never
const budget6 = neverValue; // never
//const budget7 = ... ; // no literal in never type

// Explicit initialization
//var budget8: never = neverValue; // never is not assignable to type never
//let budget9: never = neverValue; // never is not assignable to type never
//const budget10: never = neverValue; // never is not assignable to type never
//const budget11: never = ..; // no literal in never type and never is not assignable to type never

;
