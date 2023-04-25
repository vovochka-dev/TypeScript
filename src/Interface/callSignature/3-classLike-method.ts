// If we want not only constructor, but some state(operator) or method(setOperator)
// we need return object. But for this purpose there are classes.
// So it is a better way. Just use classes.

interface Calculator {
  operator: string;
  setOperator(operator: string): void;
  calculate(a: number, b: number): number;
}

function BasicCalculator(): Calculator {
  return {
    operator: "+",
    calculate: function (a: number, b: number): number {
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
    },
    setOperator: function (operator: string): void {
      this.operator = operator;
    },
  };
}

const calc = BasicCalculator(); // without new. It's not a class
console.log(calc.calculate(5, 5)); // 10
calc.setOperator("*");
console.log(calc.calculate(5, 5)); // 25

export {};
