// Explicit declaration
var budget1: void;
let budget2: void;
//@ts-expect-error 'const' declarations must be initialized.
const budget3: void;

// Implicit initialization
let voidValue: void; // we can set here undefined or any
var budget4 = voidValue; // void
let budget5 = voidValue; // void
const budget6 = voidValue; // void
//const budget7 = ... ; // no literal in void type

// Explicit initialization
var budget8: void = voidValue; // void Redundant type declaration
let budget9: void = voidValue; // void Redundant type declaration
const budget10: void = voidValue; // void Redundant type declaration
//const budget11: void = ..; // no literal in void type

export {};
