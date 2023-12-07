//params types + return type
// arrow function expression
const add2 = (a: number, b: number):number => a + b;
// function expression without name
const add21 = function (a: number, b: number):number {return a + b}
// function expression with name. but it didn't declare globally, we only can use it inside function body
const add22 =  function name(a: number, b: number):number {return a + b}
// function declaration
function add13(a: number, b: number): number {return a + b}


// object literal
// arrow function expression
const add3:(a: number, b: number) => number = (a, b) => a + b;
// function expression without name
const add31:(a: number, b: number) => number = function (a, b) {return a + b}
// function expression
const add32:(a: number, b: number) => number =  function name(a, b) {return a + b}
// function declaration doesn't work with object literal, it's nonsense, because we describe params and return type anyway
//function add33:(a: number, b: number) => number(a, b) {return a + b}


// Alias Type with function signature
type functionSignatureAliasType = (a: number, b: number) => number; // function signature
// arrow function expression
const add1: functionSignatureAliasType = (a, b) => a + b;
// function expression without name
const add11: functionSignatureAliasType = function (a, b) {return a + b}
// function expression with name. but it didn't declare globally, we only can use it inside function body
const add12: functionSignatureAliasType =  function name(a, b) {return a + b}
// function declaration doesn't work with function signature alias type
// function add13(a, b) {return a + b}

// interface with call signature
interface callSignature {
    (a:number, b:number):number
}
// arrow function expression
const add4: callSignature = (a, b) => a + b;
// function expression without name
const add41: callSignature = function (a, b) {return a + b}
// function expression with name. but it didn't declare globally, we only can use it inside function body
const add42: callSignature =  function name(a, b) {return a + b}
// function declaration doesn't work with function signature alias type
// function add43(a, b) {return a + b}

