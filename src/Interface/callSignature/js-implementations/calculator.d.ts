interface CalculatorConstructor {
  new (): Calculator;
  (a: number, b: number, operator?: string): number;
}
interface Calculator {
  operator: string;
  result?: number;
  calculate: (a: number, b: number, operator?: string) => number;
  setOperator: (value: string) => void;
}
declare const Calculator: CalculatorConstructor;
export default Calculator;
