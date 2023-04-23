// Explicit declaration
var done1: boolean;
let done2: boolean;
//@ts-expect-error 'const' declarations must be initialized.
const done3: boolean;

// Implicit initialization
let booleanValue: boolean = true;
var done4 = booleanValue; // boolean
let done5 = booleanValue; // boolean
const done6 = booleanValue; // boolean
const done7 = true; // true

// Explicit initialization
var done8: boolean = booleanValue; // boolean Redundant type declaration
let done9: boolean = booleanValue; // boolean Redundant type declaration
const done10: boolean = booleanValue; // boolean Redundant type declaration
const done11: boolean = true; // boolean. Without type declaration: true

export {};
