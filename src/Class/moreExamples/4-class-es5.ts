// TypeScript don't have any support for es5 classes

interface Calculator {
  operator: string;
  setOperator(operator: string): void;
  calculate(a: number, b: number): number;
  new (a: number, b: number): number;
  (a: number, b: number): string;
}

function BasicCalculator(this: Calculator): number | string | undefined {
  const args = arguments;
  if (!(this instanceof BasicCalculator)) {
    return this.calculate(args[0], args[1]);
  }
  this.operator = "+";
  this.calculate = function (a: number, b: number): number {
    if (this.operator === "+") {
      return a + b;
    } else if (this.operator === "-") {
      return a - b;
    } else if (this.operator === "*") {
      return a * b;
    } else if (this.operator === "/") {
      return a / b;
    } else {
      throw new Error("Unknown operator");
    }
  };
  this.setOperator = function (operator: string): void {
    this.operator = operator;
  };
  return this.calculate(args[0], args[1]);
}
//@ts-expect-error
const calc = new BasicCalculator();
console.log(calc.calculate(5, 5)); // 10
calc.setOperator("*");
console.log(calc.calculate(5, 5)); // 25

export {};
