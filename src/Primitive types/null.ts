// Explicit declaration
var result1: null;
let result2: null;
//@ts-expect-error 'const' declarations must be initialized.
const result3: null;

// Implicit initialization
let nullValue: null = null;
var result4 = nullValue; // null
let result5 = nullValue; // null
const result6 = nullValue; // null
const result7 = null; // true

// Explicit initialization
var result8: null = nullValue; // null Redundant type declaration
let result9: null = nullValue; // null Redundant type declaration
const result10: null = nullValue; // null Redundant type declaration
const result11: null = null; // null Redundant type declaration, we have only one literal

export {};
