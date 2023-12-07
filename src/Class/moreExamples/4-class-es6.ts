// We can finally implement our working calculator
// But only if our function is actually the class and calculate is a method (not constructor)

interface Calculator {
  operator: string;
  setOperator(operator: string): void;
  calculate(a: number, b: number): number; // not (a: number, b: number): number
}
let d = Date();
class BasicCalculator implements Calculator {
  operator: string = "+";

  // not much sense in constructor

  setOperator(operator: string) {
    this.operator = operator;
  }

  calculate(a: number, b: number) {
    switch (this.operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        throw new Error("Invalid operator");
    }
  }
}

const calc = new BasicCalculator();
console.log(calc.calculate(5, 5)); // 10
calc.setOperator("*");
console.log(calc.calculate(5, 5)); // 25

;
