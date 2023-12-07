type keyofAny = keyof any; // string | number | symbol
// only string number or symbol could be keys of object
let o = {
    "string": "ok",
    777: "ok",
    [Symbol('some')]: "ok",
    true: "ok, but it's string", // true is a string typ
    //@ts-expect-error
    [true]: "not ok" // TS2464: A computed property name must be of type 'string', 'number', 'symbol', or 'any'
}

type RecorCustom1<K, T> = {
    // TS2322: Type 'K' is not assignable to type 'string | number | symbol'
    //@ts-expect-error
    [P in K]: T;
};

type RecorCustom<K extends keyof any, T> = {
    [P in K]: T;
};
type User = {
    name: string,
    age: number
}

// take fields of User and create a new object type with the same fields, but with another type
type UserBoolean = Record<keyof User, boolean>



