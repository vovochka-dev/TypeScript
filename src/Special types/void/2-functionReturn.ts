// void from function
function getBudgetVoid() {} // void
// void. Even if we set return
function getBudgetReturn() {
  return;
}
// any implicitly
function getBudgetAny() {
  let anyValue: any;
  return anyValue;
}
// undefined implicitly
function getBudgetUndefined() {
  return undefined;
}
// void explicitly
function getBudgetAnyAsVoid(): void {
  let anyValue: any;
  return anyValue;
}
// void explicitly
function getBudgetUndefinedAsVoid(): void {
  return undefined;
}
// number
function getBudgetVoid2() {
  return 0;
}
// Expect void, get number. Same error with all types except any, undefined and void
function getBudgetVoid3(): void {
  //@ts-expect-error
  return 0;
}

;
