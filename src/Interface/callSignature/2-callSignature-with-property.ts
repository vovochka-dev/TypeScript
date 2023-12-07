// No sense to use interface with simple function (not constructor)
interface Calculator {
  operator?: string; //  no sense
  (x: number, y: number, operator?: string): number; // because we need to set it in constructor, if we want to use it
}

const calculate: Calculator = (x, y, operator = "+") => {
  // here operator value from constructor not from calculate.operator
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      throw new Error("Invalid operator");
  }
};

console.log(calculate(10, 5)); // Output: 15
console.log(calculate(10, 5, "+")); // Output: 15
console.log(calculate(10, 5, "-")); // Output: 5
console.log(calculate(10, 5, "*")); // Output: 50
console.log(calculate(10, 5, "/")); // Output: 2
console.log(calculate(10, 5, "%")); // Output: Error: Invalid operator

console.log(calculate(10, 5)); // Output: 15
calculate.operator = "-"; // don't work
console.log(calculate(10, 5)); // Output: 15
calculate.operator = "*"; // don't work
console.log(calculate(10, 5)); // Output: 15
calculate.operator = "/"; // don't work
console.log(calculate(10, 5)); // Output: 15

;
