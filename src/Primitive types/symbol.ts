// Explicit declaration
var id1: symbol;
let id2: symbol;
//@ts-expect-error 'const' declarations must be initialized.
const id3: symbol;

// Implicit initialization
let symbolValue: symbol = Symbol("key");
var id4 = symbolValue; // symbol
let id5 = symbolValue; // symbol
const id6 = symbolValue; // symbol
const id7 = Symbol("key"); // typeof id7

// Explicit initialization
var id8: symbol = symbolValue; // symbol Redundant type declaration
let id9: symbol = symbolValue; // symbol Redundant type declaration
const id10: symbol = symbolValue; // symbol Redundant type declaration
const id11 = Symbol("key"); // symbol Without type declaration: typeof id11

export {};
