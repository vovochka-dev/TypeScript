// Explicit declaration
var truth1: undefined;
let truth2: undefined;
//@ts-expect-error 'const' declarations must be initialized.
const truth3: undefined;

// Implicit initialization
let undefinedValue: undefined = undefined;
var truth4 = undefinedValue; // undefined
let truth5 = undefinedValue; // undefined
const truth6 = undefinedValue; // undefined
const truth7 = undefined; // undefined

// Explicit initialization
var truth8: undefined = undefinedValue; // undefined Redundant type declaration
let truth9: undefined = undefinedValue; // undefined Redundant type declaration
const truth10: undefined = undefinedValue; // undefined Redundant type declaration
const truth11 = undefined; // undefined Redundant type declaration, we have only one literal

export {};
