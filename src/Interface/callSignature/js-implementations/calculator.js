export default function Calculator() {
  const args = arguments;
  let self = {};
  self.operator = "+";
  self.calculate = function (a, b, operator = self.operator) {
    if (operator === "+") {
      self.result = a + b;
    } else if (operator === "-") {
      self.result = a - b;
    } else if (operator === "*") {
      self.result = a * b;
    } else if (operator === "/") {
      self.result = a / b;
    } else {
      throw new Error("Unknown operator");
    }
    return self.result;
  };
  if (!(this instanceof Calculator)) {
    return self.calculate(args[0], args[1], args[2]);
  }
  return self;
}

const calc = new Calculator();

// calculate
console.log(calc.calculate(5, 5)); // 10
console.log(calc.calculate(5, 5, "*")); // 25
console.log(calc.calculate(5, 5, "+")); // 10

// operator
console.log(calc.operator); // + default value
calc.operator = "*"; // change default
console.log(calc.calculate(5, 5)); // 25 Result with new default operator
console.log(calc.calculate(5, 5, "+")); // 10 // We can overwrite default operator

console.log(Calculator(5, 5, "-")); // 0 Usage as function, not as class

calc.operator = "/";
console.log(Calculator(5, 5, "-")); // 0
console.log(calc.calculate(5, 5, "/")); // 1
console.log(Calculator(5, 5)); // 0

console.log(calc.calculate(5, 5, "-")); // 0
console.log(calc.operator); // 0
