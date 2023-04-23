// Explicit declaration
var text1: string;
let text2: string;
//@ts-expect-error 'const' declarations must be initialized.
const text3: string;

// Implicit initialization
let stringValue: string = "some text";
var text4 = stringValue; // string
let text5 = stringValue; // string
const text6 = stringValue; // string
const text7 = "some text"; // some text

// Explicit initialization
var text8: string = stringValue; // string Redundant type declaration
let text9: string = stringValue; // string Redundant type declaration
const text10: string = stringValue; // string Redundant type declaration
const text11: string = "some text"; // string Without type declaration: "some text"

export {};
