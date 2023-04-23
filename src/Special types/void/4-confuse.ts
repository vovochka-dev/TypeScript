// There are void operator in js. Don't get the names mixed up, don´t confuse.
// This operator allows evaluating expressions that produce a value into places where an expression that evaluates to undefined is desired.
//let age = void (7 + 7); // It's not typescript, but javascript feature.
let string = void ("some" + "expression"); // undefined
//let string = void // runtime error. JS expect some expression after void keyword

export {};
