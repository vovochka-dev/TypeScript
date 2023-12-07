// Explicit declaration
var result1: unknown;
let result2: unknown;
//@ts-expect-error 'const' declarations must be initialized.
const result3: unknown;

// Implicit initialization

let unknownValue: unknown;
var result4 = unknownValue; // unknown
let result5 = unknownValue; // unknown
const result6 = unknownValue; // unknown
//const result7 = unknown; // we can't set unknown as value

// Explicit initialization
var result8: unknown = unknownValue; // unknown Redundant type declaration
let result9: unknown = unknownValue; // unknown Redundant type declaration
const result10: unknown = unknownValue; // unknown Redundant type declaration
//const result11 = unknown; // we can't set unknown as value

;
