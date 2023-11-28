// never from function
function getDebtNever(): never { // implicitly void
  throw Error("Tomorrow");
} // never
function getDebtNeverWhile(): never { // implicitly void
  while (true) {}
} // never

function getDebt() {} // void, not "never"

// A function returning "never" cannot have a reachable end point.
//@ts-expect-error. Expect never, get void
function getDebt2(): never {} // void, not "never"

// error if we return some type
function getDebtAny(): never {
  let anyValue: any;
  //@ts-expect-error
  return anyValue;
  //@ts-expect-error
  return undefined;
}

// but we can return "never"
function getNever():never  {
  throw Error("error");
}
function getDebtAnyAsNever(): never {
  const neverValue = getNever(); // :never
  return neverValue;
}

export {};
