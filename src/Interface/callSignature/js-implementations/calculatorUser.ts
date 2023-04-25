import Calculator from "./calculator.js";

const calc = new Calculator();
console.log(calc.calculate(5, 5)); // 10
console.log(calc.calculate(5, 5, "*")); // 25
console.log(calc.calculate(5, 5, "+")); // 10

calc.operator = "*";
console.log(calc.calculate(5, 5)); // 25
console.log(calc.result, "result");

console.log(Calculator(5, 5, "-")); // 0
calc.operator = "/";
console.log(Calculator(5, 5, "-")); // 0
console.log(calc.calculate(5, 5, "/")); // 1
