// Implicit declaration
var inputValue1;
let inputValue2;
//@ts-expect-error 'const' declarations must be initialized.
const inputValue3;

// Explicit declaration
var inputValue4: any; // Redundant type declaration
let inputValue5: any; // Redundant type declaration
//@ts-expect-error 'const' declarations must be initialized.
const inputValue6: any;

// Implicit initialization to undefined, not to any
let anyValue: any; // Redundant type declaration
var inputValue7 = anyValue; // undefined, not any
let inputValue8 = anyValue; // undefined, not any
const inputValue9 = anyValue; // undefined, not any

// Explicit initialization
var inputValue10: any = anyValue; // Redundant type declaration
let inputValue11: any = anyValue; // Redundant type declaration
const inputValue12: any = anyValue; // Redundant type declaration

export {};
