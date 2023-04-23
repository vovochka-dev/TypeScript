// Explicit Declaration
var money1: bigint; // bigint
let money2: bigint; // bigint
//@ts-expect-error
const money3: bigint; // 'const' declarations must be initialized.

// Implicit initialization
let bigIntValue: bigint = 18n;
var money4 = bigIntValue; // bigint
let money5 = bigIntValue; // bigint
const money6 = bigIntValue; // bigint
const money7 = 18n; // 18n

// explicit declaration
var money8: bigint = 18n; // bigint Redundant type declaration
let money9: bigint = 18n; // bigint Redundant type declaration
const money10: bigint = bigIntValue; // bigint Redundant type declaration
const money11: bigint = 18n; // bigint Without type declaration: 18n

export {};
