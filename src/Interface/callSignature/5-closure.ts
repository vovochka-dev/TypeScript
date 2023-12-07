interface Operation {
  //operator: string;
  (a: number, b: number): number;
}

interface OperationConstructor {
  (operator: string): Operation;
}

let OperationConstructor: OperationConstructor = function (operator) {
  let Operation = function (a: number, b: number) {
    if (operator === "+") {
      return a + b;
    }
    if (operator === "-") {
      return a - b;
    }
    return a + b;
  };
  return Operation;
};

let sum = OperationConstructor("+");
console.log(sum(10, 5)); // 15
let diff = OperationConstructor("-");
console.log(diff(10, 5)); // 5
//@ts-expect-error
console.log(sum.operator); // undefined

;
