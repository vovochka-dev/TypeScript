// never from function
function getDebtNever(): never {
  throw Error("Tomorrow");
} // never
function getDebtNeverWhile(): never {
  while (true) {}
} // never

function getDebt() {} // void, not "never"

//@ts-expect-error. Expect never, get void
function getDebt2(): never {} // void, not "never"

// error if we return some type
//@ts-expect-error
function getDebtAny(): never {
  //let anyValue: any;
  //return anyValue;
  //return undefined;
}

// event can't return never
function getDebtAnyAsNever(): never {
  let neverFoo = (): never => {
    throw Error("error");
  };
  //@ts-expect-error
  return neverFoo;
}

export {};
