// There are not much sense to set interface for regular function, because there are function type expression
interface allNumbers {
  (x: number, y: number): number;
}
// equivalent function type expression
type allNumbers2 = (x: number, y: number) => number;

let sum: allNumbers = function sum(x, y) {
  // We can omit attribute and return types implicitly
  return x + y;
};

let diff: allNumbers2 = function sum(x, y): number {
  return x - y;
};

exports = {};
