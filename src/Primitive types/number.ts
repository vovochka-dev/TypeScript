// Explicit declaration
var age1: number;
let age2: number;
//@ts-expect-error 'const' declarations must be initialized.
const age3: number;

// Implicit initialization
let numberValue: number = 18;
var age4 = numberValue; // number
let age5 = numberValue; // number
const age6 = numberValue; // number
const age7 = 18; // 18

// Explicit initialization
var age8: number = numberValue; // number Redundant type declaration
let age9: number = numberValue; // number Redundant type declaration
const age10: number = numberValue; // number Redundant type declaration
const age11: number = 18; // number Without type declaration: 18

;
